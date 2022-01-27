import {
  CheckBox,
  CheckBoxOutlineBlank,
  MemoryOutlined,
  PersonOutline,
  VpnKey,
} from "@material-ui/icons";
import React, { useRef, useState } from "react";
import "./book-a-trip.css";
export const BookATrip = () => {
  const [inputActive, setInputActive] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [value, setValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="book-a-trip">
      <div className="register" onMouseOver={() => setInputActive(true)}>
        <form action="#" onSubmit={handleSubmit}>
          <div className={inputActive ? "chip-id active" : "chip-id"}>
            <label htmlFor="number">
              <MemoryOutlined /> Chip ID
            </label>

            <input
              required
              type="number"
              value={value}
              onChange={() => setValue(value)}
            />
          </div>

          <div className={inputActive ? "country-code active" : "country-code"}>
            <label htmlFor="number">
              <VpnKey /> Country Code
            </label>
            <input
              required
              type="number"
              value={value}
              onChange={() => setValue(value)}
            />
          </div>

          <div className={inputActive ? "name active" : "name"}>
            <label htmlFor="Name">
              <PersonOutline /> Name
            </label>
            <input
              required
              type="text"
              value={value}
              onChange={() => setValue(value)}
            />
          </div>

          <div className="check-human">
            <input type="checkbox" />
            <span>I am Semi-Human</span>
          </div>

          <div className="register-btn">
            <button type="submit" className="btn">
              Submit
            </button>
            <span className="submitted">{submitted && <CheckBox />}</span>
          </div>
        </form>
      </div>
    </div>
  );
};
