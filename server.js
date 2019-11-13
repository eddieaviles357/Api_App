const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config({ path: './config/config.env' });

// Connect Data Base
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 4000   ;

const server = app.listen(
    PORT, () => 
    console.log(`server up in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red.underline);
    // Close server and exit process
    server.close(() => process.exit(1));
})