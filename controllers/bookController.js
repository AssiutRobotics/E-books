const Book = require('../models/bookModel');

// Add a new book
const addBook = async (req, res) => {
    try {
        // Destructure the book details from the request body
        const { title, author, originalPrice, discountedPrice, discountPercentage, coverImageUrl } = req.body;

        // Create and save the new book in the database
        const newBook = await Book.create({ title, author, originalPrice, discountedPrice, discountPercentage, coverImageUrl });
        
        // Respond with success message and the newly created book
        res.status(201).json({ message: 'Book added successfully', book: newBook });
    } catch (error) {
        // Handle errors and respond with an error message
        res.status(500).json({ message: 'Failed to add book', error: error.message });
    }
};

// Get all books
const getAllBooks = async (req, res) => {
    try {
        // Retrieve all books from the database
        const books = await Book.find();
        
        // Respond with success message and the list of books
        res.status(200).json({ message: 'Books retrieved successfully', books });
    } catch (error) {
        // Handle errors and respond with an error message
        res.status(500).json({ message: 'Failed to retrieve books', error: error.message });
    }
};

// Get a book by ID
const getBookById = async (req, res) => {
    try {
        // Extract the book ID from the request parameters
        const { id } = req.params;

        // Find the book by ID in the database
        const book = await Book.findById(id);
        
        // If the book is not found, return a 404 error
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        // Respond with success message and the found book
        res.status(200).json({ message: 'Book retrieved successfully', book });
    } catch (error) {
        // Handle errors and respond with an error message
        res.status(500).json({ message: 'Failed to retrieve book', error: error.message });
    }
};

// Update a book by ID
const updateBook = async (req, res) => {
    try {
        // Extract the book ID from the request parameters
        const { id } = req.params;
        // Destructure the updated book details from the request body
        const { title, author, originalPrice, discountedPrice, discountPercentage, coverImageUrl } = req.body;

        // Find and update the book by ID in the database
        const updatedBook = await Book.findByIdAndUpdate(
            id,
            { title, author, originalPrice, discountedPrice, discountPercentage, coverImageUrl },
            { new: true, runValidators: true } // Return the updated document and run validators
        );

        // If the book is not found, return a 404 error
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        // Respond with success message and the updated book
        res.status(200).json({ message: 'Book updated successfully', book: updatedBook });
    } catch (error) {
        // Handle errors and respond with an error message
        res.status(500).json({ message: 'Failed to update book', error: error.message });
    }
};

// Delete a book by ID
const deleteBook = async (req, res) => {
    try {
        // Extract the book ID from the request parameters
        const { id } = req.params;

        // Find and delete the book by ID in the database
        const deletedBook = await Book.findByIdAndDelete(id);

        // If the book is not found, return a 404 error
        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        // Respond with success message
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        // Handle errors and respond with an error message
        res.status(500).json({ message: 'Failed to delete book', error: error.message });
    }
};

// Export the controller functions for use in routes
module.exports = {
    addBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
};