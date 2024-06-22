require('dotenv').config();
const initializeDatabase = require('./utils/dbInitializer');
const express = require('express');
const mysql = require('mysql2');
const dbConfig = require('./config/db.config');
const cors = require('cors');
const bodyParser = require('body-parser');
const deliveriesRoutes = require('./routes/deliveriesRoutes');

const app = express();
const port = process.env.PORT || 3001;

// Database initialization
initializeDatabase();

app.use(bodyParser.json());
app.use('/api', deliveriesRoutes);

// Apply CORS middleware to accept requests from your frontend
app.use(cors());

// Example of a simple route
app.get('/test-db', (req, res) => {
    res.send('Database connection is active and reachable.');
});

// Using a connection pool instead of a single connection
const pool = mysql.createPool(dbConfig);

// Simple route to check database connectivity
app.get('/test-db', (req, res) => {
    pool.query('SELECT 1 + 1 AS result', (error, results) => {
        if (error) {
            res.status(500).send('Database connection error: ' + error);
            return;
        }
        res.send('Database connection successful: ' + results[0].result);
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


