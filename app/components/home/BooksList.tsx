import Image from "next/legacy/image";
import Notiflix from "notiflix";
import React, { useState } from "react";
import { FirstWord } from "../global/FirstWord";
import { ThirdHeading } from "../global/Heading";
import { Modal } from "../Modal";

interface Book {
  _id: string;
  title: string;
  cover: string;
  description: string;
  forAdult: boolean;
  genre: string;
  tags: string[];
}

interface BooksListProps {
  books: Book[];
  userLibrary?: string[];
}

export const BooksList: React.FC<BooksListProps> = ({
  books,
  userLibrary = [],
}) => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  const removeBookFromLibrary = async (bookId: string) => {
    try {
      const response = await fetch("/api/user/library/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookId }),
      });

      if (!response.ok) {
        throw new Error("Failed to remove book");
      }

      Notiflix.Notify.success("Book removed from library");
    } catch (error) {
      Notiflix.Notify.failure("Error removing book");
    }
  };

  return (
    <>
      <ul className="flex flex-col gap-6 mt-10">
        {books.map((book) => (
          <li
            key={book._id}
            className="cursor-pointer dark:shadow-sm flex gap-2 hover:bg-neutral-100/20 p-2 transition ease-in-out rounded-lg dark:hover:bg-zinc-950/30 hover:shadow-sm"
            onClick={() => handleBookClick(book)}
          >
            <div>
              <div className="relative overflow-hidden rounded-md w-36 h-56">
                <Image
                  src={book.cover}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>
            <div className="p-2 flex flex-col gap-2">
              <ThirdHeading>{book.title}</ThirdHeading>
              <p>
                <FirstWord>For adult:</FirstWord> {book.forAdult ? "Yes" : "No"}
              </p>
              <p>{book.description}</p>
              {userLibrary.includes(book._id) && (
                <button
                  onClick={() => removeBookFromLibrary(book._id)}
                  className="mt-2 p-2 bg-red-500 text-white rounded"
                >
                  Remove from Library
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>

      <Modal isOpen={isModalOpen} onClose={closeModal} book={selectedBook} />
    </>
  );
};
