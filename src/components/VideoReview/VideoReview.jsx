import "./VideoReview.scss";

import { useRef, useState } from "react";

import { motion } from "framer-motion";

import Container from "../common/Container/Container";

import sampleReview from "../../assets/videos/sample-review.mp4";

// Bundled local videos referenced by key in the data.
const localVideos = {
  "sample-review": sampleReview,
};

const VideoReview = ({ data }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  if (!data?.video) return null;

  const videoSrc = localVideos[data.video] || data.video;

  const handlePlay = () => {
    // Show native controls immediately so the user always has a fallback,
    // then attempt programmatic playback.
    setPlaying(true);

    const video = videoRef.current;
    if (!video) return;

    const result = video.play();
    if (result?.catch) {
      // Ignore autoplay rejections — controls are already visible.
      result.catch(() => {});
    }
  };

  return (
    <section className="video-review section" id="video-review">
      <Container>
        <div className="video-review__grid">
          <motion.div
            className="video-review__media"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
          >
            <video
              ref={videoRef}
              className="video-review__video"
              src={videoSrc}
              poster={data.thumbnail}
              controls={playing}
              playsInline
              preload="metadata"
            />

            {!playing && (
              <button
                type="button"
                className="video-review__play"
                onClick={handlePlay}
                aria-label="Play customer review video"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
              </button>
            )}
          </motion.div>

          <motion.div
            className="video-review__content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
          >
            <blockquote className="video-review__quote">
              “{data.quote}”
            </blockquote>

            <p className="video-review__author">{data.author}</p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default VideoReview;
