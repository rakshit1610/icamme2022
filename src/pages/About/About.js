import React from 'react'
import AboutCarousel from '../../components/carousel/AboutCarousel';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header'

function About() {
  return (
    <>
    <Header active='about'/>
    <AboutCarousel />
    <div className="container mt-5">
      <h4 className='d-inline-block p-2 px-3 headings mb-4'>ABOUT COLLEGE</h4>
      <p>Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad is affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow, India and is approved by the All India Council for Technical Education. The college was established in 1998 and offers B. Tech Courses in ten disciplines of Engineering. The college also offers M. Tech in Computer Science & Engineering, Electronics & Communication Engineering, Electrical and Electronics Engineering, Mechanical Engineering and Automation & Robotics. The college strives for excellence and has been consistently maintaining excellent academic results and placements. The college has the distinction of being the first and only college in Uttar Pradesh, India to receive the Academic Excellence Award for the Best Engineering College in Uttar Pradesh Technical University from H.E. the Governor of Uttar Pradesh, India for two successive years. It is a matter of pride for the College to maintain a superlative overall academic performance over the years.<br/><br/>
The college places special emphasis on collaboration with industries at various levels to groom the students to meet the industry and research standards. These include establishing collaborative facilities for student training in emerging multidisciplinary technologies and undertaking industry sponsored consultancy and research projects. The college has the distinction of being the only Engineering College in the State of U.P. to have received approval from Department of Science and Technology (DST), Government of India, for establishment of Centre of Relevance and Excellence (CORE) in the field of Automation & Robotics. The program envisages a unique partnership between AKGEC and international industries to promote research, consultancy, project development and training in the emerging technological field of Automation and Robotics.
</p>
    </div>
    <div className="container mt-5 mb-5">
      <h4 className='d-inline-block p-2 px-3 headings mb-4'>AKGEC SKILL CENTER</h4>
      <p>1.  AKGEC- KUKA Industrial Robotics Training Centre<br/>
2.  AKGEC-NI LabView Academy<br/>
3.  AKGEC – SIEMENS PLM Centre of Excellence<br/>
4.  AKGEC-BOSCH Rexroth Centre of Competence In Automation Technologies<br/>
5.  AKGEC-AIA Center for Integrated Automation<br/>
6.  AKGEC-JANATICS Industrial Pneumatics<br/>
7.  AKGEC-FRONIUS Advance Welding Technology And Research Center<br/>
8.  AKGEC-SIEMENS Advance Manufacturing Centre<br/>
9.  AKGEC-FABLAB<br/>
10.  AKGEC-Common Facility Centre under One Product One District Supported by Government of Uttar Pradesh.<br/><br/>

The efforts of the college to bridge the gap between academic curriculum and industry requirements through these centers of Excellence & Competence have been recognized and the college is the recipient of the CMAI Best Industry Interface award from the Hon'ble Minister of Science & Technology, Government of Uttar Pradesh, India. AKGEC in its endeavor to promote technical competency of engineering graduates, Diploma and ITI candidates and has established Skill Development Centre in collaboration with National Skill Development Corporation (NSDC), Ministry of Skill Development & Entrepreneurship, Govt. of India under AKGEC Skills Foundation. This initiative is supported by reputed multinational industries of Europe like SIEMENS, Fronius, Messer and Carl Zeiss as per the International didactic concepts. This centre has world class State-of-the-art infrastructure and facilities to train young Engineers, Polytechnic and ITI candidates in the field of conventional and computer aided manufacturing, robot assisted manufacturing, robotic manufacturing, manual & robotic arc welding, non-destructive testing (NDT) and high-end reverse engineering processes.<br/><br/>

The college has established the Big Data Centre of Excellence, Software Development Centre and Open Source Software Research & Development lab. These centers are run and managed entirely by the students to promote software development for the college as well as external clients, conduct training programs in various technologies and host competitions. <br/>
In addition, AKGEC has established IDEA Lab (Innovation, Development of Entrepreneurship and Application Lab) in the year 2017. The basic objective of IDEA Lab is to be a establishing technical business incubator for entrepreneurship development and innovation, which enables establishing new enterprises, creating new job positions, as well as developing new IDEAs and technologies. The Business Incubator Centre has the tools, expertise, mentors and experience to help early age start-ups and ideas. IDEA Lab is developed to support every small or medium size business idea, innovation, entrepreneurship and start-ups in the college.<br/>
</p>
      </div>
      <Footer />
    </>
  );
}

export default About;
