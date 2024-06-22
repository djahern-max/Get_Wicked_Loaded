// utils/dbInitializer.js
const deliveryModel = require('../models/delivery');

const initializeDatabase = () => {
    console.log('Initializing database tables...');
    deliveryModel.createTable();
    // You can add more model table creation calls here if necessary
};

module.exports = initializeDatabase;
