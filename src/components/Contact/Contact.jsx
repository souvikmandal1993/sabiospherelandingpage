import "./Contact.scss";

import { useState } from "react";

import { motion } from "framer-motion";

import Container from "../common/Container/Container";
import SectionTitle from "../common/SectionTitle/SectionTitle";

const Contact = ({ data }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Project Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );

    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact section" id="contact">
      <Container>
        <div className="contact__grid">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="contact__info"
          >
            <SectionTitle label={data.label} title={data.title} />
            <p>{data.description}</p>

            <ul className="contact__details">
              <li>
                <span>Email</span>
                <a href={`mailto:${data.email}`}>{data.email}</a>
              </li>
              <li>
                <span>Phone</span>
                <a href={`tel:${data.phone.replace(/\s/g, "")}`}>{data.phone}</a>
              </li>
              <li>
                <span>Studio</span>
                <p>{data.address}</p>
              </li>
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="contact__form"
            onSubmit={handleSubmit}
          >
            <div className="contact__row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Tell us about your project"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="primary-btn">
              Send Enquiry
            </button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
