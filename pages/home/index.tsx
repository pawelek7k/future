import { FirstHeading } from "@/app/components/global/heading";
import { Sidebar } from "@/app/components/home/Sidebar";
import { connectToDatabase } from "@/lib/db";
import { GetServerSideProps } from "next";
import Head from "next/head";
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

interface BooksPageProps {
  books: Book[];
}

const HomeAuthPage = ({ books }: BooksPageProps) => {
  return (
    <>
      <Head>
        <title>Future - Home</title>
        <meta name="description" content="Future" />
      </Head>
      <div>
        <FirstHeading>The most popular books</FirstHeading>
        <Sidebar />
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
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const booksCollection = db.collection("books");
    const books = await booksCollection.find({}).toArray();

    client.close();

    return {
      props: {
        books: JSON.parse(JSON.stringify(books)),
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        books: [],
      },
    };
  }
};

export default HomeAuthPage;
