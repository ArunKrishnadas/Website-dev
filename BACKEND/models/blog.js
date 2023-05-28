const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, required: true },
  likes: { type: Number, default: 0 },
  comments: [{ type: String }],
  shares: { type: Number, default: 0 }
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
