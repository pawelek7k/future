import { GoogleButton } from "../buttons";

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
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10">
    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Logowanie</h2>
    <form onSubmit={submitHandler}>
      <div className="mb-4">
        <label
          htmlFor="email2"
          className="block text-gray-700 text-sm font-medium mb-2"
        >
          E-mail
        </label>
        <input
          type="email"
          id="email2"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Wpisz swój e-mail"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password2"
          className="block text-gray-700 text-sm font-medium mb-2"
        >
          Hasło
        </label>
        <input
          type="password"
          id="password2"
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
        Zaloguj się
      </button>
      <GoogleButton />
    </form>
  </div>
);
