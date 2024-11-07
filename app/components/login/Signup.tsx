import { useTranslations } from "next-intl";
import React from "react";
import { PrimaryButton } from "../global/buttons/PrimaryBtn";
import { InputField } from "../global/InputField";
import { Socials } from "./Socials";

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
  const t = useTranslations("signup");
  return (
    <div className="bg-zinc-950/90 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10 shadow-rose-950">
      <h1 className="text-2xl  font-semibold text-neutral-100 text-center mb-4">
        {t("heading")}
      </h1>
      <p className="text-neutral-100 shadow-sky-950 bg-sky-950 p-1 rounded-full shadow-lg text-center mb-4">
        {t("paragraph")}
      </p>
      <form onSubmit={submitHandler}>
        <InputField
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t("emailPlaceholder")}
          autoComplete="email"
          label={t("emailLabel")}
        />
        <InputField
          id="username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          placeholder={t("usernamePlaceholder")}
          autoComplete="username"
          label={t("usernameLabel")}
        />
        <InputField
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder={t("passwordPlaceholder")}
          autoComplete="new-password"
          label={t("passwordLabel")}
        />
        <PrimaryButton>{t("button")}</PrimaryButton>
        <Socials />
      </form>
    </div>
  );
};
