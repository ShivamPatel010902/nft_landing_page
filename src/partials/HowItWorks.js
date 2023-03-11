import React from "react";
import "./styles/Responsive.scss";

export default function VersatileToken() {
  return (
    <>
      <div className="s6" style={{backgroundColor: "white", color: "#07071C"}}>
        <div className="s6-container">
          <div className="s6-image-wrapper">
            <div>
              <img
                src="assets/img/HowItWorks2.png"
                className="s3-box-image how-img"
              />
            </div>
          </div>
          <div
            data-w-id="649dbab4-e00a-e03a-732f-5ed95dca54ab"
            className="s6-info-container how-text">
            <h2 className="h2 is-small-h2" style={{color: "#07071C"}}>How It Works</h2>
           
          </div>
        </div>
      </div>
    </>
  );
}
