import { useRef } from "react";

export const PasswordChangeForm: React.FC = () => {
  const oldPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredOldPassword = oldPasswordRef.current?.value || "";
    const enteredNewPassword = newPasswordRef.current?.value || "";

    console.log("Old Password:", enteredOldPassword);
    console.log("New Password:", enteredNewPassword);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Change Password</h2>
      <div className="mb-4">
        <label
          htmlFor="current-password"
          className="block text-sm font-medium text-gray-700"
        >
          Current Password
        </label>
        <input
          id="current-password"
          type="password"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
          ref={oldPasswordRef}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="new-password"
          className="block text-sm font-medium text-gray-700"
        >
          New Password
        </label>
        <input
          id="new-password"
          type="password"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
          ref={newPasswordRef}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        Change Password
      </button>
    </form>
  );
};
