import Header from "../../components/Header/Header"
import Footer from "../../components/footer/Footer"
import "./Registration.css"
import { Table } from "react-bootstrap"
import Banner from "../../components/banner/Banner"

const Registration = () => {
    return(
        <>
        <Header active="registration" />
        <div className="container my-5">
        <h4 className='d-inline-block p-2 px-3 headings mb-4'>Registration Fee</h4>
    
        <Table striped bordered >
  <thead>
    <tr>
      
      <th>Participant</th>
      <th>Form, India(INR)</th>
      <th>Form, Abroad(USD)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>Students (UG/PG)	Rs. 3000	$ 125</td>
      <td>Rs. 3000</td>
      <td>$ 125</td>
      
      

    </tr>
    <tr>
    <td>PhD Scholar	Rs. 4000	$ 175</td>
      
      <td>Rs. 4000</td>
      <td>$ 175</td>
     
      
      
    </tr>
    <tr>
    <td>Faculty Members </td>
    <td>Rs. 5000</td>
     
     
      <td>$ 200</td>
      
    

    </tr>

    <tr>
    <td>Industry and Research Professionals </td>
    <td>Rs. 6000</td>
    <td>$ 230</td>
    </tr>

    <tr>
    <td>Conference Attendees/ Co-Authors/ Listener </td>
    <td>Rs. 1000</td>
    <td>$ 60</td>
    </tr>
  </tbody>
</Table>
        <h4 className='d-inline-block p-2  px-3  headings mt-5 mb-4'>Bank Details</h4>
        <Table striped bordered >
            <tbody>
            <tr>
                <td> Account Name </td> 
                <td>Ajay Kumar Garg Engineering College, Ghaziabad</td>
            </tr>
            <tr>
                <td> Account Name </td> 
                <td>Ajay Kumar Garg Engineering College, Ghaziabad</td>
            </tr>
            <tr>
                <td> Account Number </td> 
                <td>	508010250461</td>
            </tr>
            <tr>
                <td>Branch </td>
                <td>30 &amp; 31 Navyug Market, P.B. No. 75, Ghaziabad-201001 (Uttar Pradesh), India</td>
            </tr>
            <tr>
                <td>IFSC Code</td>
                <td>KKBK0005295</td>
            </tr>
            </tbody>
        </Table>
        </div>
        <Banner />
        <Footer />
        </>
    )
}

export default Registration