"use client";

import React from "react";

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
    <div className="bg-neutral-50 dark:bg-zinc-900 text-gray-900 dark:text-neutral-50 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10">
      <h1>Rejestracja</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
          >
            Imię
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Wpisz swoje imię"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white  text-gray-900  placeholder-gray-500  focus:outline-none focus:border-sky-950 "
          />
        </div>
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white  text-gray-900  placeholder-gray-500  focus:outline-none focus:border-sky-950 "
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white  text-gray-900  placeholder-gray-500  focus:outline-none focus:border-sky-950 "
          />
        </div>
        <button>Zarejestruj się</button>
      </form>
    </div>
  );
};
