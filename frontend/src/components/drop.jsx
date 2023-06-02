import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Drop() {
  return (
    <Dropdown className='drop'>
      <Dropdown.Toggle className="custom-dropdown-toggle" id="dropdown-basic">
        Role
      </Dropdown.Toggle>

      <Dropdown.Menu className='drop'>
        <Dropdown.Item as={Link} to="/AddBlogs" className="nav-link1">
          blogger
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/editblogs" className="nav-link1">
          Admin
        </Dropdown.Item>

        
      </Dropdown.Menu>
    </Dropdown>
  );
}