import React from 'react';
import './css/Base.css';
import './css/AboutIcon.css';

export default function AboutIcon({ imgUrl, desc }) {
  return (
    <div className='text_center about_col'>
      <img src={imgUrl} alt='' />
      <p className='font_huninn'>{desc}</p>
    </div>
  );
}
