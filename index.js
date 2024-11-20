const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDatabase = require('./middlewares/databaseMiddleware');
const setupCommonMiddleware = require('./middlewares/commonMiddleware');
const responseMiddleware = require('./middlewares/responseMiddleware');
const cartRouter = require("./routers/cartRouter");

dotenv.config();

const app = express();

// Add the response middleware
app.use(responseMiddleware);



setupCommonMiddleware(app);

// Use the database connection middleware
connectDatabase();

// Import user router
const userRouter = require('./routers/userRouter');
app.use("/user", userRouter);

// Import book router
const bookRouter = require('./routers/bookRouter');
app.use("/books", bookRouter);


app.get("*",(req,res)=>{
    res.end("server run");
});
app.use("/cart", cartRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
