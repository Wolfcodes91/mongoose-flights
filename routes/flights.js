var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights')

//all routes start with /flights
router.get('/', flightsCtrl.index);
//GET /flights/new
router.get('/new', flightsCtrl.new);
//create POST /flights
router.post('/', flightsCtrl.create) 

module.exports = router;
