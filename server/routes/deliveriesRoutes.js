const express = require('express');
const router = express.Router();
const deliveriesController = require('../controllers/deliveriesController');

// Route to handle adding new deliveries
router.post('/', deliveriesController.addDelivery);

// Route to handle fetching all deliveries
router.get('/', deliveriesController.getAllDeliveries);

module.exports = router;
