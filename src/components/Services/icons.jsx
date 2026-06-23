const icons = {
  home: (
    <path d="M3 11.5 12 4l9 7.5M5 10v10h14V10M9.5 20v-6h5v6" />
  ),
  building: (
    <path d="M5 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16M13 21h6v-9a1 1 0 0 0-1-1h-5M8.5 8h1M8.5 12h1M8.5 16h1" />
  ),
  tool: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1a5 5 0 0 1-6.6 6.6L7.4 19.5a2 2 0 0 1-2.8-2.8L11.3 9a5 5 0 0 1 6.6-6.6z" />
  ),
  package: (
    <path d="M21 8 12 3 3 8m18 0-9 5m9-5v9l-9 5M3 8l9 5M3 8v9l9 5m0-9v9" />
  ),
};

const ServiceIcon = ({ name }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {icons[name] ?? icons.home}
  </svg>
);

export default ServiceIcon;
