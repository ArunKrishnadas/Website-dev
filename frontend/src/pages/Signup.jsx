import React from 'react';
import './signup.css';

export default function Signup() {
  return (
    <div className="signup-container">
      <h2 className="signup-heading">Sign Up</h2>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text" id="username" className="form-input" />
        </div>
        
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" id="password" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="Role" className="form-label">Role:</label>
          <input type="tel" id="Role" className="form-input" />
          <drop />
        </div>
        
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
}
