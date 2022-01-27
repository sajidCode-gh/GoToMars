import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./price-card.css";

const PriceCard = () => {
  const [randomTime, setRandomTime] = useState("15");
  const handleRandomTime = () => {
    let randomize = Math.ceil(Math.random() * 24);
    setRandomTime(randomize);
  };
  return (
    <div className="price-cards">
      <div className="cards-group">
        <h2 className="card-title">Flight Time</h2>
        <div className="card-group">
          <div className="card" onClick={handleRandomTime}></div>
          <div className="card" onClick={handleRandomTime}></div>
          <div className="card" onClick={handleRandomTime}></div>
          <div className="card" onClick={handleRandomTime}></div>
        </div>
        <div className="card-group">
          <div className="card" onClick={handleRandomTime}></div>
          <div className="card" onClick={handleRandomTime}></div>
          <div className="card" onClick={handleRandomTime}></div>
          <div className="card" onClick={handleRandomTime}></div>
        </div>
        <div className="card-group">
          <div className="card" onClick={handleRandomTime}></div>
          <div className="card" onClick={handleRandomTime}></div>
          <div className="card" onClick={handleRandomTime}></div>
          <div className="card" onClick={handleRandomTime}></div>
        </div>
        <div className="card-group">
          <div className="card" onClick={handleRandomTime}></div>
          <div className="card" onClick={handleRandomTime}></div>
          <div className="card" onClick={handleRandomTime}></div>
          <div className="card" onClick={handleRandomTime}></div>
        </div>
      </div>
      <div className="time">{randomTime}:00 / Today</div>
      <Link to="/bookATrip" className="btn">
        Register
      </Link>
    </div>
  );
};

export default PriceCard;
