import React, { useState } from "react";
import { CoverPicker } from "./CoverPicker";
import { DropdownMenu } from "./Dropdown";
import { Tags } from "./Tags";
import { ToggleSwitch } from "./ToggleSwitch";

export const CreateForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [cover, setCover] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [forAdult, setForAdult] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([]);

  const handleCoverChange = (coverUrl: string) => {
    setCover(coverUrl);
  };

  const handleTagChange = (newTags: string[]) => {
    setTags(newTags);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      title,
      cover,
      description,
      forAdult,
      tags,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 sm:mt-0">
      <form
        className="flex flex-col sm:flex-row sm:gap-2 md:gap-16 shadow-lg md:p-12 rounded-tl-3xl sm:p-4 rounded-br-3xl items-center justify-center"
        encType="multipart/form-data"
        onSubmit={submitHandler}
      >
        <div className="w-[9rem] h-[14rem] sm:w-[12rem] flex items-center justify-center">
          <CoverPicker
            name="selectedCover"
            value={cover}
            onChange={handleCoverChange}
          />
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex gap-6 items-center justify-between">
            <DropdownMenu name="genre" />
            <div className="flex gap-2 items-center justify-center">
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                For adult
              </span>
              <ToggleSwitch
                name="forAdult"
                checked={forAdult}
                onChange={(e) => setForAdult(e.target.checked)}
              />
            </div>
          </div>
          <Tags name="tags" tags={tags} onTagsChange={handleTagChange} />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
