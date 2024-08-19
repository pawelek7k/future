import { FirstHeading } from "@/app/components/global/Heading";
import { Sidebar } from "@/app/components/settings/Sidebar";
import Head from "next/head";

const SettingsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Future - Settings</title>
      </Head>
      <section className="h-screen">
        <FirstHeading>Your global settings</FirstHeading>
        <Sidebar />
      </section>
    </>
  );
};

export default SettingsPage;
