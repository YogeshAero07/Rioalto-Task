import React from "react";
import "./Header.css";

// Image imports
import logo from "../Images/Img1.jpg";
import header_search from "../Images/header_search.svg";
import notification_img from "../Images/notification.svg";
import cloud from "../Images/cloud.svg";

const Header = () => {
  return (
    <div className="header_main">
      <div className="header_left">
        <div className="header_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="header_text">
          <h4>Hi, Hare Pig</h4>
          <h6>how do you feel today?</h6>
        </div>
      </div>

      <div className="header_right">
        <div className="header_search">
          <img src={header_search} alt="search" />
          <input placeholder="What movie do you want to watch?" />
        </div>

        <div className="header_notification">
          <img src={notification_img} alt="#" />
        </div>

        <div className="header_weather">
          <img src={cloud} alt="cloud" />
          <div className="weather_text">
            <h4>32 C</h4>
            <h6>Pune, India</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
