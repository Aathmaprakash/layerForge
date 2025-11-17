import React from "react";
import "./AboutUs.css";
import aboutImage from "../../asserts/abtus.png";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        {/* Header Section */}
        <div className="about__header">
          <span className="about__eyebrow">Our Story</span>
        <h2 className="about__title">
  <span className="navbar__thin">Pioneering Innovation</span>{" "}
</h2>
          <p className="about__subtitle">
            Where cutting-edge technology meets creative vision, transforming 
            ideas into tangible reality through precision 3D printing solutions.
          </p>
        </div>

        {/* Main Grid */}
        <div className="about__grid">
          {/* Content Section */}
          <div className="about__content">
            <h3 className="about__section-title">Excellence in Every Layer</h3>
            <ul className="about__features">
              <li>Advanced multi-material printing capabilities</li>
              <li>Lightning-fast turnaround with zero compromise on quality</li>
              <li>Full-service design consultation and optimization</li>
              <li>Industry-leading precision and surface finishing</li>
              <li>Sustainable materials and eco-friendly processes</li>
            </ul>

            {/* Stats */}
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">1000+</span>
                <span className="about__stat-label">Projects Delivered</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">8+</span>
                <span className="about__stat-label">Years Experience</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">99.5%</span>
                <span className="about__stat-label">Success Rate</span>
              </div>
            </div>

            {/* Values */}
            <div className="about__values">
              <span className="about__chip">Rapid Prototyping</span>
              <span className="about__chip">Quality Assurance</span>
              <span className="about__chip">24/7 Support</span>
            </div>
          </div>

          {/* Visual Section */}
          <div className="about__visual">
            <div className="about__image-container">
              <div className="about__image-glow"></div>
              <img
                src={aboutImage}
                alt="Advanced 3D printing technology and innovation"
                className="about__image"
                loading="lazy"
              />
            </div>
            <p className="about__caption">
              Transforming digital concepts into physical reality
            </p>
          </div>
        </div>

        {/* Trust Section */}
        <div className="about__trust">
          <p className="about__trust-label">
            Trusted by industry leaders and innovative startups worldwide
          </p>
          <div className="about__logos">
            <span title="Tech Innovators">⬢</span>
            <span title="Manufacturing Excellence">◉</span>
            <span title="Design Leaders">◆</span>
            <span title="Quality Partners">▲</span>
            <span title="Global Network">●</span>
          </div>
        </div>
      </div>
    </section>
  );
}