import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState(typeof window !== 'undefined' ? window.location.hash || '#home' : '#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    const handleResize = () => {
      if (window.innerWidth > 820) setOpen(false);
    };
    const handleHashChange = () => {
      setActiveHash(window.location.hash || '#home');
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleNavClick = (hash) => {
    setActiveHash(hash);
    setOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <div className="container">
        <div className="navbar__inner navbar__inner--pill">
          <div className="navbar__left">
            <button
              className="navbar__toggle"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              aria-controls="primary-navigation"
              onClick={() => setOpen((v) => !v)}
              type="button"
            >
              <span className="navbar__hamburger" />
            </button>

            <nav
              className={`navbar__nav navbar__nav--left ${open ? 'is-open' : ''}`}
              id="primary-navigation"
              aria-label="Primary"
            >
              <a
                className={`navbar__link ${activeHash === '#services' ? 'is-active' : ''}`}
                href="#services"
                onClick={() => handleNavClick('#services')}
              >
                Services
              </a>
              <a
                className={`navbar__link ${activeHash === '#about' ? 'is-active' : ''}`}
                href="#about"
                onClick={() => handleNavClick('#about')}
              >
                About
              </a>
              <a
                className={`navbar__link ${activeHash === '#footer' ? 'is-active' : ''}`}
                href="#footer"
                onClick={() => handleNavClick('#footer')}
              >
                Quote
              </a>
            </nav>
          </div>

          <a 
          href="#home" 
          aria-label="Go to homepage" 
          className="navbar__brand" 
          onClick={() => handleNavClick('#home')}
        >
          <span className="navbar__name">
            <span className="navbar__thin">Layer</span>
            <span className="navbar__bold">Forge</span>
          </span>
        </a>
        

          <div className="navbar__actions">
            <a className="btn btn--accent" href="#footer" onClick={() => handleNavClick('#footer')} aria-label="Start your project">
              Start Your Project
            </a>
          </div>
        </div>
      </div>

      <div
        className={`navbar__backdrop ${open ? 'is-visible' : ''}`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />
    </header>
  );
};

export default Navbar;
