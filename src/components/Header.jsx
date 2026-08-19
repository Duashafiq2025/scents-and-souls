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
      <img className="logo" src={logo} alt="Scents & Souls" />

      <div>
        <a onClick={() => changePage("home")}>Home</a>

        <a onClick={() => changePage("about")}>About us</a>

        <a>Collections</a>

        <a onClick={() => changePage("cart")}>🛒 cart ({cart.length})</a>
      </div>

      <div>
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
