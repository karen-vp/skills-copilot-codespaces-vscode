// Create web server

// Import the express module
const express = require('express');

// Create an express application
const app = express();

// Import the body-parser module
const bodyParser = require('body-parser');

// Import the comments module  
const comments = require('./comments');

// Configure express to use body-parser as middleware.
app.use(bodyParser.urlencoded({ extended: false }));



// Set the port number
const port = 3000;


// Set the home page route
app.get('/', (req, res) => {
    res.send('Welcome to my comments app');
});

// Set the comments route
app.get('/comments', (req, res) => {
    res.send(comments.getComments());
});


// Listen on port 3000
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});


