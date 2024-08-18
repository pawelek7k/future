import { connectToDatabase } from "@/lib/db";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ClientSideComponent from "@/app/components/login/home/ClientSideComponent";

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

export default async function HomeAuthPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const client = await connectToDatabase();
  const db = client.db();
  const booksCollection = db.collection("books");

  const books = await booksCollection.find({}).toArray();
  const booksWithId = books.map((book) => ({
    ...book,
    _id: book._id.toString(),
  }));

  return <ClientSideComponent books={booksWithId} session={session} />;
}
