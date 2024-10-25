import { useSession } from "next-auth/react";
import Image from "next/legacy/image";
import Notiflix from "notiflix";
import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FirstWord } from "../global/FirstWord";
import { FirstHeading } from "../global/Heading";
import { Loader } from "../global/Loader";
import { Buttons } from "./Buttons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: {
    _id: string;
    title: string;
    cover: string;
    tags: string[];
    description: string;
    genre: string;
    forAdult: boolean;
  } | null;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, book }) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { data: session } = useSession();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !book) return null;

  const handleAddToLibrary = async () => {
    if (!session?.user) {
      Notiflix.Notify.warning(
        "You need to be logged in to add a book to your library."
      );
      return;
    }

    try {
      const response = await fetch("/api/user/library/add", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookId: book._id }),
      });

      if (response.ok) {
        Notiflix.Notify.success("Book added to library!");
      } else if (response.status === 409) {
        Notiflix.Notify.warning("This book is already in your library.");
      } else {
        Notiflix.Notify.failure("Failed to add book to library.");
      }
    } catch (error) {
      Notiflix.Notify.failure("Error adding book to library.");
    }
  };

  return (
    <>
      {isSubmitting && <Loader />}
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 dark:bg-zinc-900/50">
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-tl-3xl rounded-br-3xl justify-center w-full md:w-[50rem] dark:bg-black/70">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-lg font-bold"
          >
            <IoCloseOutline className="w-6 h-6" />
          </button>
          <div className="flex gap-4 md:gap-6 flex-col sm:flex-row">
            <div className="flex flex-col gap-4 md:gap-6 px-6 text-nowrap ">
              <FirstHeading>{book.title}</FirstHeading>
              <div className="relative overflow-hidden rounded-md sm:w-48 sm:h-80 mt-4 w-full h-64">
                <Image
                  src={book.cover}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
            </div>
            <div className="w-full flex flex-col p-0 justify-center md:p-6 gap-2">
              <p className="text-gray-700 dark:text-neutral-100 hidden md:block">
                <FirstWord>Description: </FirstWord>
                {book.description}
              </p>
              <div className="flex justify-between">
                <p className="text-gray-700 dark:text-neutral-100">
                  <FirstWord>Genre: </FirstWord>
                  {book.genre}
                </p>
                <p className="text-gray-700 dark:text-neutral-100">
                  <FirstWord>For Adult:</FirstWord>{" "}
                  {book.forAdult ? "Yes" : "No"}
                </p>
              </div>
              <p>
                <FirstWord>Tags:</FirstWord>
                <span className="flex flex-wrap gap-2 mt-2">
                  {book.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="dark:bg-rose-950/30 bg-sky-950/30 shadow-lg rounded-full py-1 px-4 min-w-12"
                    >
                      {tag}
                    </span>
                  ))}
                </span>
              </p>
              <Buttons book={book} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
