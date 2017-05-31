var mongoose = require('mongoose'),
    Schema = mongoose.Schema;



//make a model for review
var ReviewSchema = new Schema({
  // referencing these Object IDS
  user : String,
  title: String,
  rating: Number,
  date: String,
  description: String,
});

//EXPORTS STUFF

var Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
