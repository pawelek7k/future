import React from "react";
import { shareBook } from "../../lib/book/actions";
import { CoverPicker } from "./CoverPicker";
import { DropdownMenu } from "./Dropdown";
import { Tags } from "./Tags";
import { ToggleSwitch } from "./ToggleSwitch";

export const CreateForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 sm:mt-0">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          shareBook(formData);
        }}
        className="flex flex-col sm:flex-row sm:gap-2 md:gap-16 shadow-lg md:p-12 rounded-tl-3xl sm:p-4 rounded-br-3xl items-center justify-center"
      >
        <div className="w-[9rem] h-[14rem] sm:w-[12rem] flex items-center justify-center">
          <CoverPicker name={"selectedCover"} />
        </div>
        <div className="sm:w-[25rem] w-screen p-10">
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
              className="w-full px-3 py-2 rounded-lg dark:text-neutral-100 dark:bg-rose-950/30 text-gray-900 placeholder-gray-500 focus:outline-none shadow-lg backdrop-blur-md"
            />
          </div>
          <label
            htmlFor="description"
            className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full px-3 py-2 rounded-lg dark:text-neutral-100 dark:bg-rose-950/30 text-gray-900 placeholder-gray-500 focus:outline-none shadow-lg backdrop-blur-md resize-none"
            placeholder="Describe your book"
          />
          <div className="flex gap-6 items-center justify-between">
            <DropdownMenu name={"genre"} />
            <div className="flex gap-2 items-center justify-center">
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                For adult
              </span>
              <ToggleSwitch name={"forAdult"} />
            </div>
          </div>
          <Tags name={"tags"} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
