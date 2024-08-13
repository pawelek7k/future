import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { SecondHeading } from "../global/heading";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: {
    title: string;
    cover: string;
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white/70 backdrop-blur-md p-6 rounded-tl-3xl rounded-br-3xl items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-lg font-bold"
        >
          <IoCloseOutline />
        </button>
        <div className="flex  items-center">
          <div className="relative overflow-hidden rounded-md w-48 h-80 mb-4">
            <Image
              src={book.cover}
              alt={book.title}
              width={30}
              height={30}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div>
            <SecondHeading>{book.title}</SecondHeading>
            <p className="text-gray-700 mb-2">Genre: {book.genre}</p>
            <p className="text-gray-700 mb-2">
              For Adult: {book.forAdult ? "Yes" : "No"}
            </p>
            <p className="text-gray-700">{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
