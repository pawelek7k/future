"use client";
import { useRouter } from "@/navigation";
import Notiflix from "notiflix";
import React, { useState } from "react";
import { DropdownMenu } from "../global/Dropdown";
import { LangSwitch } from "../global/LangSwitch";
import { Loader } from "../global/Loader";
import { Tags } from "../global/Tags";
import { ToggleSwitch } from "../global/ToggleSwitch";
import { PrimaryButton } from "../global/buttons/PrimaryBtn";
import { CoverPicker } from "./CoverPicker";

export const CreateForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    cover: "",
    description: "",
    forAdult: false,
    tags: [] as string[],
    genre: "",
    lang: "pl" as "pl" | "eng",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange =
    (key: keyof typeof formData) => (value: string | boolean | string[]) => {
      setFormData((prev) => ({ ...prev, [key]: value }));
    };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const { title, cover, description, genre, tags } = formData;
    if (!title || !cover || !description || !genre || tags.length === 0) {
      Notiflix.Notify.warning("Please fill in all fields before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/books/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Something went wrong");
      const result = await response.json();
      Notiflix.Notify.success("Book successfully created!");
      router.push(`/myworks/${result.id}`);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isSubmitting && <Loader />}
      <div className="flex flex-col items-center justify-center mt-10 sm:mt-0">
        <form
          className="flex flex-col sm:flex-row sm:gap-2 md:gap-16 shadow-lg md:p-12 rounded-tl-3xl sm:p-4 rounded-br-3xl items-center justify-center"
          encType="multipart/form-data"
          onSubmit={submitHandler}
        >
          <div className="w-[9rem] h-[14rem] sm:w-[12rem] flex items-center justify-center">
            <CoverPicker
              name="selectedCover"
              value={formData.cover}
              onChange={handleChange("cover")}
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
                value={formData.title}
                onChange={(e) => handleChange("title")(e.target.value)}
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
              value={formData.description}
              onChange={(e) => handleChange("description")(e.target.value)}
            />
            <div className="flex gap-6 items-center justify-between">
              <DropdownMenu
                name="genre"
                value={formData.genre}
                onChange={handleChange("genre")}
              />
              <div className="flex gap-2 items-center justify-center">
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                  For adult
                </span>
                <ToggleSwitch
                  name="forAdult"
                  value={formData.forAdult ? "on" : "off"}
                  onChange={(value) => handleChange("forAdult")(value === "on")}
                />
              </div>
            </div>
            <Tags
              name="tags"
              value={formData.tags}
              onChange={handleChange("tags")}
            />
            <div className="flex gap-2 items-center mb-4">
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                Language of the book:
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm">PL</span>
                <LangSwitch
                  name="Lang"
                  onChange={handleChange("lang")}
                  value={formData.lang}
                />
                <span className="text-sm">ENG</span>
              </div>
            </div>
            <PrimaryButton isSubmitting={isSubmitting}>Next</PrimaryButton>
          </div>
        </form>
      </div>
    </>
  );
};
