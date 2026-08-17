import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <img src={logo} alt="Scents and Souls" className="footer-logo" />
          <p>Discover your signature scent.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">User Portal</a>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: scents&souls@gmail.com</p>
          <p>Phone: +92 300 1234567</p>
        </div>
      </div>

      <div className="copyright">
        © 2026 Scents & Souls. All Rights Reserved.
      </div>
    </footer>
  );
}
export default Footer;
