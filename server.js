// REQUIREMENTS
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const yelp = require('yelp-fusion');
var db = require('./models');

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);
// app.set('view', path.join(_dirname, 'views'))

// MIDDLEWARE
app.use(express.static('public'));


// ROUTES
// ... coming soon
app.get('/', function(req, res){
  res.json({message: "IT WORKS!"});
})

var happyHourController = require('./controllers/happyHourController.js')

// /search/cocktails
app.get('/search/:term', happyHourController.search)


// get all happy hours
app.get('/results', happyHourController.index);







// SERVER START
app.listen(process.env.PORT || 3000, function () {
  console.log("HTTP server listening at localhost:3000");
});
