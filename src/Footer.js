import React from 'react';
import './css/Footer.css';
import './css/Base.css';

function Footer({ year }) {
  return (
    <p className='Footer_text text-center position-absolute'>
      {year} ©Lion International
    </p>
  );
}

export default Footer;
