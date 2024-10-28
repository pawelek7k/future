import { FirstHeading } from "@/app/components/global/headings/FirstHeading";
import { GlobalSettings } from "@/app/components/settings";

export const metadata = {
  title: "Future - Your Settings",
  description: "Future",
};

const SettingsPage: React.FC = () => {
  return (
    <>
      <section className="h-screen">
        <FirstHeading>Your profile</FirstHeading>
        <GlobalSettings />
      </section>
    </>
  );
};

export default SettingsPage;
