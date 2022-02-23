import React from "react";
import { Header } from "./reusable-components/Header";
import "./home.css";
import { Link } from "react-router-dom";
export const Home = ({ animationPage }) => {
  console.log(animationPage);
  return (
    <div className="home">
      <div className="home-content container">
        <div className="home-text">
          <h1 className="home-title">Introduction</h1>
          <p className="home-para1">
            The scientific reasons for going to Mars can be summarised by the
            search for life, understanding the surface and the planet's
            evolution, and preparing for future human exploration.
          </p>
          <p className="home-para2">
            Understanding whether life existed elsewhere in the Universe beyond
            Earth is a fundamental question of humankind.
          </p>
        </div>
        <Link to="/BookATrip" className="btn">
          Book A Trip
        </Link>
      </div>

      <div className="circles">
        <div className="circle"></div>
      </div>
    </div>
  );
};
