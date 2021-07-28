import "./Footer.css"
import {  MailOutline, Call, LocationOn } from "@material-ui/icons";

const Footer = () => {
    return(

      <div className="Footer">
      <div className="Footer-Top">
     
       
          
         <p><LocationOn /> 27th Km Stone,
Delhi-Hapur Bypass Road,
P.O. Adhyatmik Nagar,
Ghaziabad - 201009 </p>  
          <p><MailOutline /> icamme2022@akgec.ac.in</p>  
           <p><Call />  +91-9540935533, +91-9458582870</p> 
            
          
        </div>

      <hr />
      <div className="Footer-Bottom">designed and developed by: Software Incubator</div>
    </div>
    )
}

export default Footer;