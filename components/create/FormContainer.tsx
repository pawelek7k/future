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
          title input title description
          <div className="mt-6 flex gap-6 items-center">genre checkbox</div>
          <Tags name={"tags"} />
        </div>
      </form>
    </div>
  );
};
