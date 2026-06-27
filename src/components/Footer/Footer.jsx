import "./Footer.scss";

import Container from "../common/Container/Container";

// Load social icons once, keyed by file name (e.g. "instagram").
const socialModules = import.meta.glob("../../assets/icons/social/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
});

const socialIcons = Object.fromEntries(
  Object.entries(socialModules).map(([path, url]) => [
    path.split("/").pop().replace(".svg", ""),
    url,
  ])
);

const Footer = ({ brand, footer }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <div className="footer__brand">
            {brand.logo ? (
              <img
                className="footer__logo"
                src={brand.logo}
                alt={brand.name}
              />
            ) : (
              <h3 className="footer__name">{brand.name}</h3>
            )}

            {footer.description && <p>{footer.description}</p>}

            <div className="footer__socials">
              {footer.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.platform}
                >
                  <img src={socialIcons[social.platform]} alt="" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="footer__columns">
            {footer.columns.map((column) => (
              <div key={column.title} className="footer__column">
                <h4>{column.title}</h4>

                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copyright">
            © {year} {footer.copyright}
          </span>

          <div className="footer__contact">
            {footer.email && (
              <a href={`mailto:${footer.email}`}>{footer.email}</a>
            )}

            {footer.phone && (
              <a href={`tel:${footer.phone.replace(/\s/g, "")}`}>
                {footer.phone}
              </a>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
