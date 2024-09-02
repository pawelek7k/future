import { CiCirclePlus } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";
import { IoLibrary } from "react-icons/io5";

export const Features = () => {
  return (
    <section className="py-20 px-12">
      <div className="text-center p-8">
        <h2 className="text-neutral-100 font-semibold text-4xl">
          How Future Works?
        </h2>
      </div>
      <ul className="flex gap-12 flex-wrap">
        <li className=" p-12 rounded-lg bg-hero-bg shadow-lg">
          <div>
            <h3 className="text-neutral-200 font-semibold text-2xl">Sing up</h3>
            <div className="flex items-center justify-center p-4">
              <IoMdLogIn className="w-14 h-14 text-neutral-300" />
            </div>
            <p className="text-neutral-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              non, quod minus accusantium impedit ea hic! Atque, distinctio nam
              modi et minima, vero corrupti non enim libero voluptatibus magni.
              Voluptatibus.
            </p>
          </div>
        </li>
        <li className=" p-12 rounded-lg bg-hero-bg shadow-lg">
          <div>
            {" "}
            <h3 className="text-neutral-200 font-semibold text-2xl">Create</h3>
            <div className="flex items-center justify-center p-4">
              <CiCirclePlus className="w-14 h-14 text-neutral-300" />
            </div>
            <p className="text-neutral-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              non, quod minus accusantium impedit ea hic! Atque, distinctio nam
              modi et minima, vero corrupti non enim libero voluptatibus magni.
              Voluptatibus.
            </p>
          </div>
        </li>
        <li className=" p-12 rounded-lg bg-hero-bg shadow-lg">
          <div>
            <h3 className="text-neutral-200 font-semibold text-2xl">
              And read!
            </h3>
            <div className="flex items-center justify-center p-4">
              <IoLibrary className="w-14 h-14 text-neutral-300" />
            </div>
            <p className="text-neutral-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              non, quod minus accusantium impedit ea hic! Atque, distinctio nam
              modi et minima, vero corrupti non enim libero voluptatibus magni.
              Voluptatibus.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
