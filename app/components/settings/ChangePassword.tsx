import Notiflix from "notiflix";
import { useState } from "react";
import { PrimaryButton } from "../global/buttons/PrimaryBtn";
import { SecondHeading } from "../global/headings/SecondHeading";
import { InputField } from "../global/InputField";
import { Loader } from "../global/Loader";

export const ChangePassword: React.FC = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/change-password", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          oldPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update password.");
      }

      Notiflix.Notify.success("Password updated successfully!");
      setFormData({ currentPassword: "", newPassword: "" });
    } catch {
      Notiflix.Notify.failure("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isSubmitting && <Loader />}
      <div className="dark:bg-zinc-950/90 bg-neutral-100/20 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10 dark:shadow-rose-950 shadow-sky-950">
        <form onSubmit={submitHandler}>
          <SecondHeading>Change Password</SecondHeading>

          <div className="mb-6 mt-6">
            <InputField
              id="current-password"
              name="currentPassword"
              type="password"
              value={formData.currentPassword}
              onChange={handleChange}
              placeholder="Enter your password"
              autoComplete="current-password"
              label="Current Password"
            />
          </div>

          <div className="mb-6">
            <InputField
              id="new-password"
              name="newPassword"
              type="password"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="Enter your new password"
              autoComplete="new-password"
              label="New Password"
            />
          </div>

          <div>
            <PrimaryButton isSubmitting={isSubmitting}>
              {isSubmitting ? "Changing..." : "Change Password"}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </>
  );
};
