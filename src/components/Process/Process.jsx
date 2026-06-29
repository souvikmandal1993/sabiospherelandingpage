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
          {data.steps.map((item, index) => (
            <motion.div
              key={item.step}
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
            >
              <span className="process-step__node">{item.step}</span>

              <h3 className="process-step__title">{item.title}</h3>

              <p className="process-step__desc">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Process;
