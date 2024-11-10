import { FirstHeading } from "@/app/components/global/headings/FirstHeading";
import { UserProfile } from "@/app/components/settings/UserProfile";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

export const metadata = {
  title: "Settings - Future",
  description: "Configure your settings here",
};

interface SettingsLayoutProps {
  children: ReactNode;
}

const SettingsLayout: React.FC<SettingsLayoutProps> = ({ children }) => {
  const t = useTranslations("headings");
  return (
    <section className="h-screen">
      <FirstHeading>{t("settings")}</FirstHeading>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <UserProfile />
        {children}
      </div>
    </section>
  );
};

export default SettingsLayout;
