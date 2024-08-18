import { FirstHeading } from "@/app/components/global/heading";
import { connectToDatabase } from "@/lib/db";
import { withAuth } from "@/lib/withAuth";
import { ObjectId } from "mongodb";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { useState } from "react";

interface Book {
  _id: string;
  title: string;
  cover: string;
  description: string;
  genre: string;
}

interface LibraryPageProps {
  initialBooks: Book[];
}

const LibraryPage: React.FC<LibraryPageProps> = ({ initialBooks }) => {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  return (
    <div>
      <FirstHeading>Your library!</FirstHeading>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <h2>{book.title}</h2>
            <p>{book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = withAuth(
  async (context) => {
    const session = await getSession(context);

    if (!session) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    const client = await connectToDatabase();
    const db = client.db();
    const usersCollection = db.collection("users");
    const booksCollection = db.collection("books");

    const user = await usersCollection.findOne({ email: session.user?.email });
    const bookIds = user?.library || [];

    const books = await booksCollection
      .find({ _id: { $in: bookIds.map((id: string) => new ObjectId(id)) } })
      .toArray();

    const booksWithId = books.map((book) => ({
      ...book,
      _id: book._id.toString(),
    }));

    return {
      props: {
        initialBooks: booksWithId,
      },
    };
  }
);

export default LibraryPage;
