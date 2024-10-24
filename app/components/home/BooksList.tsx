import Image from "next/legacy/image";
import Notiflix from "notiflix";
import React, { useState } from "react";
import { IoTrashBin } from "react-icons/io5";
import { FirstWord } from "../global/FirstWord";
import { ThirdHeading } from "../global/Heading";
import { Modal } from "../modal";

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
  const [hoveredBookId, setHoveredBookId] = useState<string | null>(null);

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
      {books.length === 0 ? (
        <div className="text-center mt-10">
          <FirstWord>Ooops... Empty here.</FirstWord>
        </div>
      ) : (
        <ul className="flex flex-col gap-6 mt-10">
          {books.map((book) => (
            <li
              key={book._id}
              className="cursor-pointer dark:shadow-sm flex gap-2 hover:bg-neutral-100/20 p-2 transition ease-in-out rounded-lg dark:hover:bg-zinc-950/30 hover:shadow-sm flex-col md:flex-row"
            >
              <div
                onClick={() => handleBookClick(book)}
                className="flex flex-col md:flex-row gap-2"
              >
                <div>
                  <div className="relative overflow-hidden rounded-md md:w-36 md:h-56 w-full h-40">
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
                <div className="p-2 flex flex-col gap-2">
                  <ThirdHeading>{book.title}</ThirdHeading>
                  <p className="text-sm md:text-base">
                    <FirstWord>For adult:</FirstWord>{" "}
                    {book.forAdult ? "Yes" : "No"}
                  </p>
                  <p className="text-sm md:text-base">{book.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-center p-4 md:p-12">
                {userLibrary.includes(book._id) && (
                  <div
                    className="relative flex items-center justify-center"
                    onMouseEnter={() => setHoveredBookId(book._id)}
                    onMouseLeave={() => setHoveredBookId(null)}
                  >
                    <button
                      onClick={() => removeBookFromLibrary(book._id)}
                      className="flex items-center justify-center"
                      aria-label="Remove book from library"
                    >
                      <IoTrashBin className="text-red-500 transition ease-in-out hover:text-rose-950 w-6 h-6" />
                    </button>
                    {hoveredBookId === book._id && (
                      <div className="absolute bottom-full mb-2 px-2 py-1 text-sm bg-neutral-300 text-sky-950 dark:bg-zinc-950 rounded-md dark:text-neutral-100">
                        Remove from library
                      </div>
                    )}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal} book={selectedBook} />
    </>
  );
};
