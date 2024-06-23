const db = require('../config/db.config');

const Delivery = {
    createTable: function() {
        const sql = `
            CREATE TABLE IF NOT EXISTS deliveries (
                id INT AUTO_INCREMENT PRIMARY KEY,
                hauledFrom VARCHAR(45),
                hauledTo VARCHAR(45),
                material VARCHAR(45),
                quantity INT
            )
        `;
        db.query(sql, function(err, result) {
            if (err) throw err;
            console.log("Table 'deliveries' created or already exists.");
        });
    },

    insertDelivery: function(hauledFrom, hauledTo, material, quantity, callback) {
        const sql = `
            INSERT INTO deliveries (hauledFrom, hauledTo, material, quantity)
            VALUES (?, ?, ?, ?)
        `;
        db.query(sql, [hauledFrom, hauledTo, material, quantity], function(err, result) {
            if (err) return callback(err, null);
            console.log("Insertion successful", result.insertId);
            return callback(null, result.insertId);
        });
    },

    getAllDeliveries: function(callback) {
        const sql = 'SELECT * FROM deliveries';
        db.query(sql, function(err, results) {
            if (err) return callback(err, null);
            return callback(null, results);
        });
    }
};

module.exports = Delivery;