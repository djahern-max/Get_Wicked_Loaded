const express = require("express");
// const axios = require('axios');
const router = express.Router();

router.post("/api/phasecode", (req, res) => {
  const { phaseCode, description } = req.body;
  const sql = `INSERT INTO phase (phaseCode, description) VALUES (?, ?)`;

  db.query(sql, [ItemID, Description], (error, results) => {
    if (error) {
      console.error("Failed to insert data into database:", error);
      res.status(500).send("Failed to insert data into database");
    } else {
      res
        .status(201)
        .send({ message: "Data inserted successfully", id: results.insertId });
    }
  });
});

router.get("/api/phasecode", (req, res) => {
  const sql = "SELECT * FROM phasecode";
  db.query(sql, (error, results) => {
    if (error) {
      console.error("Error fetching deliveries: ", error);
      res.status(500).send("Failed to fetch deliveries");
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
