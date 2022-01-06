const express = require('express');

const app = express();


// Get Environment Variables
import dotenv from 'dotenv';
dotenv.config({ path: '../.env'});


// Connect to Database
import { connectDB } from './config/db';
const DB_URI = process.env.MONGO_URI;
connectDB(DB_URI!);


// Setting Middlewares
app.use(express.json());


// Get routes
const taskRoutes = require('./routes/taskRoutes');
app.use('/', taskRoutes);


// Initialize Server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));