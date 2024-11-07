import { useTranslations } from "next-intl";
import React from "react";
import { GoogleButton } from "../global/buttons/GoogleBtn";
import { PrimaryButton } from "../global/buttons/PrimaryBtn";
import { InputField } from "../global/InputField";
import { Socials } from "./Socials";

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
}) => {
  const t = useTranslations("login");
  return (
    <div className="bg-zinc-950/90 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-20 shadow-rose-950">
      <h1 className="text-2xl font-semibold text-neutral-100 text-center">
        {t("heading")}
      </h1>
      <p className="text-neutral-100 bg-sky-950 p-1 rounded-full shadow-lg text-center mb-6">
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
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder={t("passwordPlaceholder")}
          autoComplete="current-password"
          label={t("passwordLabel")}
        />
        <ul className="flex flex-col gap-4">
          <li>
            <PrimaryButton>{t("button")}</PrimaryButton>
          </li>
          <li>
            <GoogleButton />
          </li>
        </ul>
        <Socials />
      </form>
    </div>
  );
};
