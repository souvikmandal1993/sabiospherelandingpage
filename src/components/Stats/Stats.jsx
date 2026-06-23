import "./Stats.scss";

import { motion } from "framer-motion";

import Container from "../common/Container/Container";
import Counter from "./Counter";

const Stats = ({ data }) => {
  return (
    <section className="stats">
      <Container>
        <div className="stats__grid">
          {data.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3>
                <Counter value={stat.number} suffix={stat.suffix} />
              </h3>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stats;
