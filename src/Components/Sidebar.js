import React from 'react'
import Resume from './Resume/resume.pdf';
import Photo from './Photo/upwork.jpg'
import '../Components/Sidebar.css'
// material ui icon
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
function Sidebar() {
    return (
        <>
            <div className="container">
               <div className="body_part">
                   <div className="style_body">
                   <img src={Photo} alt="my photo" width="150px" height="150px"/>
                   <div className="name_part">
                       <h3>SHOAIB AHMAD</h3>
                       <p>A professional Webdeveloper</p>
                   </div>
                   <div className="download">
                       <a href={Resume} download="resume.pdf">Download resume</a>
                   </div>
                   <div className="icon_part">
                      <FacebookIcon/>
                      <TwitterIcon/>
                   </div>
                   </div>
                  
                   <div className="Address_bar">
                       <h3>MY ADDRESS</h3>
                       <p>Jessore,Khunna,Bangladesh</p>
                   </div>
                   <hr style={{ border:"3px solid"}}/>
                   <div className="contact_me">
                       <button className="btn btn-primary btn-lg">Email Me</button>
                   </div>
               </div>
            </div>
        </>
    )
}

export default Sidebar
