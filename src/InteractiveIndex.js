import React, { useState, useEffect } from "react";
import "./css/InteractiveIndex.css";
import "./css/Base.css";
import MenuBar from "./MenuBar";
import SliderWrap from "./SliderWrap";

function InteractiveIndex({ data }) {
  // setInterval for the effect of background color changing
  function generateRandomColor() {
    const colorAlphabet = ["a", "b", "c", "d", "e", "f"];
    const colorNum = Array.from(Array(10).keys());
    const colorTextArr = colorAlphabet.concat(colorNum);
    let randColor = "";

    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * colorTextArr.length + 1);
      randColor = randColor + colorTextArr[index];
    }
    return "#" + randColor;
  }
  const [bgColor, setBgcolor] = useState(" #fa5869");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgcolor(generateRandomColor());
    }, 7000);
    return () => clearInterval(intervalId);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    rtl: false,
    variableWidth: true,
    pauseOnHover: false,
  };

  return (
    <div
      className="index_portfolio_wrap overflow_hidden"
      style={{ backgroundColor: bgColor }}
    >
      <MenuBar origin="index" />
      <div className="index_portfolio_grid">
        <SliderWrap data={data} sliderSettings={sliderSettings} />
        <SliderWrap data={data} sliderSettings={sliderSettings} />
        <SliderWrap data={data} sliderSettings={sliderSettings} />
      </div>
      {/* <PortfolioGrid /> */}
    </div>
  );
}

export default InteractiveIndex;
