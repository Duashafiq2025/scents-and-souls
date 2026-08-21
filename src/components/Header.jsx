import React from "react";
import logo from "../assets/logo.png";
import { supabase } from "../supabaseClient";

function Header({ cart, changePage, page, user }) {
  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(error.message);
      return;
    }

    changePage("home");
  }

  return (
    <nav className="header">
      <div className="header-logo-wrap">
        <img
          className="logo"
          src={logo}
          alt="Scents & Souls"
          onClick={() => changePage("home")}
        />
      </div>

      <div className="nav-links">
        <a
          className={page === "home" ? "active" : ""}
          onClick={() => changePage("home")}
        >
          Home
        </a>

        <a
          className={page === "about" ? "active" : ""}
          onClick={() => changePage("about")}
        >
          About Us
        </a>
        <a
          className={page === "admin-login" || page === "admin" ? "active" : ""}
          onClick={() => changePage(user ? "admin" : "admin-login")}
        >
          User Portal
        </a>

        <a
          className={`cart-link ${page === "cart" ? "active" : ""}`}
          onClick={() => changePage("cart")}
        >
          <span className="cart-icon">🛒</span>
          Cart
          <span className="cart-count">{cart.length}</span>
        </a>
      </div>

      <div className="header-account">
        {user ? (
          <button className="admin-login" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button
            className="admin-login"
            onClick={() => changePage("admin-login")}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Header;
