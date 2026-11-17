
const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000;

// Initial book records
let books = [
    {
        id: 101,
        title: "Wings of Fire",
        author: "A.P.J. Abdul Kalam",
        genre: "Autobiography",
        publishedYear: 1999,
        available: true
    },
    {
        id: 102,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Fiction",
        publishedYear: 1988,
        available: true
    },
    {
        id: 103,
        title: "Harry Potter",
        author: "J.K. Rowling",
        genre: "Fantasy",
        publishedYear: 1997,
        available: false
    }
];

// 1. GET all books
app.get("/api/books", (req, res) => {
    res.status(200).json(books);
});

// 2. POST a new book
app.post("/api/books", (req, res) => {
    const { title, author, genre, publishedYear, available } = req.body;

    if (
        typeof title !== "string" || title.trim() === "" ||
        typeof author !== "string" || author.trim() === "" ||
        typeof genre !== "string" || genre.trim() === "" ||
        typeof publishedYear !== "number" ||
        !Number.isInteger(publishedYear) ||
        typeof available !== "boolean"
    ) {
        return res.status(400).json({
            message: "Invalid input"
        });
    }

    const newBook = {
        id: Math.max(...books.map(b => b.id)) + 1,
        title,
        author,
        genre,
        publishedYear,
        available
    };

    books.push(newBook);

    res.status(201).json(newBook);
});

// 3. GET a book by ID
app.get("/api/books/:id", (req, res) => {
    const id = Number(req.params.id);

    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    res.status(200).json(book);
});

// 4. PUT - Update a book
app.put("/api/books/:id", (req, res) => {
    const id = Number(req.params.id);

    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    const { title, author, genre, publishedYear, available } = req.body;

    if (
        typeof title !== "string" || title.trim() === "" ||
        typeof author !== "string" || author.trim() === "" ||
        typeof genre !== "string" || genre.trim() === "" ||
        typeof publishedYear !== "number" ||
        !Number.isInteger(publishedYear) ||
        typeof available !== "boolean"
    ) {
        return res.status(400).json({
            message: "Invalid input"
        });
    }

    book.title = title;
    book.author = author;
    book.genre = genre;
    book.publishedYear = publishedYear;
    book.available = available;

    res.status(200).json(book);
});

// 5. DELETE - Delete a book
app.delete("/api/books/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = books.findIndex(b => b.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    books.splice(index, 1);

    res.status(200).json({
        message: "Book deleted successfully"
    });
});

// 6. GET books by author (FILTER)
// IMPORTANT: Keep this route above /api/books/:id
app.get("/api/books/filter", (req, res) => {
    const author = req.query.author;

    const filteredBooks = books.filter(b =>
        b.author.toLowerCase().includes(author?.toLowerCase() || "")
    );

    res.status(200).json(filteredBooks);
});

// Start server
app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});
