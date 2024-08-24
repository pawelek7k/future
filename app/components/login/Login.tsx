"use client";

import React from "react";
import { FaFacebookSquare, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoogleButton } from "../global/Buttons";

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
  <div className="bg-neutral-50/20 dark:bg-zinc-900/20 text-gray-900 dark:text-neutral-50 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10">
    <h1 className="text-2xl font-semibold">Welcome back!</h1>
    <p>Please enter your account details</p>
    <form onSubmit={submitHandler} className="mt-8">
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
        >
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Wpisz swój e-mail"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-sky-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
        >
          Hasło
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Wpisz swoje hasło"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-sky-500"
        />
      </div>
      <ul className="flex flex-col gap-4">
        <li>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Zaloguj się
          </button>
        </li>
        <li>
          <GoogleButton />
        </li>
      </ul>
      <ul className="flex gap-10 md:items-center md:mt-10 mb-10 md:mb-0 justify-center">
        <li>
          <a href="">
            <FaFacebookSquare className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a href="">
            <FaXTwitter className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a href="">
            <FaPinterest className="w-6 h-6" />
          </a>
        </li>
      </ul>
    </form>
  </div>
);
