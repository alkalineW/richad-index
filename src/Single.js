import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { scrollToTop } from "./methods";
import MenuBar from "./MenuBar";
import toTopArrow from "./img/toTopArrow.svg";
import SingleImageGallery from "./SingleImageGallery";
import "./css/Single.css";

export default function Single() {
  const location = useLocation();
  const { name, gallery, completionDate } = location.state;
  const { category } = useParams();

  return (
    <div className="single_wrap">
      <MenuBar origin={"Single"} name={name} category={category} />
      <div className="position_relative single_content_wrap">
        <p className="position_absolute text_right font_huninn">
          {completionDate.year}
          <br />
          {completionDate.month}
        </p>
        <SingleImageGallery gallery={gallery} />
        <div
          onClick={() => {
            scrollToTop();
          }}
          className="position_fixed scroll_top d_flex justify_content_center align_items_center"
        >
          <img src={toTopArrow} alt={"to top arrow"} />
        </div>
      </div>
    </div>
  );
}
