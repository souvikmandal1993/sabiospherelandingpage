import "./Highlights.scss";

import { motion } from "framer-motion";

import personalisedDesigns from "../../assets/icons/personalised-designs.svg";
import warranty from "../../assets/icons/warranty.svg";
import transparentPricing from "../../assets/icons/transparent-pricing.svg";

const icons = {
  "personalised-designs": personalisedDesigns,
  warranty,
  "transparent-pricing": transparentPricing,
};

const Highlights = ({ data }) => {
  if (!data?.items?.length) return null;

  return (
    <section className="highlights">
      <div className="highlights__container">
        {data.items.map((item, index) => (
          <motion.div
            key={item.label}
            className="highlights__item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="highlights__icon">
              <img src={icons[item.icon]} alt="" aria-hidden="true" />
            </span>

            <p className="highlights__label">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
