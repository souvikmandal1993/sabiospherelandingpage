import "./Footer.scss";

import Container from "../common/Container/Container";

const Footer = ({ brand, nav, footer }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <div className="footer__brand">
            <h3>{brand.name}</h3>
            <p>{footer.description}</p>
          </div>

          <nav className="footer__nav">
            {nav.items.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer__socials">
            {footer.socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {footer.copyright}
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
