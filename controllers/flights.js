const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create
};

function create(req, res) {
    // remove leading and trailing spaces
    req.body.airline = req.body.airline.trim();
    req.body.airport = req.body.airport.trim();
    req.body.flightNo = req.body.flightNo.trim();
    const flight = new Flight(req.body);
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('flights/new');
      console.log(flight);
      res.redirect('/flights/new'); /// change after adding index page
    });
   }
   
function newFlight(req, res) {
	res.render('flights/new')
}