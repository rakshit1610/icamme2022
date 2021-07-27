import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import NotificationsIcon from '@material-ui/icons/Notifications'
import './Navbar.css'

function Navigationbar() {
  return (
      <>
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className='px-3'>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <div className='d-flex d-md-none'>
  <div className='text-white p-1 me-4' style={{fontSize: "12px", border:'1px solid white'}}>Date&nbsp;:&nbsp;18&nbsp;-&nbsp;19&nbsp;Feb’&nbsp;2022</div>
  <NotificationsIcon className='m-0 p-0' style={{color:"white"}}/>
  </div>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="d-flex justify-content-around w-100 nav-options">
      <Nav.Link style={{color:'white'}} href="#features">Home</Nav.Link>
      <Nav.Link style={{color:'white'}} href="#features">About AKGEC</Nav.Link>
      <Nav.Link style={{color:'white'}} href="#features">Call for Paper</Nav.Link>
      <Nav.Link style={{color:'white'}} href="#features">COMMITTEE</Nav.Link>
      <Nav.Link style={{color:'white'}} href="#features">Keynote Speakers</Nav.Link>
      <Nav.Link style={{color:'white'}} href="#features">Registration Fee</Nav.Link>
      <Nav.Link style={{color:'white'}} href="#features">Best Paper Award</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  
  </>
  );
}

export default Navigationbar;
