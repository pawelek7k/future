import { CoverPicker } from "./CoverPicker";
import { Tags } from "./Tags";

export const CreateForm: React.FC = () => {
  //   const shareBook = async (formData) => {
  //     "use server";

  //     const book = {
  //       title: formData.get("title"),
  //       description: formData.get("description"),
  //       image: formData.get("selectedImage"),
  //       genre: formData.get("genre"),
  //       forAdult: formData.get("checkbox"),
  //       tags: JSON.parse(formData.get("tags")),
  //     };

  //     console.log(book);
  //   };
  return (
    <div className="flex flex-col items-center justify-center">
      <form
        //  action={shareBook}
        className=" flex gap-16"
      >
        <div>
          <CoverPicker />
        </div>
        <div className="w-[25rem]">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              className="w-full px-3 py-2 rounded-lg dark:text-neutral-100 dark:bg-rose-950/30  text-gray-900  placeholder-gray-500  focus:outline-none focus:border focus:border-sky-950 dark:focus:border-rose-950 shadow-lg backdrop-blur-md"
            />
          </div>
          title input title description
          <div className="mt-6 flex gap-6 items-center">genre checkbox</div>
          <Tags />
        </div>
      </form>
    </div>
  );
};
