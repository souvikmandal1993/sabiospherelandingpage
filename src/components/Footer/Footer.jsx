import "./Footer.scss";

import { motion } from "framer-motion";

import Container from "../common/Container/Container";

const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M4 5h16v14H4z M4 6l8 6 8-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PhoneIcon = () => (
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
);

const Footer = ({ footer }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {footer.cta && (
        <div className="footer__cta">
          <Container>
            <motion.div
              className="footer__cta-inner"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="footer__cta-title">
                <span>{footer.cta.highlight}</span> {footer.cta.title}
              </h2>

              {footer.cta.subtitle && (
                <p className="footer__cta-subtitle">{footer.cta.subtitle}</p>
              )}

              <a
                href={footer.cta.buttonHref || "#contact"}
                className="footer__cta-btn"
              >
                {footer.cta.buttonLabel}
              </a>
            </motion.div>
          </Container>
        </div>
      )}

      <div className="footer__bottom">
        <Container>
          <div className="footer__bottom-inner">
            <span className="footer__copyright">
              Copyright © {year} {footer.copyright}
            </span>

            <div className="footer__contact">
              {footer.email && (
                <a href={`mailto:${footer.email}`}>
                  <MailIcon />
                  {footer.email}
                </a>
              )}

              {footer.phone && (
                <a href={`tel:${footer.phone.replace(/\s/g, "")}`}>
                  <PhoneIcon />
                  {footer.phone}
                </a>
              )}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
