import "./CTA.scss";

import { motion } from "framer-motion";

import Container from "../common/Container/Container";

const CTA = ({ data }) => {
  return (
    <section className="cta">
      <Container>
        <motion.div
          className="cta__inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>{data.title}</h2>
          <p>{data.subtitle}</p>

          <a href="#contact" className="cta__btn">
            {data.button}
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;
