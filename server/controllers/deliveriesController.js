// Import the delivery model which contains the database interaction methods.
const Delivery = require('../models/delivery');

// Function to handle POST requests for adding a new delivery.
exports.addDelivery = (req, res) => {
    const { hauledFrom, hauledTo, material, quantity } = req.body;
    
    // Call the insertDelivery method from the Delivery model.
    Delivery.insertDelivery(hauledFrom, hauledTo, material, quantity, (error, result) => {
        if (error) {
            console.error('Error inserting data into deliveries:', error);
            res.status(500).send({ message: 'Failed to insert data into deliveries', error });
        } else {
            console.log('Insertion successful', result);
            res.status(201).send({ message: 'Data inserted successfully', insertId: result });
        }
    });
};

// Function to handle GET requests to retrieve all deliveries.
exports.getAllDeliveries = (req, res) => {
    // Call the getAllDeliveries method from the Delivery model.
    Delivery.getAllDeliveries((error, results) => {
        if (error) {
            console.error('Error fetching data from deliveries:', error);
            res.status(500).send({ message: 'Failed to fetch data from deliveries', error });
        } else {
            console.log('Data retrieval successful');
            res.status(200).send(results);
        }
    });
};
