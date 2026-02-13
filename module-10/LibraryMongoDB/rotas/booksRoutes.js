const express = require("express");
const router = express.Router();

const listBooks = require("../Books/listBooks");
const addBooks = require("../Books/addBooks");
const searchBooks = require("../Books/searchBooks");
const updateBooks = require("../Books/updateBooks");
const deleteBook = require("../Books/deleteBooks");

router.get("/", async (req, res) => {
  const books = await listBooks();
  res.status(200).send(books);
});

router.get("/search", async (req, res) => {
  const { title, author, year, genre } = req.query;

  if (!title && !author && !year && !genre) {
    return res.status(400).send("Provide at least one search parameter.");
  }

  try {
    const results = await searchBooks(title, author, year, genre);

    if (results.length === 0) {
      return res.status(404).send("No book found!");
    }

    res.status(200).json(results);
  } catch (error) {
    console.error("Error searching books:", error);
    res.status(500).send("Server error");
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, author, year, genre } = req.body;
    const newBook = await addBooks({ title, author, year, genre });
    res.status(201).send({ message: "Book created successfully!", book: newBook });
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).send({ message: "Error adding book." });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, author, year, genre } = req.body;
  const updatedBook = await updateBooks(id, title, author, year, genre);
  if (updatedBook) {
    res.status(200).send({ message: "Book has updated successfully!" });
  } else {
    res.status(404).send({ message: "Book not found" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedBook = await deleteBook(id);
  if (deletedBook) {
    res.status(200).send({ message: "The book returned to dust" });
  } else {
    res.status(404).send({ message: "Book not found" });
  }
});

module.exports = router;
