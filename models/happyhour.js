var mongoose = require('mongoose');
Schema = mongoose.Schema;
Review = require('./review');



//make a model for happy hour

var HappyhourSchema = new Schema({
  // referencing these Object IDS
  image_url: String,
  name: String,
  rating: Number,
  categories: String,
  location: String,
});

var Happyhour = mongoose.model('Happyhour', HappyhourSchema);
module.exports = Happyhour;
