import Image from "next/image";

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
  return (
    <ul className="flex gap-6">
      {books.map((book) => (
        <li key={book._id}>
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
          <p>Genre: {book.genre}</p>
          <p>For Adult: {book.forAdult ? "Yes" : "No"}</p>
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
