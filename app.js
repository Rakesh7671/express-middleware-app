// app.js
// ExpressJS app demonstrating middleware for logging and JSON parsing

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware: JSON body parser
app.use(bodyParser.json());

// Middleware: Logger
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Pass control to the next middleware
});

// Sample GET route
app.get('/hello', (req, res) => {
    res.status(200).json({ message: 'Hello GET Request!' });
});

// Sample POST route
app.post('/hello', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    res.status(201).json({ message: `Hello ${name}, POST Request Successful!` });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});