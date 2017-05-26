
var ReviewSchema = new Schema({
  // referencing these Object IDS
  happyHour_id: {type: ObjectId, ref: "happy-hour"}
  user_id : {type: ObjectId, ref: "user"}
  review: String,
  title: String,
  rating: Number
});
