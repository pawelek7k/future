import { FirstHeading } from "@/app/components/global/Heading";
import Head from "next/head";

const SettingsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Future - Settings</title>
      </Head>
      <section className="h-screen">
        <FirstHeading>Your global settings</FirstHeading>
      </section>
    </>
  );
};

export default SettingsPage;
