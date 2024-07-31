import { createUser } from "@/lib/signup/userApi";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { PrimaryButton } from "../buttons";
import { LoginForm } from "./Login";
import { SignupForm } from "./Signup";

export const Container = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const router = useRouter();

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLogin) {
      try {
        const result = await signIn("credentials", {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });

        if (result && !result.error) {
          router.replace("/profile");
        }
        console.log(result);
      } catch (error) {
        console.error("Login error:", error);
      }
    } else {
      try {
        const result = await createUser(
          formData.email,
          formData.username,
          formData.password
        );
        console.log("User created:", result);
      } catch (error) {
        console.error("Error creating user:", error);
      }
    }
  };

  return (
    <div className="container mx-auto p-20 flex flex-col justify-center items-center">
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
      <div>
        <PrimaryButton onClick={toggleForm}>
          {isLogin ? "Przełącz na Rejestrację" : "Przełącz na Logowanie"}
        </PrimaryButton>
      </div>
    </div>
  );
};
