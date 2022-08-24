import React from "react";
import "./loader.css";
import Earth from "./earth.png";
import EarthUnComplete from "./earth-uncomplete.png";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
const Loader = ({ notfound }) => {
  return notfound ? (
    <section className="notfound-container">
      <div className="notfound">
        <div className="notfound-img">
          <img src={EarthUnComplete} alt="earth-3D" />
        </div>
        <div className="notfound-content">
          <h2>
            unfortunetly the country you looking for haven’t been discovered yet
          </h2>
          <h3>We Encourge you to back to your home safely</h3>
          <Link to="/" className="home-link">
            <ImHome />
            <span>Back</span>
          </Link>
        </div>
      </div>
    </section>
  ) : (
    <section className="loader-container">
      <img src={Earth} alt="earth-3D" className="loading-img" />
    </section>
  );
};

export default Loader;
