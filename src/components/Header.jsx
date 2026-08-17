import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <nav className="header">
      <img className="logo" src={logo} alt="Scents & Souls" />
      <div>
        <a>Home </a>
        <a>User portal</a>
        <a>About us</a>
      </div>
      <div>
        <a>🛒 cart</a>
      </div>
    </nav>
  );
}

export default Header;
