import { createUser } from "@/lib/signup/userApi";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { PrimaryButton } from "../global/buttons";
import { Line } from "../global/line";
import { LoginForm } from "./Login";
import { SignupForm } from "./Signup";

export const Container: React.FC = () => {
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
          router.replace("/home");
        }
        console.log("Sign In Result:", result);
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
        <Line />
        <p>lub</p>
        <Line />
      </div>
      <div className="mt-10">
        <PrimaryButton onClick={toggleForm}>
          {isLogin ? "Przełącz na Rejestrację" : "Przełącz na Logowanie"}
        </PrimaryButton>
      </div>
    </div>
  );
};
