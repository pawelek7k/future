import { useState } from "react";
import { PrimaryButton } from "../global/Buttons";
import { FirstHeading, SecondHeading } from "../global/Heading";

export const AccountContainer = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleCurrentPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitted:", { currentPassword, newPassword });
  };

  return (
    <section className="max-w-2xl mx-auto p-6 shadow-lg rounded-lg">
      <FirstHeading>Edit your profile</FirstHeading>

      <div className="mt-6">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Description:
        </label>
        <textarea
          name="description"
          id="description"
          className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-950 focus:border-transparent dark:bg-neutral-800 dark:border-neutral-600 dark:text-gray-200"
        ></textarea>
      </div>

      <SecondHeading>Your account</SecondHeading>

      <form
        className="mt-6 p-6 border border-gray-300 rounded-lg shadow-md bg-neutral-50 dark:bg-transparent dark:border-neutral-600"
        onSubmit={handleSubmit}
      >
        <SecondHeading>Change Password</SecondHeading>

        <div className="mb-6">
          <label
            htmlFor="current-password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Current Password
          </label>
          <input
            id="current-password"
            type="password"
            value={currentPassword}
            onChange={handleCurrentPassword}
            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-transparent dark:bg-neutral-800 dark:border-neutral-600 dark:text-gray-200"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="new-password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            New Password
          </label>
          <input
            id="new-password"
            type="password"
            value={newPassword}
            onChange={handleNewPassword}
            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-transparent dark:bg-neutral-800 dark:border-neutral-600 dark:text-gray-200"
            required
          />
        </div>

        <div className="flex justify-end">
          <PrimaryButton>Change Password</PrimaryButton>
        </div>
      </form>
    </section>
  );
};
