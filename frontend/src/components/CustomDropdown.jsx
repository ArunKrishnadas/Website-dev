import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CustomDropdown() {
  return (
    <Dropdown className='drop'>
      <Dropdown.Toggle className="custom-dropdown-toggle" id="dropdown-basic">
        Blogs
      </Dropdown.Toggle>

      <Dropdown.Menu className='drop'>
        <Dropdown.Item as={Link} to="/AddBlogs" className="nav-link1">
          Add Blogs
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/editblogs" className="nav-link1">
          Edit blogs
        </Dropdown.Item>

        
      </Dropdown.Menu>
    </Dropdown>
  );
}
