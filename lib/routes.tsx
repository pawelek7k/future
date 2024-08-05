import { FaRegUser } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineManageAccounts, MdSecurity } from "react-icons/md";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";

type BookGenre = {
  id: number;
  name: string;
};

export const sidebarItems = [
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

export const bookGenres: BookGenre[] = [
  { id: 1, name: "Science Fiction" },
  { id: 2, name: "Fantasy" },
  { id: 3, name: "Mystery" },
  { id: 4, name: "Thriller" },
  { id: 5, name: "Romance" },
  { id: 6, name: "Historical Fiction" },
  { id: 7, name: "Biography" },
  { id: 8, name: "Self-Help" },
  { id: 9, name: "Non-Fiction" },
  { id: 10, name: "Horror" },
  { id: 11, name: "Young Adult" },
  { id: 12, name: "Children's" },
  { id: 13, name: "Classics" },
  { id: 14, name: "Adventure" },
  { id: 15, name: "Dystopian" },
  { id: 16, name: "Poetry" },
  { id: 17, name: "Graphic Novel" },
  { id: 18, name: "Literary Fiction" },
  { id: 19, name: "Crime" },
  { id: 20, name: "Cookbook" },
];
