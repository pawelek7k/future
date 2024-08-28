import { ThirdHeading } from "../global/Heading";

export const Features = () => {
  return (
    <section className="py-20 px-12">
      <div className="text-center p-8">
        <h2 className="text-neutral-100 font-semibold text-4xl">
          How Future Works?
        </h2>
      </div>
      <ul className="flex">
        <li>
          <div>
            <ThirdHeading>Sing up</ThirdHeading>
            <p className="text-neutral-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              non, quod minus accusantium impedit ea hic! Atque, distinctio nam
              modi et minima, vero corrupti non enim libero voluptatibus magni.
              Voluptatibus.
            </p>
          </div>
        </li>
        <li>
          <div>
            {" "}
            <ThirdHeading>Create</ThirdHeading>
            <p className="text-neutral-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              non, quod minus accusantium impedit ea hic! Atque, distinctio nam
              modi et minima, vero corrupti non enim libero voluptatibus magni.
              Voluptatibus.
            </p>
          </div>
        </li>
        <li>
          <div>
            <ThirdHeading>Read!</ThirdHeading>
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
