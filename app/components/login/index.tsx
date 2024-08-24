"use client";

import { createUser } from "@/lib/signup/userApi";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { MarketingNavigation } from "../navigations/MarketingNav";
import { LoginForm } from "./Login";
import { SignupForm } from "./Signup";

export const Container: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

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
          redirect: true,
          email: formData.email,
          password: formData.password,
          callbackUrl: "/home",
        });

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
      <MarketingNavigation />
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
        <p className="text-neutral-100">lub</p>
      </div>
      <div className="mt-10">
        <button onClick={toggleForm} className="text-neutral-100">
          {isLogin ? "Przełącz na Rejestrację" : "Przełącz na Logowanie"}
        </button>
      </div>
    </div>
  );
};
