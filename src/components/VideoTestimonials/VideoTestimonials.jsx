import "./VideoTestimonials.scss";

import { useRef, useState } from "react";

import Container from "../common/Container/Container";
import AnimatedTitle from "../common/AnimatedTitle/AnimatedTitle";

import sampleReview from "../../assets/videos/sample-review.mp4";

// Bundled local videos referenced by key in the data.
const localVideos = {
  "sample-review": sampleReview,
};

const VideoCard = ({ item }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const videoSrc = localVideos[item.video] || item.video;

  const handlePlay = () => {
    setPlaying(true);

    const video = videoRef.current;
    if (!video) return;

    const result = video.play();
    if (result?.catch) {
      result.catch(() => {});
    }
  };

  return (
    <article className="video-testimonial">
      <div className="video-testimonial__media">
        <video
          ref={videoRef}
          src={videoSrc}
          poster={item.thumbnail}
          controls={playing}
          playsInline
          preload="metadata"
        />

        {!playing && (
          <button
            type="button"
            className="video-testimonial__play"
            onClick={handlePlay}
            aria-label={`Play ${item.name} review`}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </button>
        )}
      </div>

      <div className="video-testimonial__body">
        <p className="video-testimonial__quote">&ldquo;{item.quote}&rdquo;</p>

        <p className="video-testimonial__name">{item.name}</p>
      </div>
    </article>
  );
};

const VideoTestimonials = ({ data }) => {
  const trackRef = useRef(null);

  if (!data?.items?.length) return null;

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector(".video-testimonial");
    const amount = card ? card.offsetWidth + 24 : track.offsetWidth;

    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section className="video-testimonials section" id="video-testimonials">
      <Container>
        <div className="video-testimonials__head">
          <div>
            <AnimatedTitle
              as="h2"
              className="video-testimonials__title"
              text={data.title}
            />

            {data.subtitle && (
              <p className="video-testimonials__subtitle">{data.subtitle}</p>
            )}
          </div>

          {data.cta && (
            <a
              href={data.ctaHref || "#contact"}
              className="video-testimonials__cta"
            >
              {data.cta}
            </a>
          )}
        </div>

        <div className="video-testimonials__carousel">
          <button
            type="button"
            className="video-testimonials__arrow video-testimonials__arrow--prev"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous"
          >
            &#8249;
          </button>

          <div className="video-testimonials__track" ref={trackRef}>
            {data.items.map((item) => (
              <VideoCard key={item.id} item={item} />
            ))}
          </div>

          <button
            type="button"
            className="video-testimonials__arrow video-testimonials__arrow--next"
            onClick={() => scrollByCard(1)}
            aria-label="Next"
          >
            &#8250;
          </button>
        </div>
      </Container>
    </section>
  );
};

export default VideoTestimonials;
