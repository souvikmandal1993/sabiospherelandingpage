import "./Testimonials.scss";

import { motion } from "framer-motion";

import Container from "../common/Container/Container";
import SectionTitle from "../common/SectionTitle/SectionTitle";

const Testimonials = ({ data }) => {
  return (
    <section className="testimonials section">
      <Container>
        <SectionTitle center label={data.label} title={data.title} />

        <div className="testimonials__grid">
          {data.items.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
            >
              <p>&ldquo;{testimonial.quote}&rdquo;</p>

              <div className="testimonial-card__author">
                <img src={testimonial.avatar} alt={testimonial.name} />

                <div>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
