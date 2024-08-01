import Link from "next/link";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineManageAccounts, MdSecurity } from "react-icons/md";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { SecondHeading } from "../global/heading";

const sidebarItems = [
  { id: "profile", label: "Profil", icon: <FaRegUser /> },
  { id: "account", label: "Konto", icon: <MdOutlineManageAccounts /> },
  {
    id: "notifications",
    label: "Powiadomienia",
    icon: <IoIosNotificationsOutline />,
  },
  { id: "security", label: "Bezpieczeństwo", icon: <MdSecurity /> },
  { id: "privacy", label: "Prywatność", icon: <RiGitRepositoryPrivateLine /> },
  { id: "general", label: "Ogólne", icon: <IoSettingsOutline /> },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="mt-20 fixed z-50 -top-16 left-4"
        onClick={toggleSidebar}
      >
        <RxHamburgerMenu className="w-8 h-8" />
      </button>
      <div
        className={`fixed top-0 left-0 h-screen bg-neutral-100 text-sky-950 p-4 pt-20 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-1/4`}
      >
        <SecondHeading>Ustawienia</SecondHeading>
        <ul className="space-y-2 mt-6">
          {sidebarItems.map((item) => (
            <li key={item.id}>
              <Link
                href={`/settings/${item.id}`}
                className="p-2 hover:bg-neutral-200 rounded flex items-center gap-4"
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
