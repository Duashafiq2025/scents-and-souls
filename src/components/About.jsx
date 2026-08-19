import React from "react";

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <p className="about-subtitle">ABOUT US</p>

        <h1>Discover Your Signature Scent</h1>

        <p>
          We believe that a fragrance is more than just a perfume. It is a way
          to express your personality, mood, and style.
        </p>

        <p>
          Our collection brings together beautiful fragrances made for every
          occasion. From fresh and elegant scents to rich and unforgettable
          aromas, there is something for everyone.
        </p>

        <button > Explore Collection</button>
      </div>

      <div className="about-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmSZH35nXI_zx1GClT--UVUGLzE9dKmOXHMSUf4BNlyQ&s=10"
          alt="Perfume bottles"
        />
      </div>
    </section>
  );
}

export default About;
