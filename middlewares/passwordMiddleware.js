const bcrypt = require('bcryptjs');

exports.hashPassword = async (req, res, next) => {
    try {
        if (req.body.password) {
            const hashedPassword = await bcrypt.hash(req.body.password, 12);
            req.body.password = hashedPassword;
        }
        next();
    } catch (error) {
        res.status(500).json({ message: 'Failed to hash password', error: error.message });
    }
};

exports.comparePassword = async (inputPassword, storedPassword) => {
    return bcrypt.compare(inputPassword, storedPassword);
};
