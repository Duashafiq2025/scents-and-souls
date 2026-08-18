import React from "react";
import logo from "../assets/logo.png";

function Header({ cart, changePage, page }) {
  return (
    <nav className="header">
      <img className="logo" src={logo} alt="Scents & Souls" />
      <div>
        <a onClick={() => changePage("home")}>Home </a>
        <a onClick={() => changePage("about")}>About us</a>
        <a>User portal</a>
        <a onClick={() => changePage("cart")}>🛒 cart ({cart.length})</a>
      </div>
      <div>
        <button className="admin-login"> Login</button>
      </div>
    </nav>
  );
}

export default Header;
