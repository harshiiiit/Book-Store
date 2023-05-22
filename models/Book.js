const mongoose = require('mongoose');

// Define the book schema
const bookSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    }, // Add unique: true
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishedYear: {
        type: Number,
        required: true
    },
});

// Create the book model
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;