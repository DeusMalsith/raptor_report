// Require express
var express = require('express');

// Declare a new router
var router = express.Router();

//Get the authorization helper function
var loggedIn = require('../middleware/loggedIn');

// Require the database
var db = require('../models');

//Define routes
router.get('/', loggedIn, function(req, res) {
	db.bird.findAll({
		where: {userId: req.user.id}
	}).then(function(birds) {
		res.render('birds/index', {birds: birds});
	}).catch(function(err) {
		res.send('Dang');
	});
});

module.exports = router;