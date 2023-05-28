const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const cors =require('cors')
const app = express();
app.use(bodyParser.json());
app.use(cors())
// MongoDB connection
mongoose.connect('mongodb+srv://abhijithts402:G9C1nTJCtF28jHwV@cluster0.2grn0aq.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import user models
const Blogger = require('./models/blogger');
const Blog = require('./models/blog'); // Added line to import the Blog model

// Secret key for JWT
const secretKey = '123456';

// Import routes
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');

// Register routes
//app.use('/auth', authRoutes);
//app.use('/api/blogs', blogRoutes);

// Add the /api/blogs route to fetch blogs
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.log('Error fetching blogs:', error);
    res.status(500).json({ error: 'Error fetching blogs' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
