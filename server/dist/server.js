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
// TODO
const PORT = process.env.PORT;
console.log(PORT);
const taskRoutes = require('./routes/taskRoutes');
app.use('/', taskRoutes);
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
