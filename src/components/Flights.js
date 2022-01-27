import React from "react";
import { Header } from "./reusable-components/Header";
import "./flight.css";
import PriceCard from "./reusable-components/PriceCard";
export const Flights = () => {
  return (
    <div className="flights">
      <div className="flight-cards">
        <PriceCard />
      </div>
    </div>
  );
};
