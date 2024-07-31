import Head from "next/head";
import { useRouter } from "next/router";
import { FaRegUser } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineManageAccounts, MdSecurity } from "react-icons/md";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { Sidebar } from "../../components/settings/Sidebar";

const settingsContent = {
  profile: {
    title: "Profil",
    content: "Tu możesz edytować swój profil...",
    icon: <FaRegUser />,
  },
  account: {
    title: "Konto",
    content: "Tu możesz zarządzać kontem...",
    icon: <MdOutlineManageAccounts />,
  },
  notifications: {
    title: "Powiadomienia",
    content: "Tu możesz zarządzać powiadomieniami...",
    icon: <IoIosNotificationsOutline />,
  },
  security: {
    title: "Bezpieczeństwo",
    content: "Tu możesz ustawić opcje bezpieczeństwa...",
    icon: <MdSecurity />,
  },
  privacy: {
    title: "Prywatność",
    content: "Tu możesz zarządzać prywatnością...",
    icon: <RiGitRepositoryPrivateLine />,
  },
  general: {
    title: "Ogólne",
    content: "Tu znajdziesz ogólne ustawienia...",
    icon: <IoSettingsOutline />,
  },
};

const SettingPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const content = settingsContent[id as keyof typeof settingsContent] || {
    title: "Nieznane ustawienie",
    content: "Brak dostępnych danych.",
    icon: null,
  };

  return (
    <>
      {" "}
      <Head>
        <title>Future - Zarządzaj swoimi ustawieniami!</title>
      </Head>
      <section className="flex">
        <Sidebar />
        <div className="flex-1 p-4 mt-20">
          <h1 className="text-2xl font-bold mb-4">{content.title}</h1>
          <div className="text-gray-700">{content.content}</div>
        </div>
      </section>
    </>
  );
};

export default SettingPage;
