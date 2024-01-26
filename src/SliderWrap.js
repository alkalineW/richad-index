import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/SliderWrap.css";
import { Link } from "react-router-dom";

export default function SliderWrap({ sliderSettings, data }) {
  // let imgList = data.map((eachData) => eachData.portfolioCover);
  // let categoryList = data.map((eachData) => eachData.mockUp);

  const singleSlider = data.map((eachData, index) => {
    let liveDemo = eachData.liveDemo ? eachData.liveDemo : "";
    return (
      <div className="slide_column" key={index}>
        <Link
          state={{
            name: eachData.name,
            gallery: eachData.gallery,
            liveDemo: eachData.liveDemo,
            completionDate: eachData.completionDate,
          }}
          to={"works/" + eachData.category + "/" + eachData.urlName}
        >
          <img
            className="slider_img"
            src={eachData.portfolioCover}
            alt={eachData.name}
          />
        </Link>
      </div>
    );
  });

  return (
    <div className="slider-row">
      <Slider {...sliderSettings}>{singleSlider}</Slider>
    </div>
  );
}
