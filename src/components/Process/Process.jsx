import "./Process.scss";

import { motion } from "framer-motion";

import Container from "../common/Container/Container";
import SectionTitle from "../common/SectionTitle/SectionTitle";

const Process = ({ data }) => {
  return (
    <section className="process section" id="process">
      <Container>
        <SectionTitle center label={data.label} title={data.title} />

        <div className="process__list">
          {data.steps.map((item, index) => (
            <motion.div
              key={item.step}
              className="process-step"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <span className="process-step__number">{item.step}</span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Process;
