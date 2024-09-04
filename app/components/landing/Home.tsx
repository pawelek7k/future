import { MarketingNavigation } from "../../components/navigations/MarketingNav";

export const Hero: React.FC = () => {
  return (
    <section className="p-28 h-screen bg-black bg-hero-bg">
      <MarketingNavigation />
      <div className="text-neutral-100 text-2xl flex items-start gap-2">
        <span className="text-2xl font-semibold">+</span>
        <span className="text-5xl">5k</span>
      </div>
    </section>
  );
};
