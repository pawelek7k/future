import React from "react";
import { PrimaryButton } from "../global/buttons/PrimaryBtn";
import { InputField } from "../global/InputField";
import { Socials } from "./Socials";

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
}) => (
  <div className="bg-zinc-950/90 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10 shadow-rose-950">
    <h1 className="text-2xl font-semibold text-neutral-100 text-center mb-4">
      Join us!
    </h1>
    <p className="text-neutral-100 bg-sky-950 p-1 rounded-full shadow-lg shadow-sky-950 text-center mb-4">
      Create your account now.
    </p>
    <form onSubmit={submitHandler}>
      <InputField
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your e-mail"
        autoComplete="email"
        label="E-mail"
      />
      <InputField
        id="username"
        name="username"
        type="text"
        value={formData.username}
        onChange={handleChange}
        placeholder="Enter your username"
        autoComplete="username"
        label="Username"
      />
      <InputField
        id="password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
        autoComplete="new-password"
        label="Password"
      />
      <PrimaryButton>Sign Up</PrimaryButton>
      <Socials />
    </form>
  </div>
);
