import "./VirtualTour.scss";

import { motion } from "framer-motion";

import Container from "../common/Container/Container";
import AnimatedTitle from "../common/AnimatedTitle/AnimatedTitle";

const VirtualTour = ({ data }) => {
  if (!data) return null;

  // Button is intentionally non-functional for now (3D tour coming later).
  const handleStartTour = () => {};

  return (
    <section className="virtual-tour section" id="virtual-tour">
      <motion.div
        className="virtual-tour__bg"
        style={{ backgroundImage: `url(${data.image})` }}
        initial={{ scale: 1.14 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />

      <div className="virtual-tour__overlay" />

      <span className="virtual-tour__ring" aria-hidden="true">
        <span>360°</span>
      </span>

      <Container>
        <motion.div
          className="virtual-tour__content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {data.badge && (
            <span className="virtual-tour__badge">
              <span className="virtual-tour__badge-dot" aria-hidden="true" />
              {data.badge}
            </span>
          )}

          <AnimatedTitle
            as="h2"
            className="virtual-tour__title"
            text={data.title}
          />

          {data.subtitle && (
            <p className="virtual-tour__subtitle">{data.subtitle}</p>
          )}

          <button
            type="button"
            className="virtual-tour__btn"
            onClick={handleStartTour}
          >
            <span className="virtual-tour__btn-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </span>

            {data.buttonLabel}
          </button>
        </motion.div>
      </Container>
    </section>
  );
};

export default VirtualTour;
