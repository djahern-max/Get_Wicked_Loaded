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
app.use(cors());  // Enable CORS for all domains

app.use(bodyParser.json());

// Define the test API endpoint
app.get('/api/test', (req, res) => {
    res.json({ message: "Connection successful!" });
});

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

// Define Routes
app.use('/api/delivery', require('./api/delivery'));
app.use('/api/material', require('./api/material'));
app.use('/api/job', require('./api/job'));

// app.post('/api/material', (req, res) => {
//     const { ItemID, Description } = req.body;
//     const sql = `INSERT INTO material (ItemID, Description) VALUES (?, ?)`;

//     db.query(sql, [ItemID, Description], (error, results) => {
//         if (error) {
//             console.error('Failed to insert data into database:', error);
//             res.status(500).send('Failed to insert data into database');
//         } else {
//             res.status(201).send({ message: 'Data inserted successfully', id: results.insertId });
//         }
//     });
// });


// app.get('/api/material', (req, res) => {
//     const sql = 'SELECT * FROM material';  
//     db.query(sql, (error, results) => {
//         if (error) {
//             console.error('Error fetching materials: ', error);
//             res.status(500).send('Failed to fetch materials');
//         } else {
//             res.json(results);
//         }
//     });
// });

// app.post('/api/delivery', (req, res) => {
//     const { hauledFrom, hauledTo, material, quantity } = req.body;
//     const sql = `INSERT INTO deliveries (hauledFrom, hauledTo, material, quantity) VALUES (?, ?, ?, ?)`;

//     db.query(sql, [hauledFrom, hauledTo, material, quantity], (error, results) => {
//         if (error) {
//             console.error('Failed to insert data into database:', error);
//             res.status(500).send('Failed to insert data into database');
//         } else {
//             res.status(201).send({ message: 'Data inserted successfully', id: results.insertId });
//         }
//     });
// });

// app.get('/api/delivery', (req, res) => {
//     const sql = 'SELECT * FROM deliveries';  
//     db.query(sql, (error, results) => {
//         if (error) {
//             console.error('Error fetching deliveries: ', error);
//             res.status(500).send('Failed to fetch deliveries');
//         } else {
//             res.json(results);
//         }
//     });
// });

// app.post('/api/job', (req, res) => {
//     const { JobNumber, JobName } = req.body;
//     const sql = `INSERT INTO jobs (JobNumber, JobName) VALUES (?, ?)`;

//     db.query(sql, [JobNumber, JobName], (error, results) => {
//         if (error) {
//             console.error('Failed to insert data into database:', error);
//             res.status(500).send('Failed to insert data into database');
//         } else {
//             res.status(201).send({ message: 'Data inserted successfully', id: results.insertId });
//         }
//     });
// });


// app.get('/api/job', (req, res) => {
//     const sql = 'SELECT * FROM jobs';  
//     db.query(sql, (error, results) => {
//         if (error) {
//             console.error('Error fetching jobs: ', error);
//             res.status(500).send('Failed to fetch jobs');
//         } else {
//             res.json(results);
//         }
//     });
// });

// app.get('/api/loadcount', (req, res) => {
//     const sql = 'SELECT * FROM loadcount';  
//     db.query(sql, (error, results) => {
//         if (error) {
//             console.error('Error fetching loadcounts: ', error);
//             res.status(500).send('Failed to fetch loadcounts');
//         } else {
//             res.json(results);
//         }
//     });
// });





app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});