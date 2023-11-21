import React, { useRef, useState } from "react";
import logo from "./img/logo.svg";
import aboutLogo from "./img/aboutLogo.svg";
import textLogo from "./img/textLogo.svg";
import workLogo from "./img/workLogo.svg";
// import singleLogo from "./img/singleLogo.svg";
import "./css/MenuBar.css";
import "./css/Base.css";
import Footer from "./Footer";
import { Link, BrowserRouter } from "react-router-dom";
import { checkMobile } from "./methods";

function MenuBar({ origin, excuteScroll, name, category }) {
  const [data, setData] = useState({ scrollToSection: true });
  if (origin === "index") {
    return (
      <div className="Menubar_wrap Menubar_wrap_index">
        <div className="Menubar_logo_wrap d_flex justify_content_center align_items_center">
          <img
            className="Menubar_logo Menubar_logo_index"
            src={logo}
            alt="richad-logo"
          />
        </div>
        <div>
          <ul className="Menubar_list list_style_none text_right">
            <li className={"Menubar_list_item position_relative"}>
              <Link to="/works">Works</Link>
            </li>
            <li className="Menubar_list_item position_relative">
              <Link to="/about">About</Link>
            </li>
            <li className="Menubar_list_item position_relative">
              <Link to="/about" state={{ data: data }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Footer origin={origin} />
      </div>
    );
  } else if (origin === "about") {
    return checkMobile() ? (
      <div className="Menubar_wrap Menubar_wrap_about_mobile align_items_center">
        <div className="Menubar_logo_wrap">
          <Link to="/">
            <img
              className="Menubar_logo Menubar_logo_about"
              src={aboutLogo}
              alt="richad-logo"
            />
          </Link>
          <img className="Menubar_list_logo" src={textLogo} alt="里安國際" />
        </div>
        <div className="Menubar_list_wrap_about">
          <ul className="Menubar_list position_relative list_style_none d_flex justify_content_center align_items_center">
            <li className="Menubar_list_item position_relative">
              <Link to="/">Home</Link>
            </li>
            <li className="Menubar_list_item position_relative">
              <Link to="/works">Works</Link>
            </li>
            <li className="Menubar_list_item position_relative">
              <Link to="/about">About</Link>
            </li>
            <li className="Menubar_list_item position_relative">
              <button onClick={excuteScroll}>Contact</button>
            </li>
          </ul>
        </div>
      </div>
    ) : (
      <div className="Menubar_wrap Menubar_wrap_about d_flex">
        <div className="Menubar_logo_wrap d_flex justify_content_center align_items_center">
          <Link to="/">
            <img
              className="Menubar_logo Menubar_logo_about"
              src={aboutLogo}
              alt="richad-logo"
            />
          </Link>
        </div>
        <div className="Menubar_list_wrap_about flex_column d_flex align_items_end position_relative">
          <img className="Menubar_list_logo" src={textLogo} alt="里安國際" />
          <ul className="Menubar_list position_relative list_style_none text_right d_flex flex_wrap">
            <li className={"Menubar_list_item position_relative"}>
              <Link to="/">Home</Link>
            </li>
            <li className={"Menubar_list_item position_relative"}>
              <Link to="/works">Works</Link>
            </li>
            <li className="Menubar_list_item position_relative">
              <Link to="/about">About</Link>
            </li>
            <li className="Menubar_list_item position_relative">
              <button onClick={excuteScroll}>Contact</button>
            </li>
          </ul>
        </div>
        <Footer origin={origin} />
      </div>
    );
  } else if (origin === "work") {
    return (
      <div className="Menubar_wrap Menubar_wrap_work d_flex flex_column">
        <div className="Menubar_logo_wrap">
          <Link to="/">
            <img className="Menubar_logo" src={workLogo} alt="richad-logo" />
          </Link>
        </div>
        <div className="Menubar_list_wrap_work d_flex flex_column">
          <h1 className="font_huninn text_wh">Works</h1>
          <ul className="Menubar_list position_relative list_style_none text_right d_flex justify_content_center align_items_end flex_column">
            <li className={"Menubar_list_item position_relative"}>
              <Link to="/">Home</Link>
            </li>
            <li className={"Menubar_list_item position_relative"}>
              <Link to="/works">Works</Link>
            </li>
            <li className="Menubar_list_item position_relative">
              <Link to="/about">About</Link>
            </li>
            <li className="Menubar_list_item position_relative">
              {/* <button onClick={()=>{
                
              }}>Contact</button> */}
              <Link to="/about" state={{ data: data }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Footer origin={origin} />
      </div>
    );
  } else {
    return (
      <div className="Menubar_wrap Menubar_wrap_work Menubar_wrap_single d_flex">
        <div className="Menubar_logo_wrap">
          <Link to="/">
            {/* <img className="Menubar_logo" src={singleLogo} alt="richad-logo" /> */}
          </Link>
        </div>
        <h1 className="font_huninn">Works</h1>
        <div className="single_info text_right">
          <h2 className="text_right single_subtitle">{name}</h2>
          <p className="text_right single_category_text">書冊編排設計</p>
          <p className="text_right single_category_pill">{category}</p>
        </div>
        <div className="Menubar_list_wrap_single d_flex">
          <ul className="Menubar_list position_relative list_style_none text_right d_flex justify_content_center align_items_end flex_column">
            <li className={"Menubar_list_item position_relative"}>
              <Link to="/">Home</Link>
            </li>
            <li className={"Menubar_list_item position_relative"}>
              <Link to="/works">Works</Link>
            </li>
            <li className="Menubar_list_item position_relative">
              <Link to="/about">About</Link>
            </li>
            <li className="Menubar_list_item position_relative">
              <Link to="/about" state={{ data: data }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Footer origin={origin} />
      </div>
    );
  }
}

export default MenuBar;
