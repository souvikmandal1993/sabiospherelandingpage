import "./FeaturedProjects.scss";

import { motion } from "framer-motion";

import Container from "../common/Container/Container";
import SectionTitle from "../common/SectionTitle/SectionTitle";

const FeaturedProjects = ({ data }) => {
  return (
    <section className="projects section" id="projects">
      <Container>
        <SectionTitle center label={data.label} title={data.title} />

        <div className="projects__grid">
          {data.items.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              whileHover={{ y: -12 }}
            >
              <div className="project-card__image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-card__content">
                <span>{project.category}</span>

                <h3>{project.title}</h3>

                <p>{project.location}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
