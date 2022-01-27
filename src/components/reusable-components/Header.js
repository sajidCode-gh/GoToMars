import { MusicNote, MusicOff } from "@material-ui/icons";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import soundFile from "../../stars.mp3";
import "./header.css";

export const Header = () => {
  const [music, setMusic] = useState(false);
  const [menu, setMenu] = useState(false);

  const audRef = useRef(music);

  useEffect(() => {
    music ? audRef.current.play() : audRef.current.pause();
  }, [music]);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="header container">
      <header>
        <div className="logo" onClick={handleMenu}>
          <div className="menu-icon active">
            <div className="menu-bar"></div>
          </div>
          <h1>GoToMars</h1>
        </div>

        <nav className={menu ? "active" : ""}>
          <ul className="nav-list">
            <li className="list-item" onClick={handleMenu}>
              <NavLink to="GoToMars">01 HOME</NavLink>
            </li>
            <li className="list-item" onClick={handleMenu}>
              <NavLink to="/flights">02 FLIGHT</NavLink>
            </li>
            <li className="list-item" onClick={handleMenu}>
              <NavLink to="/bookATrip">03 BOOK TICKET</NavLink>
            </li>
          </ul>

          <div className="music-icon" onClick={() => setMusic(!music)}>
            {music ? <MusicNote /> : <MusicOff />}
          </div>
          <div className="date">2130 yr</div>
          <audio loop ref={audRef}>
            <source src={soundFile} type="audio/mp3" />
          </audio>
        </nav>
      </header>
    </div>
  );
};
