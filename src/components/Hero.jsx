import React from "react";
import heroimg from "../assets/hero-img.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-glow"></div>

      <div className="hero-content">
        <div className="hero-label">
          <span></span>
          SCENTS & SOULS
          <span></span>
        </div>

        <h1>
           A Fragrance 
          <em>That Tells Your Story.</em>
        </h1>

        <p className="hero-description">
          Discover captivating fragrances crafted to become a part of your
          identity, your memories, and your most beautiful moments.
        </p>

        <button
          className="hero-button"
          onClick={() => {
            document.getElementById("collections")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Discover Your Scent
          <span>→</span>
        </button>

        <div className="hero-note">
          <span>✦</span>
          FIND THE FRAGRANCE THAT FEELS LIKE YOU
        </div>
      </div>

      <div className="hero-img">
        <div className="hero-image-glow"></div>

        <div className="hero-image-ring"></div>

        <img src={heroimg} alt="Scents & Souls fragrance collection" />

        <div className="hero-floating-text">
          <span>SCENTS</span>
          <span>& SOULS</span>
        </div>
      </div>

      <div className="hero-bottom">
        <span>01</span>
        <div></div>
        <span>FRAGRANCE • ELEGANCE • SOUL</span>
      </div>
    </section>
  );
}

export default Hero;