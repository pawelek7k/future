import { FirstHeading } from "@/app/components/global/heading";
import { BooksList } from "@/app/components/home/Books";
import { Sidebar } from "@/app/components/home/Sidebar";
import { connectToDatabase } from "@/lib/db";
import { withAuth } from "@/lib/withAuth";
import { GetServerSideProps } from "next";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
  const { data: session, status } = useSession();
  const router = useRouter();
  const [filters, setFilters] = useState({
    search: "",
    genre: "",
    forAdult: false,
  });

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      signOut({ redirect: false });
      router.push("/login");
    } else {
      const { search, genre, forAdult } = router.query;
      setFilters({
        search: (search as string) || "",
        genre: (genre as string) || "",
        forAdult: forAdult === "true",
      });
    }
  }, [router, session, status]);

  const handleFilterChange = (filters: {
    search: string;
    genre: string;
    forAdult: boolean;
  }) => {
    setFilters(filters);
  };

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const matchesGenre = !filters.genre || book.genre === filters.genre;
    const matchesForAdult = !filters.forAdult || book.forAdult;

    return matchesSearch && matchesGenre && matchesForAdult;
  });

  return (
    <>
      <Head>
        <title>Future - Home</title>
        <meta name="description" content="Future" />
      </Head>
      <div>
        <FirstHeading>The most popular books</FirstHeading>
        <Sidebar onFilterChange={handleFilterChange} />
        <BooksList books={filteredBooks} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = withAuth(
  async (context) => {
    try {
      const client = await connectToDatabase();
      const db = client.db();
      const booksCollection = db.collection("books");

      const books = await booksCollection.find({}).toArray();
      const booksWithId = books.map((book) => ({
        ...book,
        _id: book._id.toString(),
      }));

      return {
        props: {
          books: booksWithId,
        },
      };
    } catch (err) {
      console.error("Error fetching books:", err);
      return {
        props: {
          books: [],
        },
      };
    }
  }
);

export default HomeAuthPage;
