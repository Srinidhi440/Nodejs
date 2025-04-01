// Import dependencies
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, Jenkins! file is modified.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Export for testing
module.exports = app;
