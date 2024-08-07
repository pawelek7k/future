import formidable from "formidable";
import fs from "fs";
import path from "path";
import { open } from "sqlite";
import sqlite3 from "sqlite3";
import xss from "xss";

const DATABASE_PATH = path.resolve(process.cwd(), "books.db");
const PUBLIC_IMAGES_PATH = path.resolve(process.cwd(), "public/images");

// Function to open a database connection
const openDb = async () => {
  return open({
    filename: DATABASE_PATH,
    driver: sqlite3.Database,
  });
};

// Disable body parsing for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const db = await openDb();

  if (req.method === "GET") {
    try {
      const books = await db.all("SELECT * FROM books");
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: "Unable to retrieve books" });
    }
  } else if (req.method === "POST") {
    const form = new formidable.IncomingForm();
    form.uploadDir = PUBLIC_IMAGES_PATH;
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Form parsing error:", err); // Log parsing error for debugging
        res.status(500).json({ error: "Form parsing error" });
        return;
      }

      try {
        const { title, description, genre, checkbox, tags } = fields;
        const selectedCover = files.selectedCover[0];

        const book = {
          title: title,
          description: xss(description),
          genre: genre,
          checkbox: checkbox === "on",
          tags: fields.tags ? JSON.parse(fields.tags || "[]") : [], // Ensure tags are parsed as JSON
          selected_cover: `/images/${selectedCover.newFilename}`,
        };

        // Move file to public images directory
        await fs.promises.rename(
          selectedCover.filepath,
          path.join(PUBLIC_IMAGES_PATH, selectedCover.newFilename)
        );

        await db.run(
          `INSERT INTO books (title, description, selected_cover, genre, checkbox, tags)
           VALUES (?, ?, ?, ?, ?, ?)`,
          [
            book.title,
            book.description,
            book.selected_cover,
            book.genre,
            book.checkbox,
            JSON.stringify(book.tags), // Store tags as JSON string
          ]
        );

        res.status(200).json({ message: "Book saved successfully!" });
      } catch (error) {
        console.error("Error saving book:", error); // Log saving error for debugging
        res.status(500).json({ error: "Saving book failed!" });
      }
    });
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
