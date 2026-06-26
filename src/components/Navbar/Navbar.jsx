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
