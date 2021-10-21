import React from 'react'
import Banner from '../../components/banner/CallBanner'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header/Header'
import Guidelines from '../../assets/documents/Guidelines.pdf'
import Template from '../../assets/documents/Template.docx'
import './Call.css'

function Call() {
  return (
    <>
    <Header active='call'/>
    <div className="container mt-5">
      <h4 className='d-inline-block p-2 px-3 headings mb-4'>The contributing papers are invited to the following broad categories of</h4>
      {/*  */}
      <div className='row'>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Engineering Materials and Materials Technology</p></div>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Functional, functionally graded</p></div>
      </div>
      <div className='row'>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Multifunctional Smart Materials (e.g. Shape Memory Alloys Piezoelectric Materials etc.)</p></div>
      <div className='col-12 mb-2 col-md-6 h-auto'><p className='itemboxes m-0 p-2 h-100'>• Bio Materials  </p> </div>
      </div>
      <div className='row'>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Composites</p></div>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Materials Characterization</p></div>
      </div>
      <div className='row'>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Fatigue and creep</p></div>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Tribology</p></div>
      </div>
      <div className='row'>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Advance Manufacturing Processes</p></div>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Advanced Welding Processes</p></div>
      </div>
      <div className='row'>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Additive Manufacturing</p></div>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• 3D, 4D Printing</p></div>
      </div>
      <div className='row'>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Rapid Manufacturing Technologies and Prototyping</p></div>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Sustainable and Green Manufacturing </p></div>
      </div>
      <div className='row'>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Computer-Based Manufacturing Technologies </p></div>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Industrial Engineering and Operation Research Reliability</p></div>
      </div>
      <div className='row'>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2 h-100'>• Polymers and processing of polymers</p></div>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Metallurgy of ferrous and non-ferrous materials Surfaces and Interfaces</p></div>
      </div>
      <div className='row'>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Metrology</p></div>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Stress Analysis, Structures</p></div>
      </div>
      <div className='row'>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Smart Structures</p></div>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Mechanics of Materials and Solid Mechanics Mechatronics</p></div>
      </div>
      <div className='row'>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Robotics and Automation</p></div>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Micro-and Nano-Mechanical Systems</p></div>
      </div>
      <div className='row'>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Mechanisms and Machines</p></div>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Dynamics and Control</p></div>
      </div>
      {/* <div className='row'>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Turbomachinery</p></div>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Energy Harvesting</p></div>
      </div>
      <div className='row'>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Industrial Engineering and Operation Research </p></div>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>• Hydraulics and Pneumatics</p></div> */}
      {/* </div> */}
      
      
      {/*  */}
    </div>
    <div className="container mt-5 mb-5">
      <h4 className='d-inline-block p-2 px-3 headings mb-4'>Important Dates</h4>
      <div className='row'>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>Full Paper Submission Deadline : 25 Nov’ 2021 </p></div>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>Notification of Paper Acceptance : 10 Dec’ 2021</p></div>
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>Registration Deadline : 01 Feb’2021</p></div>
      {/* <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>Submission of Camera Ready Paper : 15 Jan’ 2021 </p></div> */}
      <div className='col-12 mb-2 col-md-6'><p className='itemboxes m-0 p-2'>Conference Date : 18-19 Feb’2022 </p></div>

      </div>
      </div>

    <div className="container mt-5 mb-5">
      <h4 className='d-inline-block p-2 px-3 headings mb-4'>Relevant Links</h4>
      <div className='row'>
      <a href="https://forms.gle/TwFEkHamZ77QiH1R7" target="_blank" className='col-12 mb-2 col-md-6' style={{textDecoration:'none'}}><p className='itemboxes m-0 p-2'>Paper Submission Dashboard</p></a>
      <a href={Guidelines} target="_blank" className='col-12 mb-2 col-md-6' style={{textDecoration:'none'}}><p className='itemboxes m-0 p-2'>Paper Submission Guidelines</p></a>
      <a href={Template} target="_blank" className='col-12 mb-2 col-md-6' style={{textDecoration:'none'}}><p className='itemboxes m-0 p-2'>Template</p></a>
      </div>
      </div>
     {/* <Banner /> */}
    <div className="container my-5">
      <h4 className='d-inline-block p-2 px-3 headings mb-4'>PUBLICATION</h4>
      <p>All accepted and presented articles after peer review process will be published in Materials Today: Proceedings (SCOPUS indexed).</p>
      </div>
      <br /> <br/>
      <Footer />
    </>
  );
}

export default Call;
