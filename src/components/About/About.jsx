import "./About.scss";

import { motion } from "framer-motion";

import Container from "../common/Container/Container";
import SectionTitle from "../common/SectionTitle/SectionTitle";

const About = ({ data }) => {
  return (
    <section
      className="about section"
      id="about"
    >
      <Container>
        <div className="about__grid">

          <motion.div
            initial={{
              opacity: 0,
              x: -80
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="about__image"
          >
            <img
              src={data.image}
              alt={data.title}
            />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 80
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="about__content"
          >
            <SectionTitle
              label={data.label}
              title={data.title}
            />

            <p>
              {data.description}
            </p>

            <blockquote className="about__quote">
              “{data.founderQuote}”
            </blockquote>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default About;