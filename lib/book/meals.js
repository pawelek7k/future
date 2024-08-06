const db = sql("books.db");

export const getBooks = async () => {
  return db.prepare("SELECT * FROM books").all();
};

export const getBook = async (id) => {
  return db.prepare("SELECT * FROM books WHERE id = ?");
};

export const saveBook = async (book) => {};
