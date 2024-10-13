import { FaArrowDown } from "react-icons/fa";
import { Heading } from "./Heading";

export const Features: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-10 px-6">
      <span className="font-semibold text-neutral-400 font-sans">Future</span>
      <Heading>Write, without the hassle</Heading>
      <ul className="relative flex flex-col gap-20 mt-20">
        <li className="relative flex items-center gap-4">
          <div>{/* img */}</div>
          <div className="relative p-4 bg-primary-bg w-14 flex items-center justify-center rounded-full shadow-lg shadow-rose-400">
            <span className="font-semibold text-sky-950">1</span>
            <div className="absolute w-[2px] h-full bg-neutral-400 bottom-[100%] left-1/2 translate-x-[-50%] mb-4"></div>
          </div>
          <div className="max-w-72">
            <h3 className="sm:text-xl font-semibold text-neutral-50 text-l">
              Sign up
            </h3>
            <p className="font-bold text-neutral-400 text-l">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, totam commodi odi
            </p>
          </div>
        </li>
        <li className="relative flex items-center gap-4">
          <div className="max-w-72">
            <h3 className="sm:text-xl font-semibold text-neutral-50 text-l">
              Sign up
            </h3>
            <p className="font-bold text-neutral-400 text-l">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, totam commodi odi
            </p>
          </div>
          <div className="relative p-4 bg-primary-bg w-14 flex items-center justify-center rounded-full shadow-lg shadow-rose-400">
            <span className="font-semibold text-sky-950">2</span>
            <div className="absolute w-[2px] h-full bg-neutral-400 bottom-[100%] left-1/2 translate-x-[-50%] mb-4"></div>
          </div>
          <div>{/* img */}</div>
        </li>
        <li className="relative flex items-center gap-4">
          <div>{/* img */}</div>
          <div className="relative p-4 bg-primary-bg w-14 flex items-center justify-center rounded-full shadow-lg shadow-rose-400">
            <span className="font-semibold text-sky-950">3</span>
            <div className="absolute w-[2px] h-full bg-neutral-400 bottom-[100%] left-1/2 translate-x-[-50%] mb-4"></div>
          </div>
          <div className="max-w-72">
            <h3 className="sm:text-xl font-semibold text-neutral-50 text-l">
              Sign up
            </h3>
            <p className="font-bold text-neutral-400 text-l">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, totam commodi odi
            </p>
          </div>
        </li>
        <li className="relative flex flex-col items-center">
          <div className="relative p-4 bg-primary-bg w-14 flex items-center justify-center rounded-full shadow-lg shadow-rose-400">
            <span className="font-semibold text-sky-950">4</span>
            <div className="absolute w-[2px] h-[150%] bg-neutral-400 bottom-[100%] left-1/2 translate-x-[-50%] mb-4"></div>
          </div>
          <div className="arrow-animation mt-10">
            <FaArrowDown className=" text-neutral-100" />
          </div>
        </li>
      </ul>
    </section>
  );
};
