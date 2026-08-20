
import React from "react";

function About() {
  return (
    <section className="about-page">


      <div className="about-hero">

        <div className="about-hero-content">
          <p className="about-label">ABOUT SCENTS & SOULS</p>

          <h1>
            A fragrance
            <span>that feels like you.</span>
          </h1>

          <div className="gold-line"></div>

          <p className="about-intro">
            At Scents & Souls, we believe fragrance is more than something
            you wear. It is a feeling, a memory, and a quiet expression of
            who you are.
          </p>

          <p>
            Every fragrance has its own personality. Some whisper softly,
            while others leave an unforgettable impression. We bring together
            scents designed to become a part of your story.
          </p>
        </div>

        <div className="about-hero-images">

          <div className="hero-main-image">
            <img
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=85"
              alt="Luxury perfume bottles"
            />
          </div>

          <div className="hero-small-image">
            <img
              src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=600&q=85"
              alt="Elegant fragrance bottle"
            />
          </div>

          <div className="gold-circle"></div>

        </div>

      </div>



      <div className="about-story">

        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=900&q=85"
            alt="Perfume and flowers"
          />

          <div className="story-image-frame"></div>
        </div>

        <div className="story-content">

          <p className="about-label">OUR STORY</p>

          <h2>
            More than a scent.
            <span>A feeling.</span>
          </h2>

          <p>
            Scents & Souls was created from a simple belief: the right
            fragrance can transform an ordinary moment into something
            unforgettable.
          </p>

          <p>
            A familiar scent can take you back to a beautiful memory.
            A new fragrance can give you confidence before an important
            moment. And sometimes, a particular aroma simply feels like home.
          </p>

          <p>
            That is what inspires us. We want every fragrance to feel
            personal — something that becomes part of your identity rather
            than simply another bottle on your shelf.
          </p>

          <div className="story-signature">
            <span>SCENTS & SOULS</span>
            <small>Where fragrance meets feeling.</small>
          </div>

        </div>

      </div>


      

      <div className="about-philosophy">

        <div className="philosophy-heading">
          <p className="about-label">THE ESSENCE</p>

          <h2>
            What makes a scent
            <span>memorable?</span>
          </h2>

          <p>
            We believe true beauty is found in the details — from the first
            impression to the final lingering note.
          </p>
        </div>

        <div className="philosophy-grid">

          <div className="philosophy-card">
            <span>01</span>
            <div className="philosophy-icon">✦</div>
            <h3>Expression</h3>
            <p>
              Your fragrance should reflect your personality, mood, and
              individual style.
            </p>
          </div>

          <div className="philosophy-card featured-card">
            <span>02</span>
            <div className="philosophy-icon">✧</div>
            <h3>Emotion</h3>
            <p>
              The most beautiful fragrances create emotions that remain long
              after the scent has faded.
            </p>
          </div>

          <div className="philosophy-card">
            <span>03</span>
            <div className="philosophy-icon">❋</div>
            <h3>Elegance</h3>
            <p>
              Timeless aromas, refined character, and an impression that
              never feels ordinary.
            </p>
          </div>

        </div>

      </div>



      <div className="about-showcase">

        <div className="showcase-text">
          <p className="about-label">THE ART OF FRAGRANCE</p>

          <h2>
            Leave a little
            <span>of yourself behind.</span>
          </h2>
        </div>

        <div className="showcase-image">
          <img
            src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1400&q=85"
            alt="Luxury perfume collection"
          />
        </div>

      </div>


     

      <div className="about-final">

        <div className="final-decoration">✦</div>

        <p className="about-label">SCENTS & SOULS</p>

        <h2>
          Every scent tells
          <span>a story.</span>
        </h2>

        <p>
          Yours is waiting to be discovered.
        </p>

      </div>

    </section>
  );
}

export default About;

