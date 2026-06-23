import "./Services.scss";

import { motion } from "framer-motion";

import Container from "../common/Container/Container";
import SectionTitle from "../common/SectionTitle/SectionTitle";
import ServiceIcon from "./icons";

const Services = ({ data }) => {
  return (
    <section className="services section" id="services">
      <Container>
        <SectionTitle center label={data.label} title={data.title} />

        <div className="services__grid">
          {data.items.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
            >
              <span className="service-card__icon">
                <ServiceIcon name={service.icon} />
              </span>

              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
