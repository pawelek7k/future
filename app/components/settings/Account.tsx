import { FirstHeading, SecondHeading } from "../global/Heading";
import { ChangePassword } from "./ChangePassword";

export const AccountContainer = () => {
  return (
    <section className="max-w-2xl mx-auto p-6 shadow-lg rounded-lg">
      <FirstHeading>Edit your profile</FirstHeading>

      <div className="mt-6">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Description:
        </label>
        <textarea
          name="description"
          id="description"
          className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-950 focus:border-transparent dark:bg-neutral-800 dark:border-neutral-600 dark:text-gray-200"
        ></textarea>
      </div>

      <SecondHeading>Your account</SecondHeading>

      <ChangePassword />
    </section>
  );
};
