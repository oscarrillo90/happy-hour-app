// REQUIREMENTS
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const yelp = require('yelp-fusion');


  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/todo-app');
// MIDDLEWARE
app.use(express.static('public'));

// ROUTES
// ... coming soon
app.get('/', function(req, res){
  res.json({message: "IT WORKS!"});
})

//yelp API route
app.get('/search', function(req, res){

  var yelp = require('yelp-fusion');

  // Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab them
  // from https://www.yelp.com/developers/v3/manage_app
  var clientId = 'V2QqY10c5zFZE84_xaQwYQ';
  var clientSecret = 'QjWl5JQMnwhIYhFwlrpvbOZ99HsaJTYbufGKLt5CBRO9KxVTfcaZFmXb4xxQEepL';

  var searchRequest = {
    term:'happy hour',
    location: 'austin, tx',
    limit: 50
  };


  yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);

    client.search(searchRequest).then(response => {
      var firstResult = response.jsonBody.businesses;
      //var prettyJson = JSON.stringify(firstResult, null, 4);
      res.json(firstResult);
    });
  }).catch(e => {
    console.log(e);
  });
});

// SERVER START
app.listen(process.env.PORT || 3000, function () {
  console.log("HTTP server listening at localhost:3000");
});
