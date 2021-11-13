import "./LandingPage.css";
import Navbar from "./Navbar";
import Content from "./Content";
import Header from "./Header";
import Img1 from "../Images/Img1.jpg";
import Img2 from "../Images/Img2.png";
import Img3 from "../Images/Img3.jpg";

const LandingPage = () => {
  return (
    <div className="App">
      <div className="app_top">
        <Header />
      </div>

      <div className="app_middle">
        <div className="Navbar">
          <Navbar />
        </div>
      </div>

      <div className="app_bottom">
        <div className="poster_stars">
          <p>Stars</p>
          <div className="stars_info">
            <label>
              <img src={Img1} alt="photo" />
              <div>
                <h4>Jacob Trambley</h4>
                <h5>Voice</h5>
              </div>
            </label>

            <label>
              <img src={Img2} alt="photo" />
              <div>
                <h4>Jack stanlet gazer</h4>
                <h5>Voice</h5>
              </div>
            </label>

            <label>
              <img src={Img3} alt="photo" />
              <div>
                <h4>Jacob Trambley</h4>
                <h5>Voice</h5>
              </div>
            </label>
          </div>
        </div>

        <div className="watch_button">
          <button>Watch Now</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
