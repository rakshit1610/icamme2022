import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header/Header'

function Call() {
  return (
    <>
    <Header active='call'/>
    <div className="container mt-5">
      <h4 className='d-inline-block p-2 px-3 headings mb-4'>The contributing papers are invited to the following broad categories of</h4>
      {/*  */}
      <div className='row'>
      <div className='col bg-info'>• Engineering Materials and Technology</div>
      <div className='col  bg-danger'>• Functional Materials</div>
      </div>
      <div className='row'>
      <div className='col bg-info'>• Advance Manufacturing Processes</div>
      <div className='col  bg-danger'>• Mechanics of Materials and Solid Mechanics</div>
      </div>
      <div className='row'>
      <div className='col bg-info'>• Fatigue</div>
      <div className='col  bg-danger'>• Mechanisms and Machines</div>
      </div>
      <div className='row'>
      <div className='col bg-info'>• Dynamics and Control</div>
      <div className='col  bg-danger'>• Combustion Engines</div>
      </div>
      <div className='row'>
      <div className='col bg-info'>• Mechanics</div>
      <div className='col  bg-danger'>• Mechatronics</div>
      </div>
      <div className='row'>
      <div className='col bg-info'>• Vehicle Engineering</div>
      <div className='col  bg-danger'>• Micro- and Nano- Mechanical Systems</div>
      </div>
      <div className='row'>
      <div className='col bg-info'>• Fluid Mechanics</div>
      <div className='col  bg-danger'>• Fuel and Combustion</div>
      </div>
      <div className='row'>
      <div className='col bg-info'>• Energy Harvesting</div>
      <div className='col  bg-danger'>• Acoustics, Vibration and Noise</div>
      </div>
      <div className='row'>
      <div className='col bg-info'>• Thermodynamics, Heat and Mass Transfer</div>
      <div className='col  bg-danger'>• Composites</div>
      </div>
      <div className='row'>
      <div className='col bg-info'>• Systems and Design</div>
      <div className='col  bg-danger'>• Metallurgy</div>
      </div>
      <div className='row'>
      <div className='col bg-info'>• Stress Analysis, Structures</div>
      <div className='col  bg-danger'>• Metrology</div>
      </div>
      <div className='row'>
      <div className='col bg-info'>• Surfaces and Interfaces</div>
      <div className='col  bg-danger'>• Robotics and Automation</div>
      </div>
      <div className='row'>
      <div className='col bg-info'>• Tribology</div>
      <div className='col  bg-danger'>• Smart Structures</div>
      </div>
      <div className='row'>
      <div className='col bg-info'>• Turbomachinery</div>
      <div className='col  bg-danger'>• Energy Harvesting</div>
      </div>
      <div className='row'>
      <div className='col bg-info'>• Industrial Engineering and Operation Research </div>
      <div className='col  bg-danger'>• Hydraulics and Pneumatics</div>
      </div>
      
      
      {/*  */}
    </div>
    <div className="container mt-5 mb-5">
      <h4 className='d-inline-block p-2 px-3 headings mb-4'>Important Dates</h4>
      <div className='d-flex flex-column flex-sm-row flexbox'>
        <div className='image1 me-3 mb-3'></div>
        <div className='image2 me-3 mb-3'></div>
      </div>
      <div className='d-flex flex-column flex-sm-row flexbox'>
        <div className='image3 me-3 mb-3'></div>
        <div className='image4 me-3 mb-3'></div>
      </div>
      </div>
      <div className="register-cntnr" >
    <p>Are you ready to be a part of next generation and focused on all promising areas of Materials and Mechanical Engineering</p>
    <a href="https://forms.gle/nhvrFS3ikega6fru5" >
    <button type="button" className="register-btn" >Register Now</button>
    </a> 
</div>
    <div className="container my-5">
      <h4 className='d-inline-block p-2 px-3 headings mb-4'>PUBLICATION</h4>
      <p>All accepted and presented articles after peer review process will be published in a SCOPUS indexed Journal.<br/><br/>

Refer to the conference website for further details and updates.</p>
      </div>
      <br /> <br/>
      <Footer />
    </>
  );
}

export default Call;
