import React, { useState } from "react";
import '../Mainpart.css'
import {Link} from 'react-router-dom'
function NavBar() {

    const[active,setActive] = useState("resume")
  return (
    <div>
      <header className="main_header">
        <div className="row">
          <div className="col-lg-4 Text_header">
            <h2>{active}</h2>
          </div>
          <div className="Navbar col-lg-8">
            <ul>
            {active !== 'resume' ?  <li>
                <Link to="/" onClick={()=> setActive('resume')} >resume</Link>
              </li> : null}
             {
                 active !== 'about'? <li>
                 <Link to="/about" onClick={()=> setActive('about')} >about</Link>
               </li> : null
             }
                {
                 active !== 'project'? <li>
                 <Link to="/project" onClick={()=> setActive('project')} >project</Link>
               </li> : null
             }
             
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
export default NavBar;
