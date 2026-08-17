import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <nav className="header">
      <img className="logo" src={logo} alt="Scents & Souls" />
      <div>
        <a>Home </a>
        <a>User portal</a>
        <a>🛒 cart</a>
      </div>
      <div>
        <button className="admin-login"> Login</button>
      </div>
    </nav>
  );
}

export default Header;
