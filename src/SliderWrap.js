import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/SliderWrap.css';

export default function SliderWrap({ sliderSettings, imgList }) {
  console.log(imgList);
  const singleSlider = imgList.map((eachUrl, index) => {
    return (
      <div className='slide_column' key={index}>
        <a href=''>
          <img className='slider_img' src={'/portfolio/' + eachUrl} alt='bla' />
          {/* <img src='http://placekitten.com/g/400/200' alt='bla' /> */}
        </a>
      </div>
    );
  });

  return (
    <div class='slider-row'>
      <Slider {...sliderSettings}>{singleSlider}</Slider>
    </div>
  );
}