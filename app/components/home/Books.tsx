import Image from "next/image";
import { useState } from "react";

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

const BooksList = ({ books }: BooksListProps) => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <ul className="flex gap-6 mt-10">
      {books.map((book) => (
        <li key={book._id} className="cursor-pointer">
          <div className="relative overflow-hidden rounded-md w-36 h-56">
            <Image
              src={book.cover}
              alt={book.title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <h2>{book.title}</h2>
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
