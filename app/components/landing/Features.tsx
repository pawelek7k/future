import { Heading } from "./Heading";

export const Features: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-10 px-6">
      <span className="font-semibold text-neutral-400 font-sans">Future</span>
      <Heading>Write, without the hassle</Heading>
      <ul>
        <li>
          <div>
            <div>{/* img */}</div>
            <div className="p-4 bg-primary-bg w-14 flex items-center justify-center rounded-full shadow-lg shadow-rose-400">
              <span className="font-semibold text-sky-950">1</span>
            </div>
            <div>
              <h3 className="sm:text-xl font-semibold  text-neutral-50 text-l">
                Sing up
              </h3>
              <p className="font-bold text-neutral-400 text-l">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, totam commodi odi
              </p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div>
              <h3 className="sm:text-xl font-semibold  text-neutral-50 text-l">
                Sing up
              </h3>
              <p className="font-bold text-neutral-400 text-l">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, totam commodi odi
              </p>
            </div>
            <div className="p-4 bg-primary-bg w-14 flex items-center justify-center rounded-full shadow-lg shadow-rose-400">
              <span className="font-semibold text-sky-950">2</span>
            </div>
            <div>{/* img */}</div>
          </div>
        </li>
        <li>
          <div>
            <div>{/* img */}</div>
            <div className="p-4 bg-primary-bg w-14 flex items-center justify-center rounded-full shadow-lg shadow-rose-400">
              <span className="font-semibold text-sky-950">3</span>
            </div>
            <div>
              <h3 className="sm:text-xl font-semibold  text-neutral-50 text-l">
                Sing up
              </h3>
              <p className="font-bold text-neutral-400 text-l">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, totam commodi odi
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="p-4 bg-primary-bg w-14 flex items-center justify-center rounded-full shadow-lg shadow-rose-400">
            <span className="font-semibold text-sky-950">4</span>
          </div>
        </li>
      </ul>
    </section>
  );
};
