import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ManageProject(props) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={props.image}
        alt={props.altTag}
        width="140px"
        height="150px"
      />
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.paragraph}</p>
    </div>
  );
}

export default ManageProject;
