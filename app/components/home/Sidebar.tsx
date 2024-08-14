import { bookGenres } from "@/lib/routes";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useState } from "react";
import { LogoHeading } from "../global/heading";

export const Sidebar: React.FC = () => {
  const [isOpen, setOpen] = useState(true);

  return (
    <div>
      <div className={`fixed z-50 top-2 left-1/2 transform -translate-x-1/2`}>
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      </div>

      <div
        className={`fixed top-0 right-0 h-full text-sky-950 bg-neutral-100/20 dark:bg-zinc-950/20 p-4 pt-6 z-40 transition-transform duration-300 ease-in-out backdrop-blur-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "400px" }}
      >
        <LogoHeading>Filters</LogoHeading>
        <ul className="space-y-2">
          {bookGenres.map(({ id, name }) => (
            <li
              key={id}
              className="hover:bg-neutral-100/10 rounded transition-colors w-full dark:hover:bg-zinc-800/10"
            >
              <Link
                href={`/home/${id}`}
                className="gap-4 p-2 w-full h-full text-sky-950 flex items-center hover:text-neutral-400 transition-all dark:text-neutral-50"
              >
                <span className="text-sm">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
