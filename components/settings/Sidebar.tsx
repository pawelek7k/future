import Link from "next/link";
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
  return (
    <div className="w-1/4 bg-neutral-100 text-sky-950 h-screen p-4 pt-20">
      <SecondHeading>Ustawienia</SecondHeading>
      <ul className="space-y-2">
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
  );
};
