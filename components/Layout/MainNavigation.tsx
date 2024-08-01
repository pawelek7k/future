import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Logo } from "../global/Logo";

export const MainNavigation = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  const logoutHandler = () => {
    signOut();
  };

  console.log("Session Data:", session);
  console.log("Loading Status:", loading);

  return (
    <header className="flex justify-evenly p-4 w-full  fixed z-50 bg-secondaryBg backdrop-blur-md rounded-b-lg border-b top-0 items-center">
      <Logo />
      <nav>
        <ul className="flex gap-8 tracking-widest">
          {!session && !loading && (
            <li>
              <Link href="/login">Zaloguj się</Link>
            </li>
          )}
          {session && (
            <>
              {/* <li>
                <Link href="/profile">Twój profil</Link>
              </li> */}
              <li>
                <Link href="/settings">Ustawienia</Link>
              </li>
              <li>
                <button onClick={logoutHandler}>Wyloguj</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
