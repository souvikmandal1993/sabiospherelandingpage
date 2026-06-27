import "./Solutions.scss";

import { motion } from "framer-motion";

import Container from "../common/Container/Container";
import AnimatedTitle from "../common/AnimatedTitle/AnimatedTitle";

// Load every solution icon once; key them by file name (without extension).
const iconModules = import.meta.glob("../../assets/icons/solutions/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
});

const icons = Object.fromEntries(
  Object.entries(iconModules).map(([path, url]) => [
    path.split("/").pop().replace(".svg", ""),
    url,
  ])
);

const Solutions = ({ data }) => {
  if (!data?.items?.length) return null;

  return (
    <section className="solutions section" id="solutions">
      <Container>
        <AnimatedTitle as="h2" className="solutions__title" text={data.title} />

        <div className="solutions__grid">
          {data.items.map((item, index) => (
            <motion.div
              key={item.label}
              className="solutions__item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 5) * 0.05 }}
            >
              <span className="solutions__icon">
                <img src={icons[item.icon]} alt="" aria-hidden="true" />
              </span>

              <p className="solutions__label">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {data.cta && (
          <div className="solutions__cta-wrap">
            <a href={data.ctaHref || "#contact"} className="solutions__cta">
              {data.cta}
            </a>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Solutions;
