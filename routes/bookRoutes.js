const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// GET all books
router.get('/books', bookController.getAllBooks);

// GET a specific book by ID
router.get('/books/:id', bookController.getBookById);

// POST a new book
router.post('/books', bookController.createBook);

// PUT or PATCH an existing book
router.put('/books/:id', bookController.updateBook);

// DELETE a book
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;