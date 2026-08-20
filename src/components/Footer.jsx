import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <div className="footer-content">
        <div className="footer-about">
          <img src={logo} alt="Scents and Souls" className="footer-logo" />

          <p>
            Fragrance is more than a scent.
            <br />
            It is a part of your story.
          </p>

          <div className="footer-symbol">✦</div>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>

          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#collections">Collections</a>
          <a href="#">User Portal</a>
        </div>

        <div className="footer-contact">
          <h3>Get In Touch</h3>

          <p>scents&souls@gmail.com</p>
          <p>+92 300 1234567</p>

          <p className="footer-location">
            Made with passion for fragrance lovers.
          </p>
        </div>
      </div>

      <div className="copyright">
        <span>© 2026 Scents & Souls</span>
        <span>All Rights Reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
