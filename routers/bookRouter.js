const express = require('express');
const bookController = require('../controllers/bookController');

const Router = express.Router();

// Route for adding a new book
Router.route('/add').post(bookController.addBook);

// Route for getting all books
Router.route('/all').get(bookController.getAllBooks);

// Route for getting a book by ID
Router.route('/get/:id').get(bookController.getBookById);

// Route for updating a book by ID
Router.route('/update/:id').put(bookController.updateBook);

// Route for deleting a book by ID
Router.route('/delete/:id').delete(bookController.deleteBook);

module.exports = Router;