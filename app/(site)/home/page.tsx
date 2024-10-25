import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Loader } from "@/app/components/global/Loader";
import ClientSideComponent from "@/app/components/home/ClientSideComponent";
import { connectToDatabase } from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { Suspense } from "react";

interface Book {
  _id: string;
  title: string;
  cover: string;
  description: string;
  forAdult: boolean;
  genre: string;
  tags: string[];
}

export const metadata = {
  title: "Future - Home",
  description: "Future",
};

const HomeAuthPage: React.FC = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  let books: Book[] = [];
  let userLibrary: string[] = [];
  let user;
  try {
    const db = await connectToDatabase();
    const booksCollection = db.collection("books");
    const usersCollection = db.collection("users");

    user = await usersCollection.findOne({ email: session.user?.email });
    if (user) {
      userLibrary = user.library || [];
    }

    const booksData = await booksCollection
      .find(
        {},
        {
          projection: {
            _id: 1,
            title: 1,
            cover: 1,
            description: 1,
            forAdult: 1,
            genre: 1,
            tags: 1,
          },
        }
      )
      .toArray();

    books = booksData.map((book) => ({
      _id: book._id.toString(),
      title: book.title,
      cover: book.cover,
      description: book.description,
      forAdult: book.forAdult,
      genre: book.genre,
      tags: book.tags,
    }));
  } catch (error) {
    console.error("Error connecting to the database or fetching books:", error);
  }

  return (
    <>
      <div className="bg-black rounded-xl p-10 bg-home-img bg-top dark:bg-center dark:bg-dark-home-img bg-no-repeat bg-cover ">
        <h2 className="text-xl text-neutral-100">
          Welcome, {user?.username || user?.email.split("@")[0]}!
        </h2>
        <h1 className="text-3xl text-neutral-100 font-semibold">
          Discover the books!
        </h1>
      </div>
      <Suspense fallback={<Loader />}>
        <ClientSideComponent books={books} userLibrary={userLibrary} />
      </Suspense>
    </>
  );
};

export default HomeAuthPage;
