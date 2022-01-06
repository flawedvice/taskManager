const express = require('express');

const app = express();


// Get Environment Variables
import dotenv from 'dotenv';
dotenv.config({ path: '../.env'});


// Connect to Database
// TODO


const PORT = process.env.PORT;
console.log(PORT);


const taskRoutes = require('./routes/taskRoutes');

app.use('/', taskRoutes);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));