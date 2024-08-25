import React from "react";
import { GoogleButton, PrimaryButton } from "../global/Buttons";
import { Socials } from "./Socials";

interface FormData {
  email: string;
  username?: string;
  password: string;
}

interface LoginFormProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  formData,
  handleChange,
  submitHandler,
}) => (
  <div className="bg-zinc-950/90 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10 shadow-rose-950">
    <h1 className="text-2xl font-semibold text-neutral-100 text-center">
      Welcome back!
    </h1>
    <p className="text-neutral-100 bg-sky-950 p-1 rounded-full shadow-lg text-center mb-6">
      Please enter your account details.
    </p>
    <form onSubmit={submitHandler} className="">
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-neutral-100 text-sm font-medium mb-2"
        >
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your e-mail"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-rose-950"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-neutral-100 text-sm font-medium mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-rose-950"
        />
      </div>
      <ul className="flex flex-col gap-4">
        <li>
          <PrimaryButton>Log in!</PrimaryButton>
        </li>
        <li>
          <GoogleButton />
        </li>
      </ul>
      <Socials />
    </form>
  </div>
);
