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
                src="assets/img/NFTs2.png"
                className="s3-box-image"
              />
            </div>
          </div>
          <div
            data-w-id="649dbab4-e00a-e03a-732f-5ed95dca54ab"
            className="s6-info-container"
          >
            <h2 className="h2 is-small-h2" style={{color: "#07071C"}}>Buy more | Earn more</h2>
            <p className="p is-s6-p">
              
              Now use BNPL to own more NFTs than ever!
              <br/><br/>

              Pay a downpayment to Reserve your NFT. 
              <br/><br/>

              Sell your reserved NFT when price increases to make a profitable exit.
            </p>

            {/* <a href="#" className="filled-button w-button">
              Buy Now
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}
