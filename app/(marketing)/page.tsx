import { MarketingNavigation } from "../components/navigations/MarketingNav";

const Home: React.FC = () => {
  return (
    <main className="">
      <section className="h-screen bg-hero-bg bg-center bg-no-repeat bg-cover m-1 rounded-lg">
        <MarketingNavigation />
        <p className="text-neutral-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, sint.
        </p>
        <h1 className="text-neutral-100 font-sans text-7xl">
          Create the Future of Books!
        </h1>
      </section>
    </main>
  );
};
export default Home;
