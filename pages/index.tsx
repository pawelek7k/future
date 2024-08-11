import { FirstHeading } from "@/app/components/global/heading";
import { SocialContainer } from "@/app/components/hero/Socials";
import { HeroNavigation } from "@/app/components/layout/HeroNavigation";
import Head from "next/head";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Future</title>
        <meta name="description" content="Future" />
      </Head>
      <HeroNavigation />
      <section className="h-screen bg-hero-marketing-bg flex items-center justify-center ">
        <SocialContainer />
        <div className="bg-white/50 dark:bg-zinc-900/20 w-1/2 h-1/2 flex items-center justify-center backdrop-blur-md rounded-br-lg rounded-tl-lg">
          <FirstHeading>Kreuj Przyszłość Książek z Future!</FirstHeading>
        </div>
      </section>
    </>
  );
};

export default HomePage;
