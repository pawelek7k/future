const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("books.db");

db.serialize(() => {
  db.run(`
        CREATE TABLE IF NOT EXISTS books (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            selected_cover TEXT,
            genre TEXT,
            checkbox BOOLEAN,
            tags TEXT
        )
    `);

  const stmt = db.prepare(`
        INSERT INTO books (title, description, selected_cover, genre, checkbox, tags)
        VALUES (?, ?, ?, ?, ?, ?)
    `);

  const books = [
    {
      id: 1,
      title: "1984",
      description: "A dystopian novel...",
      selectedCover: "https://example.com/1984.jpg",
      genre: "Dystopian",
      checkbox: true,
      tags: JSON.stringify(["dystopia", "political"]),
    },
  ];

  books.forEach((book) => {
    stmt.run(book);
  });

  stmt.finalize();

  db.close((err) => {
    if (err) {
      console.error("Error closing the database:", err.message);
    } else {
      console.log("Database created and books inserted successfully");
    }
  });
});
