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
        <div className="bg-hero-bg w-1/2 h-1/2 flex items-center justify-center backdrop-blur-md rounded-br-3xl rounded-tl-3xl">
          <h1 className="sm:text-3xl font-semibold font-sans text-neutral-50 text-2xl">
            Kreuj Przyszłość Książek z Future!
          </h1>
        </div>
      </section>
    </>
  );
};

export default HomePage;
