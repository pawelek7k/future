import { useTranslation } from "react-i18next";
import { FaRegUser } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineManageAccounts, MdSecurity } from "react-icons/md";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";

type BookGenre = {
  id: number;
  name: string;
};

export const SidebarItems = () => {
  const { t } = useTranslation("common");

  return [
    { id: "profile", label: t("profile"), icon: <FaRegUser /> },
    { id: "account", label: t("account"), icon: <MdOutlineManageAccounts /> },
    {
      id: "notifications",
      label: t("notifications"),
      icon: <IoIosNotificationsOutline />,
    },
    { id: "security", label: t("security"), icon: <MdSecurity /> },
    {
      id: "privacy",
      label: t("privacy"),
      icon: <RiGitRepositoryPrivateLine />,
    },
    { id: "general", label: t("general"), icon: <IoSettingsOutline /> },
  ];
};

export const BookGenres = () => {
  const { t } = useTranslation("common");

  return [
    { id: 1, name: t("scienceFiction") },
    { id: 2, name: t("fantasy") },
    { id: 3, name: t("mystery") },
    { id: 4, name: t("thriller") },
    { id: 5, name: t("romance") },
    { id: 6, name: t("historicalFiction") },
    { id: 7, name: t("biography") },
    { id: 8, name: t("selfHelp") },
    { id: 9, name: t("nonFiction") },
    { id: 10, name: t("horror") },
    { id: 11, name: t("youngAdult") },
    { id: 12, name: t("childrens") },
    { id: 13, name: t("classics") },
    { id: 14, name: t("adventure") },
    { id: 15, name: t("dystopian") },
    { id: 16, name: t("poetry") },
    { id: 17, name: t("graphicNovel") },
    { id: 18, name: t("literaryFiction") },
    { id: 19, name: t("crime") },
    { id: 20, name: t("cookbook") },
  ];
};

export const ArrayGenres = [
  { id: 1, name: "Science Fiction" },
  { id: 2, name: "Fantasy" },
  { id: 3, name: "Mystery" },
  { id: 4, name: "Thriller" },
  { id: 5, name: "Romance" },
  { id: 6, name: "Historical Fiction" },
  { id: 7, name: "Biography" },
  { id: 8, name: "Self Help" },
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
