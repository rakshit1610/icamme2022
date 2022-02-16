import React from 'react'
import Flyer from '../../assets/notices/Flyer.jpeg'
import Schedule from '../../assets/notices/Schedule.pdf'
import Technical from '../../assets/notices/Technical.pdf'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const Notices = () => {
    return (
        <>
        <Header active='notice'/>
        <div className="container my-5">
        <h4 className='d-inline-block p-2 px-3 headings mb-4'>Notices</h4>

        <div className="container mt-3 mb-5">
      <div className='row'>
      <a href={Flyer} target="_blank" className='col-12 mb-2' style={{textDecoration:'none'}}><p className='itemboxes m-0 p-2'>ICAMME-2022 Flyer</p></a>
      <a href={Schedule} target="_blank" className='col-12 mb-2' style={{textDecoration:'none'}}><p className='itemboxes m-0 p-2'>ICAMME-2022 Schedule</p></a>
      <a href={Technical} target="_blank" className='col-12 mb-2' style={{textDecoration:'none'}}><p className='itemboxes m-0 p-2'>Technical Program Schedule</p></a>
      <HashLink to='keynote-speakers#presentation' className='col-12 mb-2' style={{textDecoration:'none'}}><p className='itemboxes m-0 p-2'> Keynote Speech of Prof. Gurel Cam </p></HashLink>
      </div>
      </div>
        
        
        </div>
        </>
    )
}

export default Notices
