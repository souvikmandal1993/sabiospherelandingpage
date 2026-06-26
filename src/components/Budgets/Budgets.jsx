import "./Budgets.scss";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import Container from "../common/Container/Container";

const Budgets = ({ data }) => {
  const [active, setActive] = useState(null);

  if (!data?.items?.length) return null;

  const closeModal = () => setActive(null);

  return (
    <section className="budgets section" id="budgets">
      <Container>
        <div className="budgets__head">
          <div>
            <h2 className="budgets__title">{data.title}</h2>

            <p className="budgets__subtitle">{data.subtitle}</p>
          </div>

          {/* {data.cta && (
            <a href={data.ctaHref || "#contact"} className="budgets__cta">
              {data.cta}
            </a>
          )} */}
        </div>

        <div className="budgets__grid">
          {data.items.map((item, index) => (
            <motion.button
              type="button"
              key={item.label}
              className="budgets__card"
              onClick={() => setActive(item)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={item.cover} alt={item.label} loading="lazy" />

              <span className="budgets__price">Starting at {item.startingAt}</span>

              <span className="budgets__label">{item.label}</span>
            </motion.button>
          ))}
        </div>

        {data.note && <p className="budgets__note">{data.note}</p>}
      </Container>

      <AnimatePresence>
        {active && (
          <motion.div
            className="budgets__modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="budgets__dialog"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="budgets__close"
                onClick={closeModal}
                aria-label="Close gallery"
              >
                ×
              </button>

              <div className="budgets__dialog-head">
                <h3>{active.label}</h3>

                <span>Starting at {active.startingAt}</span>
              </div>

              <div className="budgets__gallery">
                {active.gallery?.map((image, index) => (
                  <div className="budgets__gallery-item" key={image}>
                    <img src={image} alt={`${active.label} ${index + 1}`} />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Budgets;
