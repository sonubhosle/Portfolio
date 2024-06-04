import React from "react";
import "./Style.css";

const data = [
  {
    name: "Deeper Skillset",
    desc:"Kobita tumi sopno charini hodsye ersest labo met, consectetur addsipi ctetur adipisicing eod tempor",
    icon:"https://marketifythemes.net/html/foliox/img/svg/setting.svg"
  },
  {
    name: "Creative Work",
    desc:"Kobita tumi sopno charini hodsye ersest labo met, consectetur addsipi ctetur adipisicing eod tempor",
    icon:"https://marketifythemes.net/html/foliox/img/svg/case.svg"
  },
  {
    name: "Strong Dedication",
    desc:"Kobita tumi sopno charini hodsye ersest labo met, consectetur addsipi ctetur adipisicing eod tempor",
    icon:"https://marketifythemes.net/html/foliox/img/svg/diamond.svg"
  },
];
const Work = () => {
  return (
    <div className="work_section">
      <div className="grid_container">
        {data.map((item, index) => {
          return <div className="card">
            <img src={item.icon} className="icon"></img>
            <div className="name">{item.name}</div>
            <div className="desc">{item.desc}</div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Work;
