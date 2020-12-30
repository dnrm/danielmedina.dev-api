// * Import variables from .env file
require('dotenv').config();

// * Imports
const express = require('express');
const mongodb = require('mongodb');

const routes = require('./routes/routes');

// * Save environment variables
const port = process.env.PORT || 2812;

const app = express();

app.use('/', routes);

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
})