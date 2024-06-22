require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const dbConfig = require('./config/db.config');
const port = 3000;

const app = express();

// Create a MySQL pool
const pool = mysql.createPool(dbConfig);

// Example of using the pool
pool.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

