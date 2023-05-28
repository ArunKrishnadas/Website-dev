import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AddBlogs from './pages/AddBlogs';
import EditBlogs from './pages/EditBlogs';
import Login from './pages/Login';
import Signup from './pages/Signup';




export default function App() {
  return (
    <>
    
    
    <Navbar /><Container>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/addblogs" element={<AddBlogs />} />
          <Route path="/editblogs" element={<EditBlogs />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
       </Routes>
      </Container>
      
      
      </>
  );
};

