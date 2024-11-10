"use client";

import { navItems } from "@/lib/arrays/navItems";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { Logo } from "../global/Logo";
import { LogoutButton } from "../global/buttons/LogoutBtnn";

export const SiteNavigation: React.FC = () => {
  const t = useTranslations("navigation");
  return (
    <header className="flex justify-between p-4 w-full fixed z-40  backdrop-blur-md rounded-b-lg border-b top-0 items-center dark:border-b-rose-950 shadow-lg">
      <Logo />
      <nav className="md:flex items-center justify-evenly w-full">
        <ul className="flex justify-center gap-8  tracking-widest md:justify-evenly">
          {navItems.map(({ href, icon: Icon, label }) => (
            <li
              key={label}
              className="dark:hover:text-rose-100 hover:text-sky-950 transition ease-in-out"
            >
              <Link
                href={href}
                className="flex items-center gap-2"
                aria-label={label}
              >
                <Icon className="sm:w-6 sm:h-6 h-5 w-5" />
                <span className="text-sm hidden md:block">{t(label)}</span>
              </Link>
            </li>
          ))}
          <li>
            <LogoutButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};
