const express = require('express');
const bodyParser = require('body-parser');
const { NlpManager } = require('node-nlp');
const sqlite3 = require('sqlite3').verbose(); // Import SQLite

const manager = new NlpManager({ languages: ['en'] });
const db = new sqlite3.Database('conversation.db'); // Connect to SQLite DB

// Load the NLP model
manager.load('model.nlp', (err) => {
    if (err) {
        console.error('Error while loading model:', err);
    } else {
        console.log('Model loaded successfully.');
    }
});

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
db.run(`DROP TABLE IF EXISTS conversations`);
// Create a table to store conversations
db.run(`CREATE TABLE IF NOT EXISTS conversations (
    user_input TEXT,
    bot_response TEXT
)`);

// Display conversation history on the page
app.get('/', (req, res) => {
    db.run(`DROP TABLE IF EXISTS conversations`);
    // Create a table to store conversations
    db.run(`CREATE TABLE IF NOT EXISTS conversations (
        user_input TEXT,
        bot_response TEXT
    )`);
    res.render('index');
});

// Handle user input
app.post('/', (req, res) => {
    const userInput = req.body.userInput;

    // Process user input using the trained model
    manager.process('en', userInput)
        .then(response => {
            // Store the conversation pair in the database
            db.run(`INSERT INTO conversations (user_input, bot_response) VALUES (?, ?)`, [userInput, response.answer || "Sorry! I Don't have Info about it."], (err) => {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log('Conversation stored successfully.');
                }
            });

            // Retrieve updated conversation history and render the page
            db.all(`SELECT * FROM conversations`, [], (err, rows) => {
                if (err) {
                    console.error(err.message);
                    res.render('index', { conversation: [] }); // Render with empty conversation on error
                } else {
                    res.render('index', { conversation: rows }); // Pass conversation data to render
                }
            });
        })
        .catch(err => {
            console.error(err);
            res.render('index', { conversation: [], errorMessage: 'Sorry, there was an error processing your request.' });
        });
});

app.get('/database', (req, res) => {
    db.all("SELECT * FROM conversations", (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ conversations: rows });
    });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
