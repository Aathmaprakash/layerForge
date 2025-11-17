import React, { useState } from "react";
import "./Footer.css"; // Importing external CSS

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="footer-container">
      <div className="decorative-element"></div>
      <div className="decorative-element2"></div>

      <div className="company-name">LAYERFORGE</div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="contact-content">

          {/* MAIN CONTACT INFO */}
          <div className="contact-info">
            <h2 className="contact-title">Let's Work Together</h2>
            <p className="contact-subtitle">
              Have a project in mind? Let's bring your ideas to life with precision LAYERFORGE!
            </p>

            {/* Added Contact Details */}
            <div className="company-contact-details">
              <p className="contact-detail"><strong>📞 Mobile:</strong> +91 9876543210</p>
              <p className="contact-detail"><strong>📧 Email:</strong> support@layerforge.com</p>
            </div>

            <div className="nav-grid">
              <div className="nav-column">
                <h4 className="nav-header">Explore</h4>
                <a href="#home" className="nav-link">Home</a>
                <a href="#about" className="nav-link">About Us</a>
                <a href="#services" className="nav-link">Services</a>
                <a href="#portfolio" className="nav-link">Portfolio</a>
              </div>

              <div className="nav-column">
                <h4 className="nav-header">Resources</h4>
                <a href="#materials" className="nav-link">Materials</a>
                <a href="#pricing" className="nav-link">Pricing</a>
                <a href="#quote" className="nav-link highlight-link">Get Quote</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone (optional)"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>

        </div>
      </div>

      {/* Brand Section */}
      <div className="brand-section">
        <div className="logo navbar__name">
          <span className="navbar__thin">Layer</span>
          <span className="navbar__bold">Forge</span>
        </div>
        <div className="tagline">
          Precision 3D Printing for Your Next Innovation
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <div className="copyright">
          © 2025 LayerForge. All rights reserved.
        </div>
        <div className="footer-links">
          <a href="#privacy" className="footer-link">Privacy Policy</a>
          <a href="#terms" className="footer-link">Terms of Service</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
