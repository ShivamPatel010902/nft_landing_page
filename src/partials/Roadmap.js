import React from "react";
import "./styles/Roadmap.scss";

export default function Roadmap() {
  const Initiatives = [
    [
      "Q4 2022", 
      "Concept Creation, Community building, Testnet launch", 
      "lightblue"
    ],

    [
      "Q1 2023",
      "Seed raise, Team expansion, MVP Launch",
      "primaryblue"
    ],

    [
      "Q2 2023",
      "Security Audits, Product Launch",
      "violet"
    ],
    
    [
      "Q3 2023",
      "Building DAO ecosystem, IFO",
      "pink"
    ]
  ];
  return (
    <div className="roadmap">
      <h2>Roadmap</h2>
      <div class="initiativescontainer">
        {Initiatives.map((initiative, index) => {
          return (
            <div class={"initiativediv  " + initiative[2]}>
              <div class=" iniiconbox">
                <img
                  src={"/assets/img/roadmapicons/" + (index + 1) + ".png"}
                  style={{
                    position: "relative",
                    transition: "0.5s ease",
                    width: "100%"
                  }}
                  alt=""
                />
                <div class="shadowdiv"></div>
              </div>
              <div class="iniinfo">
                <h4>{initiative[0]}</h4>
                <p>{initiative[1]}</p>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}
