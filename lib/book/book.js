import slugify from "slugify";
import sql from "sqlite3";
import xss from 'xss'
import fs from 'node:fs'

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

  const extension = book.selected_cover.name.split('.').pop()
  const fileName = `${book.slug}.${extension}`

  const stream = fs.createWriteStream(`public/images/${fileName}`)
  const bufferedCover = await book.selected_cover.arrayBuffer()

  stream.write(Buffer.from(bufferedCover), (error) => {
    if (error) {
      throw new Error('Saving image failed!')
    }
  })

  book.selected_cover = `/images/${fileName}`

  db.prepare(`
    INSERT INTO books (title, description, selected_cover, genre, checkbox, tags)
        VALUES (?, ?, ?, ?, ?, ?)`).run(book)
};
