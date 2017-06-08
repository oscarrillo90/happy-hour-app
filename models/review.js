var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require('./user.js');

// require ./user


//make a model for review
var ReviewSchema = new Schema({
  // TODO: Change the dataType of _user to ObectId for referencing.
  // referencing these Object IDS
  _user : String, // ObjectId type
  // TODO: You should also and _happyhour to reference the happy hour being reviewed
  title: String,
  rating: Number,
  date: String,
  description: String,

});

//EXPORTS STUFF

var Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
