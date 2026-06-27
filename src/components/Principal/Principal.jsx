import "./Principal.scss";

import { motion } from "framer-motion";

import Container from "../common/Container/Container";
import AnimatedTitle from "../common/AnimatedTitle/AnimatedTitle";

import mansiPortrait from "../../assets/images/mansi-portrait.jpg";

const images = {
  "mansi-portrait": mansiPortrait,
};

const Principal = ({ data }) => {
  if (!data) return null;

  return (
    <section className="principal section" id="principal">
      <Container>
        <div className="principal__grid">
          <motion.div
            className="principal__content"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedTitle as="h2" className="principal__title" text={data.title} />

            <p className="principal__intro">
              <strong>{data.name}</strong>
              {data.bio}
            </p>

            <blockquote className="principal__quote">
              “{data.quote}”
              <cite>— {data.quoteAuthor}</cite>
            </blockquote>

            {data.cta && (
              <a href={data.ctaHref || "#about"} className="principal__cta">
                {data.cta}
                <span aria-hidden="true">→</span>
              </a>
            )}
          </motion.div>

          <motion.div
            className="principal__image"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={images[data.image] || data.image} alt={data.name} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Principal;
