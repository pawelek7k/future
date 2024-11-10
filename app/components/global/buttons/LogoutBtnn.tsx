import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import { IoLogOutOutline } from "react-icons/io5";

export const LogoutButton: React.FC = () => {
  const t = useTranslations("navigation");
  const logoutHandler = async () => {
    await signOut({ redirect: false });
    window.location.reload();
  };

  return (
    <button
      onClick={logoutHandler}
      aria-label="logout"
      className="text-sm flex items-center gap-2"
    >
      <IoLogOutOutline className="sm:w-6 sm:h-6 h-5 w-5" />
      <span className="text-sm hidden md:block">{t("logout")}</span>
    </button>
  );
};
