import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Flights } from "./components/Flights";
import { BookATrip } from "./components/BookATrip";
import "./defaults.css";
import { Header } from "./components/reusable-components/Header";
import FollowCursor from "./components/reusable-components/FollowCursor";

function App() {
  const [animationPage, setAnimationPage] = useState();

  return (
    <div className="wrapper">
      <FollowCursor />
      <BrowserRouter>
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
