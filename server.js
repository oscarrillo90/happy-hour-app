// REQUIREMENTS
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// MIDDLEWARE
app.use(express.static('public'));

// ROUTES
// ... coming soon

// SERVER START
app.listen(3000, function () {
  console.log("HTTP server listening at localhost:3000");
});
