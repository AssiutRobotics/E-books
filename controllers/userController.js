const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserController {
    static async register(req, res) {
        try {
            const { first_name, last_name, email, password } = req.body;
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'User with this email already exists' });
            }
            const newUser = await User.create({ first_name, last_name, email, password });
            res.status(201).json({ message: 'User registered successfully', user: newUser });
        } catch (error) {
            res.status(500).json({ message: 'Failed to register user', error: error.message });
        }
    }

    static async log_in(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email }).select('+password');
            if (!user || !(await user.correctPassword(password, user.password))) {
                return res.status(401).json({ message: 'Incorrect email or password' });
            }
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
            
        } catch (error) {
            res.status(500).json({ message: 'Failed to log in user', error: error.message });
        }
    }
}

module.exports = UserController;
