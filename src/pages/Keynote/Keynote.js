import Header from "../../components/Header/Header";
import "./Keynote.css"
import Footer from "../../components/footer/Footer"
import img1 from "../../assets/keynote/img1.png"
import img2 from "../../assets/keynote/img2.jpg"
import img3 from "../../assets/keynote/img3.jpg"
import img4 from "../../assets/keynote/img4.jpg"
import img5 from "../../assets/keynote/img5.jpg"
import img6 from "../../assets/keynote/img6.jpg"
import img7 from "../../assets/keynote/img7.jpg"
import img8 from "../../assets/keynote/img8.jpg"



const Keynote = () => {
    return(
        <>
        <Header active="keynote" />
        <div className="container my-5">
      <h4 className='d-inline-block p-2 px-3 headings mb-4'>KEYNOTE SPEAKERS</h4>
      <div className="KN-grid"  >
          <div>
          <div className="KN-container" >
        <img src={img1} className="keynote-img" alt="keynote-img" />
            <p className="KN-text">
                <b>Dr. Sergey Konovalov</b><br/><br/>
                Professor &amp; Head<br/><br/>
                Department of Metals Technology and Aviation Materials, Samara National Research University, Russia.

            </p>
        </div>
        <div className="KN-container" >
        <img src={img2} className="keynote-img" alt="keynote-img" />
            <p className="KN-text">
                <b>Dr. Xizhang Chen</b><br/><br/>
                Professor<br/><br/>
                College of Mechanical and Electrical Engineering,
                Wenzhou University, China
            </p>
        </div>
        <div className="KN-container" >
        <img src={img3} className="keynote-img" alt="keynote-img" />
            <p className="KN-text">
                <b>Dr. Pulak Mohan Pandey</b><br/><br/>
                Professor <br/><br/>
                Department of Mechanical Engineering,
                Indian Institute of Technology,
                New Delhi, India           
                
            </p>
        </div>
        <div className="KN-container" >
        <img src={img4} className="keynote-img" alt="keynote-img" />
            <p className="KN-text">
                <b>Dr. Akshay Dvivedi</b><br/><br/>
                Professor <br/><br/>
                Department of Mechanical and Industrial Engineering,
                Indian Institute of Technology, Roorkee,
                India

            </p>
        </div>
          </div>

          <div>
          <div className="KN-container" >
        <img src={img5} className="keynote-img" alt="keynote-img" />
            <p className="KN-text">
                <b>Dr. Sachin Maheshwari</b><br/><br/>
                Professor <br/><br/>
                Division of Manufacturing Processes and Automation Engineering,
                Netaji Subhas University of Technology (NSUT), New Delhi,
                India

            </p>
        </div>
        <div className="KN-container" >
        <img src={img6} className="keynote-img" alt="keynote-img" />
            <p className="KN-text">
                <b>Dr. Arshad Noor Siddiquee</b><br/><br/>
                Professor <br/><br/>
                Department of Mechanical Engineering,
                Jamia Millia Islamia ,
                New Delhi, India

            </p>
        </div>
        {/* <div className="KN-container" >
        <img src={img7} className="keynote-img" alt="keynote-img" />
            <p className="KN-text">
                <b>Dr. D.S. Nagesh</b><br/><br/>
                Professor<br/><br/>
                Department of Mechanical Engineering
                Delhi Technological University
                New Delhi 
                India

            </p>
        </div> */}
        <div className="KN-container" >
        <img src={img8} className="keynote-img" alt="keynote-img" />
            <p className="KN-text">
                <b>Dr. Mukul Shukla</b><br/><br/>
                Professor <br/><br/>
                Department of Mechanical Engineering,
                Motilal Nehru National Institute of Technology, Allahabad
                Uttar Pradesh, India 
                    
            </p>
        </div>
          </div>

      </div>
    </div>
    <Footer />

        </>
    )
}

export default Keynote;