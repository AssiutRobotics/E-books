const mongoose = require('mongoose');

// Define the schema for the Book model
const bookSchema = new mongoose.Schema({
    // Title of the book
    title: {
        type: String,
        required: [true, 'Book title is required'], // Makes the title field mandatory
        trim: true, // Removes any leading or trailing whitespace
        maxlength: [100, 'Book title cannot exceed 100 characters'], // Limits the title length to 100 characters
    },
    // Author of the book
    author: {
        type: String,
        required: [true, 'Author name is required'], // Makes the author field mandatory
        trim: true, // Removes any leading or trailing whitespace
        maxlength: [100, 'Author name cannot exceed 100 characters'], // Limits the author name length to 100 characters
    },
    // Original price of the book before any discount
    originalPrice: {
        type: Number,
        required: [true, 'Original price is required'], // Makes the original price field mandatory
        validate: {
            // Custom validator to ensure the price is non-negative
            validator: function (value) {
                return value >= 0;
            },
            message: 'Price cannot be negative', // Error message if validation fails
        },
    },
    // Discounted price of the book after applying a discount
    discountedPrice: {
        type: Number,
        required: [true, 'Discounted price is required'], // Makes the discounted price field mandatory
        validate: {
            // Custom validator to ensure the discounted price is non-negative
            validator: function (value) {
                return value >= 0;
            },
            message: 'Discounted price cannot be negative', // Error message if validation fails
        },
    },
    // Discount percentage for the book, calculated from the original and discounted prices
    discountPercentage: {
        type: Number,
        required: [true, 'Discount percentage is required'], // Makes the discount percentage field mandatory
        validate: {
            // Custom validator to ensure discount percentage is between 0 and 100
            validator: function (value) {
                return value >= 0 && value <= 100;
            },
            message: 'Discount percentage must be between 0 and 100', // Error message if validation fails
        },
    },
    // URL of the cover image for the book
    coverImageUrl: {
        type: String,
        required: [true, 'Cover image URL is required'], // Makes the cover image URL mandatory
        validate: {
            // Custom validator to ensure the URL follows common image URL patterns (jpg, png, etc.)
            validator: function (value) {
                return /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(value);
            },
            message: 'Invalid URL format for cover image', // Error message if validation fails
        },
    },
}, {
    // Enables automatic management of createdAt and updatedAt fields
    timestamps: true,
});

// Export the Book model based on the schema
module.exports = mongoose.model('Book', bookSchema);
