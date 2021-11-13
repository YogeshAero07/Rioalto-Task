import React from "react";
import "./Navbar.css";
// import Home from "./Home";
// import Setting_img from "@mui/icons-material/Settings";

import { Link } from "react-router-dom";

// Images Import
import Home_Img from "../Images/Home_img.svg";
import Popular_img from "../Images/Popular_img.svg";
import TV_Series_img from "../Images/TV_Series_img.svg";
import Movies_img from "../Images/Movies_img.svg";
import Profile_img from "../Images/Profile_img.svg";
import Setting_img from "../Images/Setting_img.svg";

const Navbar = () => {
  return (
    <div className="navbar_main">
      <div className="nav_left">
        <div className="navbar_top">
          <li>
            <Link to="home" activeClassName="active">
              <img src={Home_Img} alt="Home" />
              <p>Home</p>
            </Link>
          </li>

          <li>
            <Link to="/popular" activeClassName="active">
              <img src={Popular_img} alt="Popular" />
              <p>Popular</p>
            </Link>
          </li>

          <li>
            <Link to="/tv-series" activeClassName="active">
              <img src={TV_Series_img} alt="TV Series" />
              <p>TV Series</p>
            </Link>
          </li>

          <li>
            <Link to="/movies" activeClassName="active">
              <img src={Movies_img} alt="Movies" />
              <p>Movies</p>
            </Link>
          </li>

          <li>
            <Link to="/profile" activeClassName="active">
              <img src={Profile_img} alt="Profile" />
              <p>Profile</p>
            </Link>
          </li>
        </div>

        <div className="navbar_bottom">
          <li>
            <Link to="/setting" activeClassName="active">
              <img src={Setting_img} alt="Setting" />
              <p>Setting</p>
            </Link>
          </li>
        </div>
      </div>

      <div className="nav_right"></div>
    </div>
  );
};

export default Navbar;
