import "./WhatsAppButton.scss";

import whatsappIcon from "../../assets/icons/whatsapp.svg";

const WhatsAppButton = ({ phone, message }) => {
  if (!phone) return null;

  // wa.me opens the app on mobile and WhatsApp Web/desktop on desktop.
  const number = phone.replace(/[^0-9]/g, "");
  const href = `https://wa.me/${number}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

  return (
    <a
      className="whatsapp-button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <img src={whatsappIcon} alt="" aria-hidden="true" />
    </a>
  );
};

export default WhatsAppButton;
