import React, { useState } from 'react';
import HomeCarousel from '../../components/carousel/HomeCarousel'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header/Header'
import Popup from '../../components/popup/Popup'
import './Home.css'


function Home() {

  return (
    <>
    <Header active='home'/>
    <HomeCarousel/>
    <div className="container mt-5">
      <h4 className='d-inline-block p-2 px-3 headings mb-4'>ABOUT CONFERENCE</h4>
      <p>A peer reviewed international conference on Advances in Materials and Mechanical Engineering (ICAMME-2022) is scheduled to be held during (18-19 Feb’ 2022) at Ajay Kumar Garg Engineering College, Ghaziabad, Uttar Pradesh, India. ICAMME seeks to provide an open communication platform to discuss and exchange futuristic trends and high-quality research in the field of Materials and Mechanical Engineering among researchers, academicians, industrial professionals and students and bring together people from all different geographical areas who share a common discipline or field. The primary goal of the conference is to promote research and development activities needed for the next generation and focused on all promising areas of Materials and Mechanical Engineering. Several renowned experts from the Materials and Mechanical Engineering will share their knowledge and experience with the participants.</p>
    </div>
    <div className="container mt-5 mb-5">
      <h4 className='d-inline-block p-2 px-3 headings mb-4'>GLIMPSES OF PREVIOUS CONFERENCE</h4>
      <div className='d-flex flex-column flex-sm-row flexbox'>
        <div className='image1 me-3 mb-3'></div>
        <div className='image2 me-3 mb-3'></div>
      </div>
      <div className='d-flex flex-column flex-sm-row flexbox'>
        <div className='image3 me-3 mb-3'></div>
        <div className='image4 me-3 mb-3'></div>
      </div>
      </div>
  
    <Footer />



    </>
  );
}

export default Home;
