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
              <button className="text-neutral-100 bg-sky-950 px-8 py-2 rounded-lg text-nowrap">
                Log in!
              </button>
            </li>
            <li>
              <button className="text-neutral-100 border border-neutral-100 px-8 py-2 rounded-lg text-nowrap">
                Read more
              </button>
            </li>
          </ul>
          <p className="text-neutral-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, sint.
          </p>
        </div>
        <div className="flex items-center justify-center p-40">
          <div className="rounded-lg border border-neutral-300 p-10 shadow-lg shadow-white backdrop-blur-lg h-full">
            <p className="text-neutral-300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
            <h2 className="text-neutral-100  text-3xl ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </h2>
            <p className="text-neutral-300 w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              distinctio porro illum saepe perferendis reiciendis sunt unde
              expedita, commodi necessitatibus, magnam iusto corporis beatae
              tempore molestias exercitationem odio quidem sapiente.
            </p>
            <ul className="flex justify-between text-neutral-100">
              <li>
                <button>Lorem</button>
              </li>
              <li>
                <button>Lorem</button>
              </li>
              <li>
                <button>Lorem</button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
