import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import "../../styles/card.css";
import { MarketingNavigation } from "../navigations/MarketingNav";
import { Cards } from "./Cards";
import { Quotes } from "./Quotes";

export const Hero: React.FC = () => {
  return (
    <section className="p-28 h-screen bg-black  relative bg-hero-img bg-center bg-cover bg-fixed">
      <Quotes />
      <MarketingNavigation />
      <div className="flex md:justify-between justify-center">
        <div className="flex flex-col gap-8 justify-center items-center md:items-start">
          <h1 className="text-neutral-100 text-3xl sm:text-6xl lg:text-8xl w-1/2 text-center md:text-start leading-loose">
            Create your way with Future!
          </h1>
          <div className="text-neutral-100 bg-sky-950 rounded-full flex justify-between py-1 items-center px-6 border border-sky-800 w-96">
            <p className="flex items-center gap-4">
              Read More <FaArrowDown />
            </p>
            <span className="font-semibold">&</span>
            <Link
              href="/login"
              className="py-2 px-8 border border-sky-800 rounded-full hover:bg-sky-800 transition ease-in-out"
            >
              Join us!
            </Link>
          </div>
        </div>
        <Cards />
      </div>
    </section>
  );
};
