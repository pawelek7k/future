"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { CiCirclePlus, CiSettings } from "react-icons/ci";
import { IoLibrary, IoLogOutOutline } from "react-icons/io5";
import { Logo } from "../global/Logo";

export const SiteNavigation: React.FC = () => {
  const logoutHandler = () => {
    signOut();
  };

  return (
    <header className="flex justify-between p-4 w-full fixed z-40  backdrop-blur-md rounded-b-lg border-b top-0 items-center dark:border-b-zinc-800 shadow-lg">
      <Logo />
      <nav className="md:flex items-center justify-evenly w-full">
        <ul className="flex justify-center gap-8  tracking-widest md:justify-evenly">
          <li>
            <Link href="myworks/create" className="flex items-center gap-2">
              <CiCirclePlus className="w-6 h-6" />
              <span className="text-sm  hidden md:block">Create</span>
            </Link>
          </li>
          <li>
            <Link href="/library" className="flex items-center gap-2">
              <IoLibrary className="w-6 h-6 block" />
              <span className="text-sm  hidden md:block">Library</span>
            </Link>
          </li>
          <li>
            <Link href="/settings" className="flex items-center gap-2 ">
              <CiSettings className="w-6 h-6" />
              <span className="text-sm hidden md:block">Settings</span>
            </Link>
          </li>
          <li>
            <button
              className="text-sm flex items-center gap-2"
              onClick={logoutHandler}
            >
              <IoLogOutOutline className="w-6 h-6" />
              <span className="text-sm hidden md:block">Log out</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
