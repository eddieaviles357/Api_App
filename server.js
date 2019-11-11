const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('working');
})

app.listen(
    PORT, () => 
    console.log(`server up in ${process.env.NODE_ENV} mode on port ${PORT}`)
);