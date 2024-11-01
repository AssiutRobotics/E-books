const express = require("express");
const userController = require('../controllers/userController');

const Router = express.Router();

// Route for user registration
Router.route('/register').post(userController.register);

// Route for user login
Router.route('/login').post(userController.log_in);

module.exports = Router;
