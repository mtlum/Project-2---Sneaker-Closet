const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shoeSchema = new Schema({
  make: String,
  model: String,
  colour: String,
  year: Number,
  price: Number,
});

module.exports = mongoose.model("Shoe", shoeSchema);
