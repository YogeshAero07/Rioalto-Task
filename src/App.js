import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Popular from "./Components/Popular";
import TV_Series from "./Components/TV_Series";
import Movies from "./Components/Movies";
import Profile from "./Components/Profile";
import Setting from "./Components/Setting";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/navbar" element={<Navbar />}>
            <Route path="home" element={<Home />} />
            <Route path="popular" element={<Popular />} />
            <Route path="tv-series" element={<TV_Series />} />
            <Route path="movies" element={<Movies />} />
            <Route path="profile" element={<Profile />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
