import "./WhyUs.scss";

import { motion } from "framer-motion";

import Container from "../common/Container/Container";
import AnimatedTitle from "../common/AnimatedTitle/AnimatedTitle";

const icons = {
  team: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 6a3 3 0 0 1 0 6M17 14a6 6 0 0 1 4 6" />
    </svg>
  ),
  palette: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-.95-.5-1.3-.3-.34-.5-.79-.5-1.2 0-1 .9-1.5 2-1.5h1.5A4 4 0 0 0 21 9.5C21 5.9 16.97 3 12 3Z" />
      <circle cx="7.5" cy="11" r="1" />
      <circle cx="10" cy="7.5" r="1" />
      <circle cx="14.5" cy="7.5" r="1" />
      <circle cx="17" cy="11" r="1" />
    </svg>
  ),
  award: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="9" r="6" />
      <path d="M9 14l-2 7 5-3 5 3-2-7" />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2Z" />
    </svg>
  ),
};

const WhyUs = ({ data }) => {
  if (!data?.items?.length) return null;

  return (
    <section className="why-us section" id="why-us">
      <Container>
        <div className="why-us__head">
          <AnimatedTitle as="h2" className="why-us__title" text={data.title} />

          {data.intro && <p className="why-us__intro">{data.intro}</p>}
        </div>

        <div className="why-us__grid">
          {data.items.map((item, index) => (
            <motion.div
              key={item.title}
              className="why-us__card"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="why-us__icon">{icons[item.icon]}</span>

              <h3 className="why-us__card-title">{item.title}</h3>

              <p className="why-us__card-desc">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyUs;
