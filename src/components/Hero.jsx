import React from "react";
import heroimg from "../assets/hero-img.png";

function Hero(changePage) {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <p>DISCOVER YOUR SIGNATURE SCENT </p>
        <h1>A Fragrance That Tells Your Story</h1>
        <p>
          Explore our collection of elegant fragrances crafted to become part of
          your story.
        </p>
        <button
          onClick={() => {
            document.getElementById("collections").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Explore Collection →
        </button>
      </div>
      <div className="hero-img">
        <img src={heroimg} alt="" />
      </div>
    </div>
  );
}
export default Hero;
