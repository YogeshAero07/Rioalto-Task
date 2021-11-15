import React from "react";
import "./Home.css";
import Luca from "../Images/Luca.jpeg";

const Home = () => {
  return (
    <div className="home_main">
      <img src={Luca} alt="Luca" />
    </div>
  );
};

export default Home;
