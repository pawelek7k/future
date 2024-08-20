import { ObjectId } from "mongodb";
import { connectToDatabase } from "./db";

interface Book {
    _id: string;
    title: string;
    cover: string;
    description: string;
    forAdult: boolean;
    genre: string;
    tags: string[];
}

export async function getBookDetails(bookId: string): Promise<Book | null> {
    const client = await connectToDatabase();
    const db = client.db();
    const booksCollection = db.collection("books");

    const book = await booksCollection.findOne({ _id: new ObjectId(bookId) });

    if (!book) return null;

    return {
        _id: book._id.toString(),
        title: book.title,
        cover: book.cover,
        description: book.description,
        forAdult: book.forAdult,
        genre: book.genre,
        tags: book.tags,
    };
}