import { signIn, signOut } from "next-auth/react";
import { useTranslation } from "react-i18next";
import { FcGoogle } from "react-icons/fc";

interface ButtonProps {
  children: string;
  onClick?: () => void;
}

export const GoogleButton: React.FC = () => {
  const handleGoogleSignIn = async () => {
    try {
      await signIn("google", { redirect: true });
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };
  return (
    <button
      onClick={handleGoogleSignIn}
      className="flex items-center justify-center w-full bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out p-2 gap-2"
    >
      <FcGoogle />
      <span className="text-gray-800 text-sm font-medium">
        Sign in with Google
      </span>
    </button>
  );
};

export const PrimaryButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      type="submit"
      className="
        w-full bg-sky-900 text-white py-2 px-4 rounded-lg
        hover:bg-sky-950
        dark:bg-rose-900 dark:hover:bg-rose-800
        shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out
      "
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const LogoutButton = () => {
  const { t } = useTranslation("common");
  const logoutHandler = () => {
    signOut();
  };
  return <button onClick={logoutHandler}>{t("logoutButton")}</button>;
};
