var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  textbody: String,
  title: String,
  author: String,
  description: String,
  published_year: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('post', postSchema);
