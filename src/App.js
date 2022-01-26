import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Flights } from "./components/Flights";
import { BookATrip } from "./components/BookATrip";
import "./defaults.css";
import { Header } from "./components/reusable-components/Header";
import FollowCursor from "./components/reusable-components/FollowCursor";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <FollowCursor />
        <Header />
        <Routes>
          <Route path="GoToMars" element={<Home />} />
          <Route path="flights" element={<Flights />} />
          <Route path="bookATrip" element={<BookATrip />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
