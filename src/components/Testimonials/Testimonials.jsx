import "./Testimonials.scss";

import { useRef } from "react";

import Container from "../common/Container/Container";
import AnimatedTitle from "../common/AnimatedTitle/AnimatedTitle";

const Testimonials = ({ data }) => {
  const trackRef = useRef(null);

  if (!data?.items?.length) return null;

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector(".testimonial-card");
    const amount = card ? card.offsetWidth + 24 : track.offsetWidth;

    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section className="testimonials section" id="testimonials">
      <Container>
        <div className="testimonials__head">
          <div>
            {data.label && (
              <span className="testimonials__label">{data.label}</span>
            )}

            <AnimatedTitle
              as="h2"
              className="testimonials__title"
              text={data.title}
            />
          </div>

          <div className="testimonials__nav">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous testimonials"
            >
              &#8249;
            </button>

            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next testimonials"
            >
              &#8250;
            </button>
          </div>
        </div>

        <div className="testimonials__track" ref={trackRef}>
          {data.items.map((testimonial) => (
            <figure key={testimonial.id} className="testimonial-card">
              <span className="testimonial-card__mark" aria-hidden="true">
                &ldquo;
              </span>

              <blockquote>{testimonial.quote}</blockquote>

              <figcaption className="testimonial-card__author">
                <span className="testimonial-card__avatar">
                  {testimonial.name.charAt(0)}
                </span>

                <span>
                  <strong>{testimonial.name}</strong>
                  {testimonial.role && <em>{testimonial.role}</em>}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
