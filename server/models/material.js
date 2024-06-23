const db = require('../config/db.config');

const Delivery = {
    createTable: function() {
        const sql = `
            CREATE TABLE IF NOT EXISTS deliveries (
                id INT AUTO_INCREMENT PRIMARY KEY,
                ItemID VARCHAR(45),
                Description VARCHAR(45),
            )
        `;
        db.query(sql, function(err, result) {
            if (err) throw err;
            console.log("Table 'material' created or already exists.");
        });
    },

    insertMaterial: function(ItemID, Description,) {
        const sql = `
            INSERT INTO deliveries (ItemID, Description)
            VALUES (?, ?)
        `;
        db.query(sql, [ItemID, Description], function(err, result) {
            if (err) return callback(err, null);
            console.log("Insertion successful", result.insertId);
            return callback(null, result.insertId);
        });
    },

    getAllMaterial: function(callback) {
        const sql = 'SELECT * FROM material';
        db.query(sql, function(err, results) {
            if (err) return callback(err, null);
            return callback(null, results);
        });
    }
};

module.exports = Delivery;