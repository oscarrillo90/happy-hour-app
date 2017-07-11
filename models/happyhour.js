var mongoose = require('mongoose');
Schema = mongoose.Schema;
Review = require('./review');



//make a model for happy hour

var HappyhourSchema = new Schema({
  // referencing these Object IDS
  // TODO: JS Convention says to use imageUrl instead of image_url
  image_url: String,
  name: String,
  rating: Number,
  categories: String,
  location: String,
  // TODO: Set up review to be an array of review schemas OR an array of review ObjectIds
  review: String
});

var Happyhour = mongoose.model('Happyhour', HappyhourSchema);
module.exports = Happyhour;
