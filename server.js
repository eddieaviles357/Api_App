const express = require('express');
const dotenv = require('dotenv');

// Route files
const bootcamps = require('./routes/bootcamps');

// Load environment variables
dotenv.config({ path: './config/config.env' });

const app = express();

app.use(logger);

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 3000;

app.listen(
    PORT, () => 
    console.log(`server up in ${process.env.NODE_ENV} mode on port ${PORT}`)
);