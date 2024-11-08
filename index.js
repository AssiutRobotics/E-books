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

// Import book router
const bookRouter = require('./routers/bookRouter');
app.use("/books", bookRouter);


app.get("*",(req,res)=>{
    res.end("server run");
})


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
