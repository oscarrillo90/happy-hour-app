var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/happy-hour-app');

module.exports.happyhour = require('./happyhour.js');
