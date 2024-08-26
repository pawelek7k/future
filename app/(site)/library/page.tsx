import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { FirstHeading } from "@/app/components/global/Heading";
import { connectToDatabase } from "@/lib/db";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import ClientSideComponent from "@/app/components/home/ClientSideComponent";

export const metadata = {
  title: "Future - Your Library",
  description: "Future",
};

interface Book {
  _id: string;
  title: string;
  cover: string;
  description: string;
  forAdult: boolean;
  genre: string;
  tags: string[];
}

const LibraryAuthPage: React.FC = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  let books: Book[] = [];

  try {
    const db = await connectToDatabase();
    const usersCollection = db.collection("users");
    const booksCollection = db.collection("books");

    const user = await usersCollection.findOne({ email: session.user?.email });
    if (!user) {
      throw new Error("User not found");
    }

    const bookIds = user.library || [];

    const booksData = await booksCollection
      .find({ _id: { $in: bookIds.map((id: string) => new ObjectId(id)) } })
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
    <div>
      <FirstHeading>Your Library!</FirstHeading>
      <ClientSideComponent books={books} session={session} />
    </div>
  );
};

export default LibraryAuthPage;
