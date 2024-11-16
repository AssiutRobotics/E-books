const express = require('express');
const BookController = require('../controllers/BookController');
const { validateObjectId } = require('../middlewares/validateObjectId');

const Router = express.Router();

// Route for adding a new book
Router.post('/add', BookController.addBook); // Simplified RESTful route

// Route for getting all books
Router.get('/all', BookController.getAllBooks); // Simplified RESTful route

// Route for getting a book by ID
Router.get('/get/:id', validateObjectId, BookController.getBookById);

// Route for updating a book by ID
Router.put('/update/:id', validateObjectId, BookController.updateBook);

// Route for deleting a book by ID
Router.delete('/delete/:id', validateObjectId, BookController.deleteBook);

module.exports = Router;
