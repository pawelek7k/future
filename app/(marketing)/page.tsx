import { FirstHeading } from "../components/global/Heading";
import { MarketingNavigation } from "../components/navigations/MarketingNav";

const Home: React.FC = () => {
  return (
    <main className="">
      <section className="h-screen bg-hero-bg bg-center bg-no-repeat bg-cover m-1 rounded-lg">
        <MarketingNavigation />
        <FirstHeading>Your way</FirstHeading>
      </section>
    </main>
  );
};
export default Home;
