import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import SakibImg from '../Photo/upwork.jpg'
import '../Pages/About.css'

function AboutPage() {
    return (
        <div>
           <div className="section_part">
               <div className="row about_row">
                   <div className="col-lg-6">
                       <img src={SakibImg} alt="" height="300px" width="300px"/>
                   </div>
                   <div className="col-lg-6">
                       <h2>my self</h2>
                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. excepturi! Harum unde officia aperiam cupiditate.</p>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default AboutPage
