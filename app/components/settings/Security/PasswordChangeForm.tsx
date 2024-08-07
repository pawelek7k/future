import { SecondHeading } from "@/app/components/global/heading";
import { useRef } from "react";
import { PrimaryButton } from "../../global/buttons";

interface PasswordChangeFormProps {
  onChangePassword: (passwordData: {
    oldPassword: string;
    newPassword: string;
  }) => void;
}

export const PasswordChangeForm: React.FC<PasswordChangeFormProps> = ({
  onChangePassword,
}) => {
  const oldPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredOldPassword = oldPasswordRef.current?.value || "";
    const enteredNewPassword = newPasswordRef.current?.value || "";

    console.log("Old Password:", enteredOldPassword);
    console.log("New Password:", enteredNewPassword);

    onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-md bg-neutral-50 mt-20"
    >
      <SecondHeading>Zmień hasło</SecondHeading>
      <div className="mb-4 mt-4">
        <label
          htmlFor="current-password"
          className="block text-sm font-medium text-gray-700"
        >
          Current Password
        </label>
        <input
          id="current-password"
          type="password"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-sky-950 sm:text-sm"
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
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-sky-950 sm:text-sm"
          required
          ref={newPasswordRef}
        />
      </div>
      <PrimaryButton>Zmień hasło</PrimaryButton>
    </form>
  );
};
