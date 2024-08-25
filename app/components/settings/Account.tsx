import { FirstHeading } from "../global/Heading";

export const AccountContainer: React.FC = () => {
  return (
    <section className="max-w-2xl mx-auto p-6  rounded-lg shadow-lg w-full  mt-10 dark:shadow-rose-950 shadow-sky-950">
      <FirstHeading>Edit your profile</FirstHeading>
      <div className=" backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10 ">
        <form className="">
          <label
            htmlFor="description"
            className="text-sky-950 tracking-wide font-semibold dark:text-neutral-100 font-sans"
          >
            Description:
          </label>
          <textarea
            name="description"
            id="description"
            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-950 focus:border-transparent dark:bg-neutral-800 dark:border-neutral-600 dark:text-gray-200
          bg-transparent
          resize-none"
          ></textarea>
        </form>
      </div>
    </section>
  );
};
