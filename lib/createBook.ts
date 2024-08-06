const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('books.db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS books (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            author TEXT NOT NULL,
            published_date TEXT,
            isbn TEXT,
            pages INTEGER,
            cover_url TEXT,
            language TEXT
        )
    `);

    const stmt = db.prepare(`
        INSERT INTO books (title, author, published_date, pages, cover_url, language)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    const books = [
        ["The Great Gatsby", "F. Scott Fitzgerald", "1925-04-10", "9780743273565", 180, "https://example.com/gatsby.jpg", "English"],
        ["1984", "George Orwell", "1949-06-08", 328, "https://example.com/1984.jpg", "English"]
    ];

    books.forEach((book) => {
        stmt.run(book);
    });

    stmt.finalize();

    db.close((err) => {
        if (err) {
            console.error('Error closing the database:', err.message);
        } else {
            console.log("Database created and books inserted successfully");
        }
    });
});