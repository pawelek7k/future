"use client";

import Image from "next/legacy/image";
import React, { useState } from "react";
import { FirstWord } from "../global/FirstWord";
import { ThirdHeading } from "../global/Heading";
import { Modal } from "./Modal";

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

export const BooksList: React.FC<BooksListProps> = ({ books }) => {
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
      <ul className="flex flex-col gap-6 mt-10">
        {books.map((book) => (
          <li
            key={book._id}
            className="cursor-pointer dark:shadow-sm flex gap-2"
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
            </div>
          </li>
        ))}
      </ul>

      <Modal isOpen={isModalOpen} onClose={closeModal} book={selectedBook} />
    </>
  );
};
