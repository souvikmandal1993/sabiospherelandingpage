import "./FeaturedProjects.scss";

import { motion } from "framer-motion";

import Container from "../common/Container/Container";
import AnimatedTitle from "../common/AnimatedTitle/AnimatedTitle";

const FeaturedProjects = ({ data }) => {
  if (!data?.items?.length) return null;

  return (
    <section className="projects section" id="projects">
      <Container>
        <div className="projects__head">
          <AnimatedTitle as="h2" className="projects__title" text={data.title} />

          {data.subtitle && (
            <p className="projects__subtitle">{data.subtitle}</p>
          )}
        </div>

        <div className="projects__grid">
          {data.items.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
              whileHover={{ y: -8 }}
            >
              <img src={project.image} alt={project.title} loading="lazy" />

              <div className="project-card__overlay">
                <h3>{project.title}</h3>

                {project.category && <span>{project.category}</span>}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
