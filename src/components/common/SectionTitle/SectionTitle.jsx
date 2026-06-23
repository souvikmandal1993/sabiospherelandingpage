import "./SectionTitle.scss";

const SectionTitle = ({
  label,
  title,
  center = false
}) => {
  return (
    <div
      className={`section-title ${
        center ? "center" : ""
      }`}
    >
      <span>{label}</span>

      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;