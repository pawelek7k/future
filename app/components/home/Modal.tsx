import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { PrimaryButton, SecondaryButton } from "../global/buttons";
import { SecondHeading } from "../global/heading";
import { FirstWord } from "../global/text";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: {
    title: string;
    cover: string;
    tags: string[];
    description: string;
    genre: string;
    forAdult: boolean;
  } | null;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, book }) => {
  const modalRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 dark:bg-zinc-900/50">
      <div className="bg-white/70 backdrop-blur-md p-6 rounded-tl-3xl rounded-br-3xl justify-center w-[45rem] dark:bg-black/70">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-lg font-bold"
        >
          <IoCloseOutline className="w-6 h-6" />
        </button>
        <div className="flex gap-6">
          <div className="flex flex-col gap-6 px-6">
            {" "}
            <SecondHeading>{book.title}</SecondHeading>
            <div className="relative overflow-hidden rounded-md w-48 h-80 mb-4">
              <Image
                src={book.cover}
                alt={book.title}
                width={30}
                height={30}
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center p-6 gap-2">
            <p className="text-gray-700 dark:text-neutral-100">
              <FirstWord>Description: </FirstWord>
              {book.description}
            </p>
            <div className="flex justify-between">
              <p className="text-gray-700 dark:text-neutral-100">
                <FirstWord>Genre: </FirstWord>
                {book.genre}
              </p>
              <p className="text-gray-700 dark:text-neutral-100">
                <FirstWord>For Adult:</FirstWord> {book.forAdult ? "Yes" : "No"}
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
            <ul className="flex justify-between mt-2">
              <li>
                <PrimaryButton>Start reading</PrimaryButton>
              </li>
              <li>
                <SecondaryButton>Add to library</SecondaryButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
