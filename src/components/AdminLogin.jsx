import React, { useState } from "react";
import { supabase } from "../supabaseClient";

function AdminLogin({ changePage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        alert(error.message);
        return;
      }

      alert("Account created successfully!");
      setIsSignUp(false);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    changePage("admin");
  }

  return (
    <div className="admin-login-page">
      <h1>{isSignUp ? "Admin Sign Up" : "Admin Login"}</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button className="submit-btn">{isSignUp ? "Sign Up" : "Login"}</button>
      </form>

      <p>
        {isSignUp ? "Already have an account?" : "Don't have an account?"}

        <button className="toggle-btn" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? "Login" : "Sign Up"}
        </button>
      </p>
    </div>
  );
}

export default AdminLogin;
