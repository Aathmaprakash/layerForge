// Home.js
import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Smooth scroll to Contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      {/* Background Image with Overlay */}
      <div className="background-wrapper">
        <div className="background-image" />
        <div className="overlay-gradient" />
        <div className="overlay-vertical" />
      </div>

      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="container">
          <div className="content-wrapper">

            {/* Brand Name */}
            <div className={`brand-section ${isVisible ? 'visible' : ''}`}>
              <h1 className="brand-title">
                Layer<span className="brand-accent">Forge</span>
              </h1>
              <div className="brand-underline" />
            </div>

            {/* Hero Title */}
            <div className={`hero-title-section ${isVisible ? 'visible delay-300' : ''}`}>
              <h2 className="hero-title">
                Turning <span className="imagination-text">Imagination</span>
                <br />
                into <span className="reality-text">Tangible Reality</span>
              </h2>
            </div>

            {/* Subtitle */}
            <div className={`subtitle-section ${isVisible ? 'visible delay-500' : ''}`}>
              <p className="subtitle">
                From rapid prototypes to engineering-grade parts, we help makers and teams 
                move from <span className="highlight-text">idea to object</span> with precision and speed.
              </p>
            </div>

            {/* Action Buttons */}

            {/* Scroll Indicator */}
            <div className={`scroll-indicator ${isVisible ? 'visible delay-1100' : ''}`}>
              <div className="scroll-content">
                <span className="scroll-text">Scroll to explore</span>
                <div className="scroll-mouse">
                  <div className="scroll-dot" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="deco-circle-large" />
      <div className="deco-circle-small" />

      {/* Side Brand Element */}
      <div className="side-brand">
        PRECISION • CREATIVITY • INNOVATION
      </div>
    </div>
  );
};

export default Home;
