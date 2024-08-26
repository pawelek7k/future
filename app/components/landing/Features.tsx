import { SecondHeading, ThirdHeading } from "../global/Heading";

export const Features = () => {
  return (
    <section>
      <SecondHeading>How Future Works?</SecondHeading>
      <ul>
        <li>
          <div>
            <ThirdHeading>Sing up</ThirdHeading>
          </div>
        </li>
        <li>
          <div>
            {" "}
            <ThirdHeading>Create</ThirdHeading>
          </div>
        </li>
        <li>
          <div>
            <ThirdHeading>Read!</ThirdHeading>
          </div>
        </li>
      </ul>
    </section>
  );
};
