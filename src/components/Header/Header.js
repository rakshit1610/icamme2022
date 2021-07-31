import React, {useState} from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Navbar from './Navbar'
import Popup from '../popup/Popup'

function Header(props) {
  const [modalShow, setModalShow] = useState(false);
  
  return (
      <>
      <div className='container-lg d-flex justify-content-around align-items-center'>
      <div className= 'd-flex align-items-center py-3'>
      <img src={logo} width='80px' alt="logo" />
      <h5 className="ms-4 font-weight-bold name-heading">International Conference on Advances in Materials and Mechanical Engineering</h5>
      </div>
      <div className='ms-5 align-items-center d-none d-md-flex'>
      <div className=' p-2 me-4 eventDate'>Event&nbsp;Date&nbsp;:&nbsp;&nbsp;18&nbsp;-&nbsp;19&nbsp;Feb’&nbsp;2022</div>
      <NotificationsIcon style={{cursor:"pointer"}} onClick={() => setModalShow(true)} />
      </div>
      </div>
      <Navbar active={props.active}/>

      <Popup
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  
      </>
    );
  }
  
  export default Header;