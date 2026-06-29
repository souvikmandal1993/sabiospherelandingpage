import "./AnimatedTitle.scss";

import { motion, useReducedMotion } from "framer-motion";

// Word-by-word reveal: each word slides up and de-blurs in sequence,
// giving an elegant "generative" feel as the heading scrolls into view.
//
// ── Speed controls (tweak these to make it faster/slower) ──
//   duration : seconds EACH word takes to fade/slide in   (higher = slower)
//   stagger  : seconds between consecutive words starting (higher = slower spread)
const DEFAULT_DURATION = 1.1;
const DEFAULT_STAGGER = 0.12;

const AnimatedTitle = ({
  text = "",
  as = "h2",
  className = "",
  duration = DEFAULT_DURATION,
  stagger = DEFAULT_STAGGER,
  highlight = "",
}) => {
  const reduceMotion = useReducedMotion();

  // Words listed in `highlight` (space separated) get the accent colour.
  const accentWords = new Set(highlight.split(" ").filter(Boolean));

  // Respect users who prefer reduced motion: render plain text.
  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{text}</Tag>;
  }

  const MotionTag = motion[as];
  const lines = String(text).split("\n");

  const wordVariants = {
    hidden: { opacity: 0, y: "0.5em", filter: "blur(12px)" },
    visible: {
      opacity: 1,
      y: "0em",
      filter: "blur(0px)",
      transition: { duration, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
  };

  return (
    <MotionTag
      className={className}
      aria-label={text}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="animated-title__line" aria-hidden="true">
          {line.split(" ").map((word, wordIndex) => (
            <motion.span
              key={wordIndex}
              className={`animated-title__word${
                accentWords.has(word) ? " animated-title__word--accent" : ""
              }`}
              variants={wordVariants}
            >
              {word}
              {" "}
            </motion.span>
          ))}
        </span>
      ))}
    </MotionTag>
  );
};

export default AnimatedTitle;
