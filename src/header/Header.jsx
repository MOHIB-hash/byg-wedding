import React from "react";
import "./header.css";
import { useState } from "react";

const Header = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <header className="header-wrapper">
      <div className="top-bar">BYG Wedding Factory</div>

      <ul>
        <li>HOME</li>
        <li>WEDDING DRESSES</li>
        <li>PROM DRESS</li>
        <li>BRIDESMAID DRESSES</li>
        <li>SPECIAL OCCASION DRESSES</li>
        <li>WEDDING GUEST DRESSES</li>
        <li>READY TO SHIP</li>
        <li>COLOR SWATCH</li>
      </ul>
      <div>
        <input
          className="input"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type something..."
        />
        <p>You typed: {inputValue}</p>
      </div>
      <div className="image-section">
        <div className="image-left">
          <img src="/pic1.jpg" alt="#" />
        </div>
        <div className="image-right">
          <img src="/pic2.jpg" alt="#" />
        </div>
      </div>

      <div className="image-section">
        <div className="image-left">
          <img src="/pic3.jpg" alt="#" />
        </div>
        <div className="image-right">
          <img src="/pic4.jpg" alt="#" />
        </div>
      </div>

      <div className="image-section">
        <div className="image-left">
          <img src="/pic6.jpg" alt="#" />
        </div>
        <div className="image-right">
          <img src="/pic7.jpg" alt="#" />
        </div>
      </div>

      <div className="image-section">
        <div className="image-left">
          <img src="/pic6.jpg" alt="#" />
        </div>
        <div className="image-right">
          <img src="/pic7.jpg" alt="#" />
        </div>
      </div>

      <div className="image-section">
        <div className="image-left">
          <img src="/pic8.jpg" alt="#" />
        </div>
        <div className="image-right">
          <img src="/pic9.jpg" alt="#" />
        </div>
      </div>
    </header>
  );
};

export default Header;
