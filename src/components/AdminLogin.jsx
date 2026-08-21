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
      <div className="admin-login-card">
        <div className="admin-login-icon">✦</div>

        <p className="admin-label">SCENTS & SOULS</p>

        <h1>{isSignUp ? "Create Account" : "Welcome Back"}</h1>

        <p className="admin-subtitle">
          {isSignUp
            ? "Create your account to manage your collection."
            : "Sign in to access your admin dashboard."}
        </p>

        <form onSubmit={handleLogin}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <button className="submit-btn" type="submit">
            {isSignUp ? "Create Account" : "Sign In"}
            <span>→</span>
          </button>
        </form>

        <div className="login-divider">
          <span></span>
          <i>✦</i>
          <span></span>
        </div>

        <p className="account-text">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}

          <button className="toggle-btn" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Sign In" : "Create Account"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
