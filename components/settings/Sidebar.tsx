"use client";

import { sidebarItems } from "@/lib/routes";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useState } from "react";
import { SecondHeading } from "../global/heading";

export const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className={`fixed z-50 top-2 left-1/2 transform -translate-x-1/2`}>
        <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
      </div>

      <div
        className={`fixed top-0 right-0 h-full bg-neutral-100 text-sky-950 p-4 pt-20 z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "250px" }}
      >
        <SecondHeading>Ustawienia</SecondHeading>
        <ul className="space-y-2 mt-6">
          {sidebarItems.map((item) => (
            <li
              key={item.id}
              className="hover:bg-neutral-200 rounded transition-colors w-full"
            >
              <Link
                href={`/settings/${item.id}`}
                className="gap-4 p-2 w-full h-full text-sky-950 flex items-center hover:text-neutral-400 transition-all"
              >
                <span className="text-xl">{item.icon}</span> {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
