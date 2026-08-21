import React, { useState } from "react";
import logo from "../assets/logo.png";
import { supabase } from "../supabaseClient";

function Header({ cart, changePage, page, user }) {
  const [menuOpen, setMenuOpen] = useState(false);

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(error.message);
      return;
    }

    changePage("home");
    setMenuOpen(false);
  }

  function goTo(pageName) {
    changePage(pageName);
    setMenuOpen(false);
  }

  return (
    <nav className="header">
      <div className="header-logo-wrap">
        <img
          className="logo"
          src={logo}
          alt="Scents & Souls"
          onClick={() => goTo("home")}
        />
      </div>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${menuOpen ? "menu-open" : ""}`}>
        <a
          className={page === "home" ? "active" : ""}
          onClick={() => goTo("home")}
        >
          Home
        </a>

        <a
          className={page === "about" ? "active" : ""}
          onClick={() => goTo("about")}
        >
          About Us
        </a>

        <a
          className={page === "admin-login" || page === "admin" ? "active" : ""}
          onClick={() => goTo(user ? "admin" : "admin-login")}
        >
          User Portal
        </a>

        <a
          className={`cart-link ${page === "cart" ? "active" : ""}`}
          onClick={() => goTo("cart")}
        >
          <span className="cart-icon">🛒</span>
          Cart
          <span className="cart-count">{cart.length}</span>
        </a>

        {/* Login / Logout inside hamburger */}
        {user ? (
          <button className="admin-login mobile-login" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button
            className="admin-login mobile-login"
            onClick={() => goTo("admin-login")}
          >
            Login
          </button>
        )}
      </div>

      {/* Desktop Login / Logout */}
      <div className="header-account">
        {user ? (
          <button className="admin-login" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button
            className="admin-login"
            onClick={() => goTo("admin-login")}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Header;