import "./Hero.scss";

import { motion } from "framer-motion";

const Hero = ({ data }) => {
  const titleLines = data.title.split("\n");

  console.log("Hero data:", data.backgroundVideo);

  return (
    <section className="hero">
      <motion.div
        className="hero__bg"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
      >
        {data.backgroundVideo ? (
          <video
            className="hero__video"
            src={data.backgroundVideo}
            poster={data.backgroundImage}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <div
            className="hero__image"
            style={{ backgroundImage: `url(${data.backgroundImage})` }}
          />
        )}
      </motion.div>

      <div className="hero__overlay"></div>
      <div className="hero__gradient"></div>

      <div className="hero__container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero__content"
        >
          <span className="hero__eyebrow">{data.eyebrow}</span>

          <h1>
            {titleLines.map((line, index) => (
              <span key={line}>
                {line}
                {index < titleLines.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p>{data.subtitle}</p>

          <div className="hero__actions">
            <a href="#contact" className="primary-btn">
              {data.primaryButton}
            </a>

            <a href="#projects" className="secondary-btn">
              {data.secondaryButton}
            </a>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="hero__scroll"
        >
          Scroll
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
