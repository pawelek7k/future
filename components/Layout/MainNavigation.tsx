import { useSession } from "next-auth/react";
import Link from "next/link";

export const MainNavigation = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <header className="flex justify-evenly p-4 w-full text-text fixed z-50 bg-secondaryBg backdrop-blur-md rounded-b-lg border-b border-secondary top-0">
      <nav>
        <ul className="flex gap-8 tracking-widest">
          {!session && !loading && (
            <li>
              <Link href="/login">Join us</Link>
            </li>
          )}
          {session && (
            <li>
              <Link href="/profile">Your profile</Link>
            </li>
          )}
          {session && (
            <li>
              <button>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
