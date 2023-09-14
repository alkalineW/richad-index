import React from 'react';
import './css/Footer.css';
import './css/Base.css';

function getFullYear() {
  const dt = new Date();
  const currentYear = dt.getFullYear();
  return currentYear;
}

function Footer({ origin }) {
  return (
    <p
      className={`Footer_text text_center position_absolute ${
        origin === 'index' ? 'Footer_text_index' : 'Footer_text_about'
      }`}
    >
      {getFullYear()} ©Lion International
    </p>
  );
}

export default Footer;
