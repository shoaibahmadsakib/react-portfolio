import React,{useState} from "react";

import "../Pages/Project.css";
import ProjectData from "../../Data/ProjectData";
import ManagePage from "./ManageProject";

function ProjectPage() {

const [projects , setProject] = useState(ProjectData)
 
const projectFilterItem =(name)=>{
   const arrProject =  ProjectData.filter((p) =>p.catagory.includes(name))
   setProject(arrProject)
}

  return (
    <div>
      <div className="project_nav">
            <div className="project_item" onClick={()=>projectFilterItem('reactjs')} >react</div>
            <div className="project_item" onClick={()=>projectFilterItem('html')} >html</div>
            <div className="project_item" onClick={()=>projectFilterItem('javascript')} >javascript</div>
            <div className="project_item" onClick={()=>projectFilterItem('python')} >python</div>
            <div className="project_item" onClick={()=>projectFilterItem('nodejs')} >node</div>
      </div>
      <div className="big_container">
        
        {projects.map((sakibData,index) => {
          return (
            <>
              <ManagePage
                key ={index}
                image={sakibData.image}
                altTag={sakibData.altTag}
                title={sakibData.title}
                paragraph={sakibData.paragraph}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectPage;
