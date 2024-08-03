import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Logo } from "../../components/global/Logo";

export const MainNavigation: React.FC = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const { t } = useTranslation("common");

  const logoutHandler = () => {
    signOut();
  };

  return (
    <header className="flex justify-evenly p-4 w-full fixed z-40 bg-secondaryBg backdrop-blur-md rounded-b-lg border-b top-0 items-center dark:border-b-zinc-800">
      <Logo />
      <nav>
        <ul className="flex gap-8 tracking-widest">
          {!session && !loading && (
            <li>
              <Link href="/login">{t("loginButton")}</Link>
            </li>
          )}
          {session && (
            <>
              <li>
                <Link href="/settings">{t("settings")}</Link>
              </li>
              <li>
                <button onClick={logoutHandler}>{t("logoutButton")}</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
