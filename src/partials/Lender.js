import React from "react";
import "./styles/Responsive.scss";

export default function VersatileToken() {
  return (
    <>
      <div className="s6" >
        <div className="s6-container">
          <div
            data-w-id="649dbab4-e00a-e03a-732f-5ed95dca54ab"
            className="s6-info-container"

          >
            <h2 className="h2 is-small-h2" style={{color: "black" }}>Why sell on GearFi? </h2>
            <p className="p is-s6-p" style={{color: "black" }}>

              <br/>

            Leverage Buy Now Pay Later model to <br/><br/>

            <ul>
              <li>Get a higher price for your NFT</li><br/>
              <li>Increase the chances of finding a Buyer for your NFT Art</li> {/*Blockchain */}
            </ul>

            <br/>

            In case of default, get your NFT back with the downpayment. 
              
            </p>

          </div>
          <div className="s6-image-wrapper">
            <div>
              <img
                src="assets/img/Lender.png"
                className="s3-box-image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
