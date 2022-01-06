"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
// Get Environment Variables
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '../.env' });
// Connect to Database
const db_1 = require("./config/db");
const DB_URI = process.env.MONGO_URI;
(0, db_1.connectDB)(DB_URI);
// Setting Middlewares
const cors = require('cors');
app.use(express.json());
app.use(cors());
// Get routes
const taskRoutes = require('./routes/taskRoutes');
app.use('/', taskRoutes);
// Initialize Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
