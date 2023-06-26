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
                        Welcome to our futuristic website! Discover a world
                        beyond imagination as we offer ticket booking services
                        for the ultimate adventure—journey to Mars. Step into a
                        realm of limitless possibilities and embark on a cosmic
                        odyssey.
                    </p>
                    <p className="home-para2">
                        Buckle up and let your dreams soar among the stars.
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
