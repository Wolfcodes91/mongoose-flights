const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show,
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
      if (err) return res.redirect('/');
      res.render('flights/index', { flights });
    });
  }
function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
      if (err) return res.render('flights/new');
      res.redirect('/flights/'); 
    });
   }
   
function newFlight(req, res) {
	res.render('flights/new')
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({ flight: flight._id}, function(err, tickets) {
      res.render('flights/show', {flight, tickets});
    });
  });
};