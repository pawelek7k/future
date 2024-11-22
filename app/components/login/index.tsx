"use client";

import { createUser } from "@/lib/signup/userApi";
import { useRouter } from "@/navigation";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import Notiflix from "notiflix";
import { useState } from "react";
import { SecondaryButton } from "../global/buttons/SecondaryBtn";
import { Loader } from "../global/Loader";
import { LoginForm } from "./Login";
import { SignupForm } from "./Signup";

export const Container: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "john.doe99@example.com",
    username: "user123",
    password: "Password1",
  });
  const [isLoading, setIsLoading] = useState(false);
  const loginT = useTranslations("login");
  const signupT = useTranslations("signup");

  const router = useRouter();

  const toggleForm = () => setIsLogin((prev) => !prev);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (isLogin) {
      try {
        const result = await signIn("credentials", {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });

        if (result?.error) {
          Notiflix.Notify.failure("Invalid email or password");
        } else {
          Notiflix.Notify.success("Logged in correctly");
          router.push("/home");
        }
      } catch (error) {
        Notiflix.Notify.failure("Error logging in. Please try again.");
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        const result = await createUser(
          formData.email,
          formData.username,
          formData.password
        );
        console.log("User created:", result);

        const signInResult = await signIn("credentials", {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });

        if (signInResult?.error) {
          Notiflix.Notify.failure("Error during login after registration.");
        } else {
          Notiflix.Notify.success("User registered and logged in successfully");
          router.push("/home");
        }
      } catch (error) {
        Notiflix.Notify.failure("Error creating user. Try again later");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="h-screen container mx-auto flex flex-col justify-center items-center">
      {isLogin ? (
        <LoginForm
          formData={formData}
          handleChange={handleChange}
          submitHandler={submitHandler}
        />
      ) : (
        <SignupForm
          formData={formData}
          handleChange={handleChange}
          submitHandler={submitHandler}
        />
      )}
      <div className="flex items-center gap-4 mt-10">
        <p className="text-neutral-100">or</p>
      </div>
      <div className="mt-10">
        <SecondaryButton onClick={toggleForm}>
          {isLogin ? loginT("switch") : signupT("switch")}
        </SecondaryButton>
      </div>
      {isLoading && <Loader />}
    </div>
  );
};
