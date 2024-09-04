import { MarketingNavigation } from "../../components/navigations/MarketingNav";
import "../../styles/card.css";
import { Cards } from "./Cards";

export const Hero: React.FC = () => {
  return (
    <section className="p-28 h-screen bg-black bg-hero-bg">
      <MarketingNavigation />
      <div className="flex justify-between">
        <h1 className="text-neutral-100 text-6xl w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          nesciunt atque sint et! Aspernatur est, id, quos atque, molestiae
        </h1>
        <Cards />
      </div>
    </section>
  );
};
