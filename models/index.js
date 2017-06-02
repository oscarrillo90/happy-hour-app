var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/happy-hour-app');

module.exports.happyhour = require('./happyhour.js');
module.exports.review = require('./review.js');
module.exports.user = require('./user.js');
