import { useState } from "react";
import { PrimaryButton } from "../global/Buttons";
import { SecondHeading } from "../global/Heading";
import { Loader } from "../global/Loader";

export const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleCurrentPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setMessage("");
    setIsSuccess(null);

    try {
      const response = await fetch("/api/auth/change-password", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          oldPassword: currentPassword,
          newPassword: newPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update password.");
      }

      setMessage("Password updated successfully!");
      setIsSuccess(true);
    } catch (error) {
      setMessage(error.message || "Something went wrong!");
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
      setCurrentPassword("");
      setNewPassword("");
    }
  };

  return (
    <>
      {isSubmitting && <Loader />}
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

        {message && (
          <p
            className={`mt-4 text-sm ${
              isSuccess ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <div className="flex justify-end">
          <PrimaryButton isSubmitting={isSubmitting}>
            {isSubmitting ? "Changing..." : "Change Password"}
          </PrimaryButton>
        </div>
      </form>
    </>
  );
};
