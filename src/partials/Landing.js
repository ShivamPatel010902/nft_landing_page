import React from "react";
import "./styles/Landing.scss";

export default function Landing() {
  return (
    <>
      <div className="hero-wrapper landing">
        <div className="hero-info-container">
          <div className="hero-info">
            <h1 className="h1">
              <span className="gtext">GEAR UP</span>
              <br />
              <span className="gtext"> YOUR NFT</span>
              <br />
              <span className="gtext"> PURCHASE</span>
            </h1>

            <div className="hero-buttons-container">
              <a
                href="https://discord.com/invite/PJp2DbX64U"
                className="filled-button is-filled-hero-button w-button"
                style={{
                  position: "relative",
                }}
              >
                Join Discord
              </a>
              {/* <a
                href="https://discord.gg/Auqs3tGryT"
                className="filled-button is-filled-hero-button w-button"
                style={{
                  position: "relative",
                }}
              >
                Go to Docs
              </a> */}
            </div>
          </div>
        </div>
        <div className="flicker-text-container">
          <div className="flicker-text">
            <h1 class="neon" data-text="U">
              <span class="flicker-1">G</span>
              <span class="flicker-2">E</span>
              <span>A</span>
              <span class="flicker-4">R</span>
            </h1>
          </div>
          <span className="gear-box ">
            <i class="gear-1 gear fa fa-gear"></i>
            <i class="gear-2  gear fa fa-cog"></i>
          </span>
        </div>
      </div>
    </>
  );
}
