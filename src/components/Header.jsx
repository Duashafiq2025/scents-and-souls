import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <nav className="header">
      <img className="logo" src={logo} alt="Scents & Souls" />
      <div>
        <a>About </a>
        <a>Home</a>
        <a>Collections</a>
        <a>Contact us</a>
      </div>
      <div className="left-section">
        <div className="search-box">
          <input type="text" placeholder="Search perfumes..." />
         <button>🔍</button>
        </div>
        <a> ♡</a>
        <a>🛒</a>
      </div>
    </nav>
  );
}

export default Header;
