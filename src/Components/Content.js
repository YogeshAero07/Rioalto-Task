import React from "react";
import "./Content.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Luca from "../Images/Luca.jpeg";
import star from "../Images/star.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import Home from "./Home";
import Popular from "./Popular";
import TV_Series from "./TV_Series";
import Movies from "./Movies";
import Profile from "./Profile";
import Setting from "./Setting";

const Content = () => {
  return (
    <div className="content_main">
      <div className="content_top">
        {/* <img src={Luca} alt="Luca" /> */}
        <Routes>
          <Route path="/navbar" element={<Navbar />}>
            <Route path="home" element={<Home />} />
            <Route path="popular" element={<Popular />} />
            <Route path="tv-series" element={<TV_Series />} />
            <Route path="movies" element={<Movies />} />
            <Route path="profile" element={<Profile />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Routes>
      </div>

      <div className="poster_slider">
        <h1>HIIIIIII</h1>
      </div>

      <div className="content_bottom">
        <div className="poster_left">
          <div className="poster_title">
            <h3>Luca</h3>
          </div>

          <div className="poster_info">
            <p>2021</p>

            <label>
              <FiberManualRecordIcon />
            </label>

            <h6>Animation, Adventure</h6>

            <label>
              <FiberManualRecordIcon />
            </label>

            <h6>120 minute</h6>
          </div>

          <div className="poster_rating">
            <div className="rating_star">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <p>5.0 (135 votes)</p>
          </div>
        </div>

        <div className="poster_right">
          <p>
            This information shows whatever the latest things here discuss that
            relates to luca poster This information shows whatever the latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
