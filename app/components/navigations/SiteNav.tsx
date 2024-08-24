"use client";

import { Divide as Hamburger } from "hamburger-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { CiCirclePlus, CiSettings } from "react-icons/ci";
import { IoLibrary, IoLogOutOutline } from "react-icons/io5";
import { Logo } from "../global/Logo";

export const SiteNavigation: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const logoutHandler = () => {
    signOut();
  };

  return (
    <header className="flex justify-between p-4 w-full fixed z-40  backdrop-blur-md rounded-b-lg border-b top-0 items-center dark:border-b-zinc-800 shadow-lg">
      <Logo />
      <nav className="hidden md:flex items-center justify-evenly w-full">
        <ul className="flex gap-8 tracking-widest justify-evenly">
          <li>
            <Link href="myworks/create" className="flex items-center gap-2">
              <CiCirclePlus className="w-6 h-6" />
              <span className="text-sm">Create</span>
            </Link>
          </li>
          <li>
            <Link href="/library" className="flex items-center gap-2">
              <IoLibrary className="w-6 h-6" />
              <span className="text-sm">Library</span>
            </Link>
          </li>
          <li>
            <Link href="/settings" className="flex items-center gap-2">
              <CiSettings className="w-6 h-6" />
              <span className="text-sm">Settings</span>
            </Link>
          </li>
          <li>
            <button
              className="text-sm flex items-center gap-2"
              onClick={logoutHandler}
            >
              <IoLogOutOutline className="w-6 h-6" />
              Logout
            </button>
          </li>
        </ul>
      </nav>

      <div className="md:hidden">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={20}
          aria-expanded={isOpen}
        />
      </div>

      {isOpen && (
        <nav className="absolute top-20 left-0 w-full p-4 rounded-b-lg shadow-lg md:hidden  backdrop-blur-md bg-neutral-100/50 z-40 ">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="myworks/create" className="flex items-center gap-2">
                <CiCirclePlus className="w-6 h-6" />
                <span className="text-sm">Create</span>
              </Link>
            </li>
            <li>
              <Link href="/library" className="flex items-center gap-2">
                <IoLibrary className="w-6 h-6" />
                <span className="text-sm">Library</span>
              </Link>
            </li>
            <li>
              <Link href="/settings" className="flex items-center gap-2">
                <CiSettings className="w-6 h-6" />
                <span className="text-sm">Settings</span>
              </Link>
            </li>
            <li>
              <button
                className="text-sm flex items-center gap-2"
                onClick={logoutHandler}
              >
                <IoLogOutOutline className="w-6 h-6" />
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
