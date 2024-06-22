require('dotenv').config();
const initializeDatabase = require('./utils/dbInitializer');
const express = require('express');
const mysql2 = require('mysql2');
const dbConfig = require('./config/db.config');
const cors = require('cors');
const bodyParser = require('body-parser');

// Database initialization
initializeDatabase();

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'get_wicked_loaded'
});

db.connect(err => {
    if (err) {
        return console.error('error connecting: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});

app.post('/api/deliveries', (req, res) => {
    const { hauledFrom, hauledTo, material, quantity } = req.body;
    const sql = `INSERT INTO deliveries (hauledFrom, hauledTo, material, quantity) VALUES (?, ?, ?, ?)`;

    db.query(sql, [hauledFrom, hauledTo, material, quantity], (error, results) => {
        if (error) {
            console.error('Failed to insert data into database:', error);
            res.status(500).send('Failed to insert data into database');
        } else {
            res.status(201).send({ message: 'Data inserted successfully', id: results.insertId });
        }
    });
});



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});