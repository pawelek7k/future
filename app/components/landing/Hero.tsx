import Link from "next/link";
import "../../styles/card.css";
import { PrimaryButton, SecondaryButton } from "../global/Buttons";
import { MarketingNavigation } from "../navigations/MarketingNav";
import { Cards } from "./Cards";

export const Hero: React.FC = () => {
  return (
    <section className="p-28 h-screen bg-black bg-hero-bg">
      <MarketingNavigation />
      <div className="flex md:justify-between justify-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-neutral-100 text-3xl sm:text-4xl lg:text-6xl w-1/2 text-center md:text-start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            nesciunt atque sint et! Aspernatur est, id, quos atque, molestiae
          </h1>
          <ul className="text-neutral-100 gap-4 flex">
            <li>
              <PrimaryButton>
                <Link href="/login">Join us!</Link>
              </PrimaryButton>
            </li>
            <li>
              <SecondaryButton>Read more</SecondaryButton>
            </li>
          </ul>
        </div>
        <Cards />
      </div>
    </section>
  );
};
