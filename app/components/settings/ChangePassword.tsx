import { useState } from "react";
import { PrimaryButton } from "../global/Buttons";
import { SecondHeading } from "../global/Heading";
import { Loader } from "../global/Loader";

export const ChangePassword: React.FC = () => {
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
      <div className="dark:bg-zinc-950/90 bg-neutral-100/20 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10 dark:shadow-rose-950 shadow-sky-950">
        <form onSubmit={handleSubmit}>
          <SecondHeading>Change Password</SecondHeading>

          <div className="mb-6 mt-6">
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-rose-950"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-rose-950"
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
      </div>
    </>
  );
};
