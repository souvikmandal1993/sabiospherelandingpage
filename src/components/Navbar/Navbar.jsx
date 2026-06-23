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
      className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${
        menuOpen ? "navbar--menu-open" : ""
      }`}
    >
      <div className="navbar__container">
        <a href="#" className="navbar__logo">
          {brand.name}
        </a>

        <nav>
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

        <a href="#contact" className="navbar__cta">
          {nav.cta}
        </a>

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
    </motion.header>
  );
};

export default Navbar;
