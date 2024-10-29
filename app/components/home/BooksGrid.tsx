"use client";

import { Book } from "@/types/book";
import React, { useState } from "react";
import { Cover } from "../global/Cover";
import { FirstWord } from "../global/FirstWord";
import { ThirdHeading } from "../global/headings/ThirdHeading";
import { Modal } from "../Modal";

interface BooksListProps {
  books: Book[];
}

export const BooksGrid: React.FC<BooksListProps> = ({ books }) => {
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
  return (
    <>
      {books.length === 0 ? (
        <div className="text-center mt-10">
          <FirstWord>Ooops... Empty here.</FirstWord>
        </div>
      ) : (
        <ul className="flex flex-wrap gap-6 mt-10 items-center justify-center">
          {books.map((book) => (
            <li
              key={book._id}
              className="cursor-pointer dark:shadow-sm"
              onClick={() => handleBookClick(book)}
            >
              <Cover title={book.title} cover={book.cover} />
              <ThirdHeading>{book.title}</ThirdHeading>
            </li>
          ))}
        </ul>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal} book={selectedBook} />
    </>
  );
};
