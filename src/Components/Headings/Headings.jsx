import React from "react";

const Headings = ({heading,sm_heading}) => {
  return (
  <div className="heading">
     <p>{sm_heading}</p>
     <h2>{heading}</h2>
  </div>)
};

export default Headings;
