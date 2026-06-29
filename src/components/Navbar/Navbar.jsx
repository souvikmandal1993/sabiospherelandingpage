import "./Navbar.scss";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const Navbar = ({ brand, nav }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className={`navbar ${scrolled || menuOpen ? "navbar--scrolled" : ""}`}
    >
      <div className="navbar__container">
        <a href="#" className="navbar__logo">
          {brand.logo ? (
            <img src={brand.logo} alt={brand.name} className="navbar__logo-img" />
          ) : (
            brand.name
          )}
        </a>

        <nav className={menuOpen ? "navbar__nav--open" : ""}>
          {nav.items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          {nav.phone && (
            <a
              href={`tel:${nav.phone.replace(/\s/g, "")}`}
              className="navbar__phone"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L16 13l5 2v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {nav.phone}
            </a>
          )}

          <button
            className="navbar__toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
