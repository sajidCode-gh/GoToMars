import React from "react";
import { Header } from "./reusable-components/Header";
import "./home.css";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="home">
      <div className="home-content container">
        <div className="home-text">
          <h1 className="home-title">Introduction</h1>
          <p className="home-para1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium enim alias esse neque sunt quaerat iure facere magnam
            repellat molestiae ducimus, pariatur vel facilis? Facilis laudantium
            deserunt ut nulla maiores?
          </p>
          <p className="home-para2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos alias
            tempore dolor vitae ea, totam consectetur voluptas a distinctio
            dolorem!
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
