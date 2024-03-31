// Import the required libraries or modules
const express = require('express');

// Initialize the Express application
const app = express();

// Declare a variable to store the bot state (active or not)
let botActive = true;

// Function to turn off bots
function turn offBot() {
    console.log('Bot shut down.');
    botActive = false;
}

// Function to revive the bot
function turnBot() {
    console.log('Bot restarted.');
    botActive = true;
}

// Function to run the bot
function runBot() {
    if (botActive) {
        console.log('Bot works...');
        // Place your bot's main logic here
    } else {
        console.log('Bot shut down. Not running bot function.');
    }
}

// Call the runBot() function every 5 seconds
setInterval(runBot, 24000000); // Replace 5000 with the time period in milliseconds you want (for example, 300000 for every 5 minutes)

// Define API routes
app.get('/endpoint', (req, res) => {
    // Handler for GET requests on /endpoint
    res.send('Response from /endpoint');
});

// Run the server on the specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
