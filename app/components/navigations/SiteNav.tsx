"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { CiCirclePlus, CiSettings } from "react-icons/ci";
import { IoLibrary } from "react-icons/io5";

export const SiteNavigation: React.FC = () => {
  const logoutHandler = () => {
    signOut();
  };

  return (
    <header className="flex justify-evenly p-4 w-full fixed z-40 bg-secondaryBg backdrop-blur-md rounded-b-lg border-b top-0 items-center dark:border-b-zinc-800 shadow-lg">
      <nav>
        <ul className="flex gap-8 tracking-widest">
          <li>
            <Link href="/home/create">
              <CiCirclePlus className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link href="/home/library">
              <IoLibrary className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link href="/home/settings">
              <CiSettings className="w-6 h-6" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
