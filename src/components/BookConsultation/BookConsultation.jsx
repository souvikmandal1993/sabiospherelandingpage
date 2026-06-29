import "./BookConsultation.scss";

import { motion } from "framer-motion";

import Container from "../common/Container/Container";
import AnimatedTitle from "../common/AnimatedTitle/AnimatedTitle";

const BookConsultation = ({ data }) => {
  if (!data) return null;

  return (
    <section className="book-consultation section" id="book-consultation">
      <Container>
        <motion.div
          className="book-consultation__inner"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <AnimatedTitle
            as="h2"
            className="book-consultation__title"
            text={data.title}
          />

          {data.subtitle && (
            <p className="book-consultation__subtitle">{data.subtitle}</p>
          )}

          {data.cta && (
            <a
              href={data.ctaHref || "#contact"}
              className="book-consultation__cta"
            >
              {data.cta}
            </a>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default BookConsultation;
