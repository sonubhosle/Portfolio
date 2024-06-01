import React from "react";
import "./Style.css";

const data = [
  {
    name: "card",
  },
  {
    nmae: "card",
  },
  {
    nmae: "card",
  },
];
const Work = () => {
  return (
    <div className="work_section">
      <div className="grid_container">
        {data.map((item, index) => {
          return <div className="card">{item.nmae}</div>;
        })}
      </div>
    </div>
  );
};

export default Work;
