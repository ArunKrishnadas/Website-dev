import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';

export default function AddBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/blogs');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.log('Error fetching blogs:', error);
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Create a new blog object
    const newBlog = {
      title: title,
      content: content,
    };

    try {
      const response = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBlog),
      });
      const data = await response.json();
      console.log('New blog created:', data);
      // Clear the input fields
      setTitle('');
      setContent('');
      // Fetch the updated list of blogs
      fetchBlogs();
    } catch (error) {
      console.log('Error creating blog:', error);
    }
  };

  return (
    <div>
      <div className='fs-4 text1 my-3'>Here you can add your Blogs if you are a signed-in user!</div>
      <form onSubmit={handleSubmit} className="blog-form">
        <div className="form-group">
          <label htmlFor="title" className="form-label">Title:</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="content" className="form-label">Content:</label>
          <textarea id="content" value={content} onChange={handleContentChange} className="form-input"></textarea>
        </div>
        <button type="submit" className="submit-button">Add Blog</button>
      </form>

      <Accordion className='my-5'>
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <Accordion.Item key={blog.id} eventKey={blog.id}>
              <Accordion.Header>{blog.title}</Accordion.Header>
              <Accordion.Body>{blog.content}</Accordion.Body>
            </Accordion.Item>
          ))
        ) : (
          <div>No blogs available.</div>
        )}
      </Accordion>
    </div>
  );
}
