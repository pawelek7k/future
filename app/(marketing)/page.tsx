import { MarketingNavigation } from "../components/navigations/MarketingNav";

const Home: React.FC = () => {
  return (
    <main className="">
      <section className="h-screen bg-hero-bg bg-center bg-no-repeat bg-cover m-1 rounded-lg flex gap-10 backdrop-blur-lg">
        <MarketingNavigation />
        <div className="flex flex-col justify-center gap-3 ">
          <p className="text-neutral-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, sint.
          </p>
          <h1 className="text-neutral-100 font-sans text-8xl w-72">
            Create the Future of Books!
          </h1>
          <ul className="flex gap-10">
            <li>
              <button className="text-neutral-100 bg-sky-950 px-8 py-2 rounded-lg">
                Log in!
              </button>
            </li>
            <li>
              <button className="text-neutral-100 border border-neutral-100 px-8 py-2 rounded-lg">
                Read more
              </button>
            </li>
          </ul>
          <p className="text-neutral-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, sint.
          </p>
        </div>
        <div className="flex items-center justify-center p-20">
          <div className="rounded-lg border border-neutral-300 p-10 shadow-lg shadow-white backdrop-blur-lg">
            <h2 className="text-neutral-100  text-3xl ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
