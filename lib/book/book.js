import slugify from "slugify";
import sql from "sqlite3";

const db = sql("books.db");

export const getBooks = async () => {
  return db.prepare("SELECT * FROM books").all();
};

export const getBook = async (id) => {
  return db.prepare("SELECT * FROM books WHERE id = ?");
};

export const saveBook = async (book) => {
  book.slug = slugify(book.title, { lower: true });
  book.description: xss(book.description)
};
