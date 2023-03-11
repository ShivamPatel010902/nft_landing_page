import React from "react";
import "./styles/Responsive.scss";
import "./styles/team.css"


export default function VersatileToken() {
  return (
    <>
      <div className="s6" style={{ backgroundColor: "white" }}>
        <div className="s6-container">
          <div className="blog_post">
            <div className="blog_img_pod">
              <img
                className="blog_img"
                src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
                alt="random image"
              />
            </div>
            <div className="blog_container_copy">
              <h3 className="blog_h3">12 January 2019</h3>
              <h1 className="blog_h1">CSS Positioning</h1>
              <p className="blog_p">
                The position property specifies the type of positioning method used for an
                element (static, relative, absolute, fixed, or sticky).
              </p>
              <a className="blog_btn_primary" href="#" target="_blank">
                Read More
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
