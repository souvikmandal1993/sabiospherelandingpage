import "./DesignForm.scss";

import { useState } from "react";

import { motion } from "framer-motion";

const DesignForm = ({ data }) => {
  const [form, setForm] = useState({
    propertyType: "",
    location: "",
    budget: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setForm({ propertyType: "", location: "", budget: "" });
  };

  return (
    <motion.form
      className="design-form"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      onSubmit={handleSubmit}
    >
      <p className="design-form__step">
        {data.step.prefix}{" "}
        <span>{data.step.current}</span> {data.step.suffix}
      </p>

      <h2 className="design-form__title">{data.title}</h2>

      <div className="design-form__field">
        <span className="design-form__label">{data.propertyTypeLabel}</span>

        <div className="design-form__pills">
          {data.propertyTypes.map((type) => (
            <button
              key={type}
              type="button"
              className={`design-form__pill ${
                form.propertyType === type ? "is-active" : ""
              }`}
              onClick={() =>
                setForm((prev) => ({ ...prev, propertyType: type }))
              }
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <label className="design-form__field">
        <span className="design-form__label">{data.locationLabel}</span>

        <select
          name="location"
          className="design-form__select"
          value={form.location}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, location: event.target.value }))
          }
          required
        >
          <option value="" disabled>
            {data.locationPlaceholder}
          </option>
          {data.locationOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="design-form__field">
        <span className="design-form__label">{data.budgetLabel}</span>

        <select
          name="budget"
          className="design-form__select"
          value={form.budget}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, budget: event.target.value }))
          }
          required
        >
          <option value="" disabled>
            {data.budgetPlaceholder}
          </option>
          {data.budgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <button type="submit" className="design-form__submit">
        <span className="design-form__submit-text">{data.submitLabel}</span>
        <span className="design-form__submit-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="design-form__free" aria-hidden="true">
          {data.freeTag}
        </span>
      </button>

      <p className="design-form__disclaimer">
        {data.disclaimer.prefix}
        <a href={data.disclaimer.privacyHref}>{data.disclaimer.privacyLabel}</a>
        {data.disclaimer.middle}
        <a href={data.disclaimer.termsHref}>{data.disclaimer.termsLabel}</a>
        {data.disclaimer.suffix}
      </p>
    </motion.form>
  );
};

export default DesignForm;
