import "./VirtualTour.scss";

import { motion } from "framer-motion";

import DesignForm from "./DesignForm";
import AnimatedTitle from "../common/AnimatedTitle/AnimatedTitle";

const VirtualTour = ({ data }) => {
  if (!data) return null;

  return (
    <section className="virtual-tour" id="virtual-tour">
      <motion.div
        className="virtual-tour__bg"
        style={{ backgroundImage: `url(${data.image})` }}
        initial={{ scale: 1.14 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />

      <div className="virtual-tour__overlay" />

      <div className="virtual-tour__container">
        <motion.div
          className="virtual-tour__content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedTitle
            as="h2"
            className="virtual-tour__title"
            text={data.heading}
          />
        </motion.div>

        {data.form && <DesignForm data={data.form} />}
      </div>
    </section>
  );
};

export default VirtualTour;
