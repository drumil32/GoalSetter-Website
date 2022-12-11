const express = require('express');
const connectDB = require('./config/db.js');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware.js');
const port = process.env.PORT || 5000;
const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/api/goals',require('./routes/goalRoutes.js'));
app.use('/api/user',require('./routes/userRoutes.js'));
app.use(errorHandler);
app.listen(port,()=>console.log(`server is started ${port}`));