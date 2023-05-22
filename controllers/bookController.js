// Import the Book model
const Book = require('../models/Book');
const { validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');

// Function to retrieve all books
const getAllBooks = (req, res) => {
    // Logic to retrieve all books from the database
    // Return the books as a JSON response
    Book.find()
        .then((books) => {
            res.json(books);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Error retrieving books' });
        });
};

// Function to retrieve a specific book by ID
const getBookById = (req, res) => {
    // Logic to retrieve a book with the specified ID from the database
    // Return the book as a JSON response
    const bookId = req.params.id;

    Book.findById(bookId)
        .then((book) => {
            if (!book) {
                res.status(404).json({ error: 'Book not Found' });
            }
            res.json(book);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Error retrieving book' });
        })
};

// Function to create a new book
const createBook = (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Generate a unique id
    const id = uuidv4();

    // Create a new book object
    const book = new Book({
        id,
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear,
    });

    // Save the book to the database
    book.save()
        .then(savedBook => {
            res.status(201).json({ message: 'Book created successfully', book: savedBook });
        })
        .catch(error => {
            console.log('Error creating the book:', error);
            res.status(500).json({ error: 'An error occurred while creating the book' });
        });
};

// Function to update an existing book
const updateBook = (req, res) => {
    // Logic to update an existing book with the specified ID in the database
    const { id } = req.params;
    const { title, author, publishedYear } = req.body;

    Book.findOneAndUpdate({ _id: id }, { title, author, publishedYear }, { new: true } // This option returns the updated book document
        )
        .then(updatedBook => {
            if (!updatedBook) {
                // If the book with the specified ID doesn't exist
                return res.status(404).json({ error: 'Book not found' });
            }
            // Return the updated book as a JSON response
            return res.json(updatedBook);
        })
        .catch(error => {
            console.log('Error updating the book:', error);
            // Handle the error and send appropriate response
            res.status(500).json({ error: 'Failed to update book' });
        });
};

// Function to delete a book
const deleteBook = (req, res) => {
    // Logic to delete a book with the specified ID from the database
    const { id } = req.params;
    const { title, author, publishedYear } = req.body;

    Book.deleteOne({ _id: id })
        .then(deletedBook => {
            if (!deletedBook) {
                // If the book with the specified ID doesn't exist
                return res.status(404).json({ error: 'Book not found' });
            }
            // Return the delted book as a JSON response
            res.json({ message: 'Book deleted successfully' });
        })
        .catch(error => {
            console.log('Error deleting the book:', error);
            // Handle the error and send appropriate response
            res.status(500).json({ error: 'Failed to delete book' });
        });
    // Return a success message as a JSON response
};

// Export the controller functions
module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};
``