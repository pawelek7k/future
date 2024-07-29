import { createUser } from "@/lib/signup/userApi";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { LoginForm } from "./Login";
import { SignupForm } from "./Signup";

export const Container = () => {
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
          redirect: false,
          email: formData.email,
          password: formData.password,
        });
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
      <button
        onClick={toggleForm}
        className="mb-4 bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 mt-20"
      >
        {isLogin ? "Przełącz na Rejestrację" : "Przełącz na Logowanie"}
      </button>
    </div>
  );
};
