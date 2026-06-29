import "./Hero.scss";
import { useState } from "react";

import { motion } from "framer-motion";

import HeroForm from "./HeroForm";
import AnimatedTitle from "../common/AnimatedTitle/AnimatedTitle";

const Hero = ({ data }) => {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="hero">
      <motion.div
        className="hero__bg"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
      >
        {data.backgroundVideo ? (
          <>
            {!videoReady && <div className="hero__loading" />}

            <video
              className={`hero__video ${videoReady ? "visible" : "hidden"}`}
              src={data.backgroundVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onCanPlay={() => setVideoReady(true)}
            />
          </>
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

          <AnimatedTitle
            as="h1"
            text={data.title}
            highlight={data.titleHighlight}
            duration={1.2}
            stagger={0.16}
          />

          <p>{data.subtitle}</p>
        </motion.div>

        {data.form && <HeroForm data={data.form} />}

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
