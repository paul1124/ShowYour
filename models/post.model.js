const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  postType: { type: String, required: true },
  content: { type: String, required: true },
  creator: { type: String, required: true },
  date: { type: Date, required: false },
}, {
  timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;