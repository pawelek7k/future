"use client";

import Image from "next/legacy/image";
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
              <div className="relative overflow-hidden rounded-md w-36 h-56">
                <Image
                  src={book.cover}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              <ThirdHeading>{book.title}</ThirdHeading>
            </li>
          ))}
        </ul>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal} book={selectedBook} />
    </>
  );
};
