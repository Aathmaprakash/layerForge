// Services.js
import React from "react";
import "./Services.css";

const services = [
  {
    title: "Rapid Prototyping",
    desc: "Transform your CAD files into physical prototypes in as little as 24 hours.",
    icon: "⚡",
    badges: ["24-48hr Delivery", "High Accuracy", "Cost-Effective"],
  },
  {
    title: "Custom Manufacturing",
    desc: "Low-volume production runs for startups and custom products.",
    icon: "🛠️",
    badges: ["Flexible Volumes", "Strong Materials", "Multiple Finishes"],
  },
  {
    title: "Art, Jewelry & Models",
    desc: "Create unique designs with fine detail and smooth finishes.",
    icon: "💎",
    badges: ["High Detail", "Multiple Colors", "Eco-Friendly"],
  },
  {
    title: "Architectural Models",
    desc: "Bring your buildings to life with precise scale models.",
    icon: "🏛️",
    badges: ["Scale Accuracy", "Textured Surfaces", "Custom Colors"],
  },
  {
    title: "Educational Printing",
    desc: "3D models for classrooms, training, and research projects.",
    icon: "📚",
    badges: ["Durable Prints", "Safe Materials", "Detailed Parts"],
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services__container">
        
        <h2 className="services__title">What We Do</h2>
        
        <p className="services__subtitle">
          From rapid prototyping to custom designs, we deliver professional 3D printing solutions tailored to your needs.
        </p>

        <div className="services__grid">
          {services.map((srv, i) => (
            <div className="service-card" key={i}>
              <div className="service-card__icon">{srv.icon}</div>
              <h3 className="service-card__title">{srv.title}</h3>
              <p className="service-card__desc">{srv.desc}</p>
              <ul className="service-card__badges">
                {srv.badges.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
