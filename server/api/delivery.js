const express = require('express');
const axios = require('axios');


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

app.get('/api/deliveries', (req, res) => {
    const sql = 'SELECT * FROM deliveries';  
    db.query(sql, (error, results) => {
        if (error) {
            console.error('Error fetching deliveries: ', error);
            res.status(500).send('Failed to fetch deliveries');
        } else {
            res.json(results);
        }
    });
});



module.exports = router;