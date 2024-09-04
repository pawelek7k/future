import { MarketingNavigation } from "../../components/navigations/MarketingNav";
import "../../styles/card.css";

export const Hero: React.FC = () => {
  return (
    <section className="p-28 h-screen bg-black bg-hero-bg">
      <MarketingNavigation />
      <div className="text-neutral-100 card shadow-lg shadow-rose-700 flex flex-col">
        <div className="z-30 flex items-start text-2xl font-sans">
          <span className="text-2xl font-semibold">+</span>
          <span className="text-5xl">5k</span>
        </div>
        <div className="z-30 text-neutral-300">
          <p>
            writers<span className="font-semibold"> &</span>
          </p>

          <p>readers</p>
        </div>
      </div>
    </section>
  );
};
