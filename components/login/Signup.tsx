import { useState } from "react";

const createUser = async (
  email: string,
  username: string,
  password: string
) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
};

export const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await createUser(
        formData.email,
        formData.username,
        formData.password
      );
      console.log("User created:", result);
      // Można dodać kod do obsługi sukcesu, np. przekierowanie lub wyświetlenie komunikatu
    } catch (error) {
      console.error("Error creating user:", error);
      // Można dodać kod do obsługi błędu, np. wyświetlenie komunikatu
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-40">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Rejestracja</h2>
      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-medium mb-2"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-medium mb-2"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-medium mb-2"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Zarejestruj się
        </button>
      </form>
    </div>
  );
};
