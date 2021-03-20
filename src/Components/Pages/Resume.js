import React from 'react'
import Mainbody1 from '../Subsection/Mainbody1'
import Mainbody2 from '../Subsection/Mainbody2'

function Resume() {
    return (
        <div>
             <div className="container-fluid">
       
       <div className="mainbody1">
           <Mainbody1/>
         </div>
         <div className="mainbody2">
           <Mainbody2/>
         </div>
       </div>
        </div>
    )
}

export default Resume
