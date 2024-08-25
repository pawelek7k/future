import React from "react";
import { PrimaryButton } from "../global/Buttons";

interface SignupFormProps {
  formData: {
    email: string;
    username: string;
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const SignupForm: React.FC<SignupFormProps> = ({
  formData,
  handleChange,
  submitHandler,
}) => {
  return (
    <form
      onSubmit={submitHandler}
      className="bg-neutral-50 dark:bg-zinc-900 text-gray-900 flex flex-col dark:text-neutral-50 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10 gap-6"
    >
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your e-mail"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-rose-950"
      />
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Enter your username"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-rose-950"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-rose-950"
      />
      <PrimaryButton>Sign Up</PrimaryButton>
    </form>
  );
};
