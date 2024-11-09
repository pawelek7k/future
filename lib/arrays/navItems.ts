import { IconType } from "react-icons";
import { CiCirclePlus, CiSettings } from "react-icons/ci";
import { IoLibrary } from "react-icons/io5";

interface NavItem {
    href: string;
    icon: IconType;
    label: string;
};

export const navItems: NavItem[] = [
    { href: "myworks/create", icon: CiCirclePlus, label: "create" },
    { href: "/library", icon: IoLibrary, label: "library" },
    { href: "/settings", icon: CiSettings, label: "settings" },
];