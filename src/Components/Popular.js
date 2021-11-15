import React from "react";
import "./Popular.css";
import poster1 from "../Images/poster1.jpg";
import poster2 from "../Images/poster2.jpg";
import poster3 from "../Images/poster3.jpg";
import poster4 from "../Images/poster4.jpg";
import poster5 from "../Images/poster5.jpg";

import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Popular = () => {
  return (
    <div className="popular_main">
      <div className="pop">
        <div className="popular_top">
          <img src={poster1} alt="poster1" />
        </div>

        <div className="popular_bottom">
          <h3>Altred</h3>
          <label>
            <p>
              <AccessTimeIcon />
            </p>
            <h4>120 minutes</h4>
          </label>
        </div>
      </div>

      <div className="pop">
        <div className="popular_top">
          <img src={poster2} alt="poster2" />
        </div>

        <div className="popular_bottom">
          <h3>Wanda Vision</h3>
          <label>
            <p>
              <AccessTimeIcon />{" "}
            </p>
            <h4>90 minutes</h4>
          </label>
        </div>
      </div>

      <div className="pop">
        <div className="popular_top">
          <img src={poster3} alt="poster3" />
        </div>

        <div className="popular_bottom">
          <h3>Star Trek</h3>
          <label>
            <p>
              <AccessTimeIcon />
            </p>
            <h4>160 minutes</h4>
          </label>
        </div>
      </div>

      <div className="pop">
        <div className="popular_top">
          <img src={poster4} alt="poster4" />
        </div>

        <div className="popular_bottom">
          <h3>High Town</h3>
          <label>
            <p>
              <AccessTimeIcon />
            </p>
            <h4>50 minutes</h4>
          </label>
        </div>
      </div>

      <div className="pop">
        <div className="popular_top">
          <img src={poster5} alt="poster5" />
        </div>

        <div className="popular_bottom">
          <h3>Stranger Things</h3>
          <label>
            <p>
              <AccessTimeIcon />
            </p>
            <h4>150 minutes</h4>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Popular;
