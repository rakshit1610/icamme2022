import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import NotificationsIcon from '@material-ui/icons/Notifications'
import './Navbar.css'

function Navigationbar(props) {
  console.log(props.active)
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
      <Nav.Link className={props.active==='home'?'active':'inactive'} href="#features">Home</Nav.Link>
      <Nav.Link className={props.active==='about'?'active':'inactive'} href="#features">About AKGEC</Nav.Link>
      <Nav.Link className={props.active==='call'?'active':'inactive'} href="#features">Call for Paper</Nav.Link>
      <Nav.Link className={props.active==='commitee'?'active':'inactive'} href="#features">COMMITTEE</Nav.Link>
      <Nav.Link className={props.active==='keynote'?'active':'inactive'} href="#features">Keynote Speakers</Nav.Link>
      <Nav.Link className={props.active==='registration'?'active':'inactive'} href="#features">Registration Fee</Nav.Link>
      <Nav.Link className={props.active==='award'?'active':'inactive'} href="#features">Best Paper Award</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  
  </>
  );
}

export default Navigationbar;
