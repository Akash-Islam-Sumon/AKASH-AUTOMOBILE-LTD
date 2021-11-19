import React from "react";
import "./Banner.css";
import Fade from "react-reveal/Fade";

const Banner = () => {
  return (
    <div className="banner">
      <div className="conatiner">
        <div className="row">
          <div className="col-md-5 banner-text">
            <Fade left>
              <h3 style={{ margin: 0, padding: "0" }}>
                Lorem ipsum dolor sit amet{" "}
              </h3>
            </Fade>
            <Fade right>
              <h3>consectetur</h3>
            </Fade>
            <h6>
              {" "}
              adipisicing elit. Excepturi at praesentium quas sit dolorum. Nam,
              magni reiciendis. Corporis cum accusantium asperiores? Quia
              numquam consectetur nostrum quasi, officia dolor laboriosam
              veritatis.
            </h6>

            <br />
            <button>Explore</button>
          </div>
          <div className="col-md-7"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
