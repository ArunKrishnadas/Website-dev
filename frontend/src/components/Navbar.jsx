import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import CustomDropdown from './CustomDropdown';

function Navbar() {
  const linkStyle = {
    color: 'white',

  };
  const headingStyle = {
    
  };

  return (
    <>
      <Nav className="justify-content-between align-items-center flex-column bg-dark py-3">
        <div className="d-flex align-items-center">
          
          <img className='transparent' src="https://www.pngrepo.com/png/397518/512/moai.png" alt="Logo" height="40" width="auto" />
          <Link to="/" className="nav-link maoi ml-3 py-2 fs-2" style={linkStyle}>Sigma Gainz</Link>
         
          
        </div>
        <div className="d-flex align-items-center">

       
    
          <Nav.Item>
            <Link to="/" className="nav-link" style={linkStyle}>Home</Link>
          </Nav.Item>
          <CustomDropdown /> 
          <Nav.Item>
            <Link to="/login" className="nav-link" style={linkStyle}>Login</Link>
          </Nav.Item>
          
          <Nav.Item>
            <Link to="/signup" className="nav-link" style={linkStyle}>Signup</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/about" className="nav-link" style={linkStyle}>About</Link>
          </Nav.Item>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;
