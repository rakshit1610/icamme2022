import Header from "../../components/Header/Header"
import { Table } from "react-bootstrap"
import Banner from "../../components/banner/Banner"
import Footer from "../../components/footer/Footer"


const Award = () => {
    return(
        <>
        <Header active="award" />
        <div className="container my-5">
        <h4 className='d-inline-block p-2 px-3 headings mb-4'>Best Paper Award</h4>
        <p className='mb-5'> Authors of the 2 selected papers will be given best paper award and they will be given awards during the valedictory function.</p>
        
        <Table striped bordered >
  <thead>
    <tr>
      
      <th>Award</th>
      <th>Prize</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Best Paper 1</td>
      <td>Rs. 15,000</td>
    </tr>

    <tr>  
      <td>Best Paper 2</td>
      <td>Rs. 10,000</td>
    </tr>

  </tbody>
</Table>
</div>
<Banner />
<Footer />
        </>
    )
}

export default Award