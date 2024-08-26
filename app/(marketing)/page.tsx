import { Features } from "../components/landing/Features";
import { MarketingNavigation } from "../components/navigations/MarketingNav";

const Home: React.FC = () => {
  return (
    <main className="">
      <section className="p-28 h-screen bg-black bg-hero-bg">
        <MarketingNavigation />
      </section>
      <Features />
    </main>
  );
};
export default Home;
