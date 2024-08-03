import { FaRegUser } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineManageAccounts, MdSecurity } from "react-icons/md";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";


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