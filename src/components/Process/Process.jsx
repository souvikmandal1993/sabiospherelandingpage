import "./Process.scss";

import { motion } from "framer-motion";

import Container from "../common/Container/Container";
import AnimatedTitle from "../common/AnimatedTitle/AnimatedTitle";

const Process = ({ data }) => {
  if (!data?.steps?.length) return null;

  return (
    <section className="process section" id="process">
      <Container>
        <div className="process__head">
          {data.label && <span className="process__label">{data.label}</span>}

          <AnimatedTitle as="h2" className="process__title" text={data.title} />

          {data.subtitle && (
            <p className="process__subtitle">{data.subtitle}</p>
          )}
        </div>

        <div className="process__timeline">
          <motion.span
            className="process__line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />

          {data.steps.map((item, index) => (
            <div
              key={item.step}
              className={`process-step process-step--${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              <motion.span
                className="process-step__node"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
              >
                {item.step}
              </motion.span>

              <motion.div
                className="process-step__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.1, duration: 0.6 }}
              >
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Process;
