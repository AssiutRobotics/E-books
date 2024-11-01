const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();

// Middleware setup
app.use(cors()); // Allow all CORS requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected successfully"))
    .catch(error => console.error("MongoDB connection error:", error));

// Import user router
const userRouter = require('./routers/userRouter');
app.use("/user", userRouter);

// Test endpoint (for development/debugging purposes)
app.post("/test", async (req, res) => {
    try {
        const { name, num } = req.body;

        // Define schema inline only for quick testing (move to models for production use)
        const TestSchema = new mongoose.Schema({
            name: { type: String, required: true },
            num: { type: Number, required: true }
        });
        const TestModel = mongoose.model("TestUser", TestSchema);

        const newTestUser = new TestModel({ name, num });
        await newTestUser.save();

        const users = await TestModel.find({ name });
        res.status(200).json(users);
    } catch (error) {
        console.error("Error in /test route:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
