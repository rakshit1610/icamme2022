import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import NotificationsIcon from '@material-ui/icons/Notifications'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navigationbar(props) {
  // console.log(props.active)
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
      <Nav.Link className={props.active==='home'?'active':'inactive'}><Link to='/' className={props.active==='home'?'activeLink':'inactiveLink'}>Home</Link></Nav.Link>
      <Nav.Link className={props.active==='about'?'active':'inactive'}><Link to='/about' className={props.active==='about'?'activeLink':'inactiveLink'}>About AKGEC</Link></Nav.Link>
      <Nav.Link className={props.active==='call'?'active':'inactive'}><Link to='/call-for-paper' className={props.active==='call'?'activeLink':'inactiveLink'}>Call for Paper</Link></Nav.Link>
      <Nav.Link className={props.active==='committee'?'active':'inactive'}><Link to='/committee' className={props.active==='commitee'?'activeLink':'inactiveLink'}>COMMITTEE</Link></Nav.Link>
      <Nav.Link className={props.active==='keynote'?'active':'inactive'}><Link to='/keynote-speakers' className={props.active==='keynote'?'activeLink':'inactiveLink'}>Keynote Speakers</Link></Nav.Link>
      <Nav.Link className={props.active==='registration'?'active':'inactive'}><Link to='/registration' className={props.active==='registration'?'activeLink':'inactiveLink'}>Registration Fee</Link></Nav.Link>
      <Nav.Link className={props.active==='award'?'active':'inactive'}><Link to='/award' className={props.active==='award'?'activeLink':'inactiveLink'}>Best Paper Award</Link></Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
  
  </>
  );
}

export default Navigationbar;
