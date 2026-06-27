import "./HeroForm.scss";

import { useState } from "react";

import { motion } from "framer-motion";

const initialState = {
  name: "",
  phone: "",
  email: "",
  budget: "",
};

const HeroForm = ({ data }) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setForm(initialState);
  };

  return (
    <motion.form
      className="hero-form"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      onSubmit={handleSubmit}
    >
      <h2 className="hero-form__title">{data.title}</h2>

      <label className="hero-form__field">
        <span>Full Name *</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </label>

      <label className="hero-form__field">
        <span>Phone Number *</span>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          pattern="[0-9+ ]{7,15}"
          required
        />
      </label>

      <label className="hero-form__field">
        <span>Email *</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </label>

      <label className="hero-form__field">
        <span>Your Budget *</span>
        <select
          name="budget"
          value={form.budget}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            — Select Budget —
          </option>
          {data.budgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <button type="submit" className="hero-form__submit">
        {data.submitLabel}
      </button>
    </motion.form>
  );
};

export default HeroForm;
