"use client";

import { sidebarItems } from "@/lib/arrays/settings";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useState } from "react";
import { FirstHeading } from "../global/Heading";

export const Sidebar: React.FC = () => {
  const [isOpen, setOpen] = useState(true);

  return (
    <div>
      <div className={`fixed z-50 top-2 right-5 transform -translate-x-1/2`}>
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      </div>

      <div
        className={`fixed top-0 right-0 h-full text-sky-950  bg-neutral-100/50 dark:bg-zinc-950/20 p-4 pt-24 z-40 transition-transform duration-300 ease-in-out backdrop-blur-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "250px" }}
      >
        <FirstHeading>Settings</FirstHeading>
        <ul className="space-y-2 mt-6">
          {sidebarItems.map((item) => (
            <li
              key={item.id}
              className="hover:bg-neutral-100/10 rounded transition-colors w-full dark:hover:bg-zinc-800/10"
            >
              <Link
                href={`/settings/${item.id}`}
                className="gap-4 p-2 w-full h-full text-sky-950 flex items-center hover:text-neutral-400 transition-all dark:text-neutral-50"
              >
                <span className="text-xl"></span> {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
