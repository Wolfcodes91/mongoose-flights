const express = require('express');
const router = express.Router();
// Require the yet to be created destinations controller
const destinationsCtrl = require('../controllers/destinations');

// Define the Route to create a destination
// POST /flights/:id/destinations
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;