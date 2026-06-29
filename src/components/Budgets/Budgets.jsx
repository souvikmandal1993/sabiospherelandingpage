import "./Budgets.scss";

import { motion } from "framer-motion";

import Container from "../common/Container/Container";
import AnimatedTitle from "../common/AnimatedTitle/AnimatedTitle";

const CheckIcon = () => (
  <svg className="budgets__check" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M20 6L9 17l-5-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Budgets = ({ data }) => {
  if (!data?.items?.length) return null;

  return (
    <section className="budgets section" id="budgets">
      <Container>
        <div className="budgets__head">
          <AnimatedTitle as="h2" className="budgets__title" text={data.title} />

          <p className="budgets__subtitle">{data.subtitle}</p>
        </div>

        <div className="budgets__grid">
          {data.items.map((item, index) => (
            <motion.article
              key={item.name}
              className="budgets__card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="budgets__media">
                <img src={item.image} alt={item.name} loading="lazy" />
              </div>

              <h3 className="budgets__name">{item.name}</h3>

              <p className="budgets__price">
                {item.price} <span>{item.unit}</span>
              </p>

              <p className="budgets__desc">{item.description}</p>

              <ul className="budgets__features">
                {item.features.map((feature) => (
                  <li key={feature}>
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={data.ctaHref || "#contact"}
                className="budgets__btn"
              >
                {data.cta}
              </a>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Budgets;
