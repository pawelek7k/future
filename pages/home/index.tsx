import { FirstHeading } from "@/app/components/global/heading";
import { BooksList } from "@/app/components/home/Books";
import { Sidebar } from "@/app/components/home/Sidebar";
import { connectToDatabase } from "@/lib/db";
import { GetServerSideProps } from "next";
import Head from "next/head";

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
        <BooksList books={books} />
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
