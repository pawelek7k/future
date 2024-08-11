import { SocialContainer } from "@/app/components/hero/Socials";
import { HeroNavigation } from "@/app/components/layout/HeroNavigation";
import Head from "next/head";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Future</title>
        <meta name="description" content="Future" />
      </Head>
      <HeroNavigation />
      <section className="h-screen bg-hero-marketing-bg flex items-center justify-start ">
        <SocialContainer />
        <div className=" w-1/2 h-1/2 flex items-center justify-start backdrop-blur-md rounded-br-3xl rounded-tl-3xl pl-40">
          <h1 className="sm:text-7xl font-semibold font-sans text-neutral-50 text-xl text-start">
            Kreuj Przyszłość Książek z Future!
          </h1>
        </div>
        <div className=" flex w-1/2 items-center justify-center">
          <ul className="flex items-center justify-center gap-4">
            <li>
              <Link href="/login" className="text-neutral-100">
                Log in
              </Link>
            </li>
            <li>
              <Link href="/#" className="text-neutral-100">
                Read more
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default HomePage;
