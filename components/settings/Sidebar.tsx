import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineManageAccounts, MdSecurity } from "react-icons/md";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
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
  const [isOpen, setOpen] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isDesktop) {
      setOpen(true);
    }
  }, [isDesktop]);

  const toggleSidebar = () => {
    if (!isDesktop) {
      setOpen(!isOpen);
    }
  };

  return (
    <div>
      <div className={`fixed z-50 left-2 top-2 ${isDesktop ? "hidden" : ""}`}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div
        className={`fixed top-0 left-0 h-screen bg-neutral-100 text-sky-950 p-4 pt-20 z-48 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${isDesktop ? "md:relative md:translate-x-0 md:w-1/4" : ""}`}
      >
        <SecondHeading>Ustawienia</SecondHeading>
        <ul className="space-y-2 mt-6">
          {sidebarItems.map((item) => (
            <li key={item.id}>
              <Link
                href={`/settings/${item.id}`}
                className="p-2 hover:bg-neutral-200 rounded flex items-center gap-4"
                onClick={toggleSidebar}
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
