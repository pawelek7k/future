import { FirstHeading, SecondHeading } from "../global/Heading";

export const AccountContainer = () => {
  return (
    <section>
      <FirstHeading>Edit your profile</FirstHeading>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea name="description" id="description"></textarea>
      </div>
      <SecondHeading>Your account</SecondHeading>
    </section>
  );
};
