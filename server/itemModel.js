var mongoose = require('mongoose');



var itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  quantity: Number
});

//this is our model
module.exports = mongoose.model('Item', itemSchema);

