import { HeroButton } from "@/app/components/global/buttons";
import { SocialContainer } from "@/app/components/hero/Socials";
import { HeroNavigation } from "@/app/components/layout/HeroNavigation";
import Head from "next/head";
import { FaArrowPointer } from "react-icons/fa6";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Future</title>
        <meta name="description" content="Future" />
      </Head>
      <HeroNavigation />
      <section className="h-screen bg-hero-marketing-bg bg-center flex items-center justify-center flex-col md:justify-start md:flex-row gap-4">
        <SocialContainer />
        <div className=" md:w-1/2 h-1/2 flex items-center justify-center md:justify-start p-8  lg:backdrop-blur-md rounded-br-3xl rounded-tl-3xl sm:pl-20 lg:pl-40">
          <h1 className="sm:text-7xl font-semibold font-sans text-neutral-50 text-5xl text-center sm:text-start">
            Kreuj Przyszłość Książek z Future!
          </h1>
        </div>
        <div className=" flex w-1/2 items-center justify-center">
          <ul className="flex items-center justify-center gap-4 flex-col sm:flex-row">
            <li>
              <HeroButton />
            </li>
            <li className="relative">
              <button className="text-neutral-100 font-sans tracking-wide transition easy-in-out hover:text-neutral-100/80">
                Read More
              </button>
              <FaArrowPointer className="absolute text-neutral-100 -right-5 animate-scale" />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default HomePage;
