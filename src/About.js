import React, { useRef, useState, useEffect } from "react";
import MenuBar from "./MenuBar";
import "./css/Base.css";
import "./css/About.css";
import AboutIcon from "./AboutIcon";
import aboutData from "./api/about.json";
import Footer from "./Footer";
import { importAll } from "./methods.js";
import { useLocation } from "react-router-dom";

function About() {
  const [scrollToContact, setScrollToContact] = useState(false);

  const location = useLocation();
  console.log(`${location.pathname}`);
  let passBetweenRoute = null;
  location.state
    ? (passBetweenRoute = location.state.data.scrollToSection)
    : (passBetweenRoute = false);
  const contactRef = useRef(null);
  const aboutIconUrl = importAll(
    require.context("./img/about", false, /\.(png|jpe?g)$/)
  );

  const aboutIconCol = Object.values(aboutIconUrl).map((eachUrl, index) => (
    <AboutIcon imgUrl={eachUrl} desc={aboutData.aboutDesc[index]} />
  ));

  function handleScrollToContact() {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  useEffect(() => {
    if (passBetweenRoute !== false) {
      handleScrollToContact();
    }
  }, []);

  return (
    <div>
      <MenuBar origin="about" excuteScroll={handleScrollToContact} />
      <div className="about_sec">
        <h1 className="font_huninn">We</h1>
        <p className="text_wh">
          身為一個服務客戶的廣告公司，里安不斷提醒自己，從經營理念開始直到第一線的作業模式，透過實際的操作、激盪及調整，把客戶的事當作是自己的事，為達到目標繼續努力。
        </p>
        <p className="text_wh">
          L.i.O.n<br></br>
          里安國際，有的是衝勁，沒有的是霸氣；
          有彈性，沒有身段；富創新，而厭守舊。
        </p>
      </div>
      <div className="about_sec">
        <h1 className="font_huninn">Service</h1>
        <div className="d_flex justify_content_center justify_content_left_md flex_wrap align_items_center">
          {aboutIconCol}
        </div>
      </div>
      <div className="about_sec">
        <h1 className="font_huninn">Clients</h1>
        <p className="font_huninn">
          中國信託 / 渣打銀行 / 台新銀行 / 遠東商銀 / 凱基銀行 / <br></br>
          星展銀行 / 台北富邦 / 臺灣土地銀行 / 臺灣銀行 / 華南銀行 /<br></br>
          元大銀行 / 合作金庫 / 新加坡大華銀行 / 匯豐銀行
        </p>
        <p>
          施羅德投信 / 富達證券 / 兆豐投信 / 聯博投信 / 野村投信 / <br></br>
          第一金投信 / 法銀巴黎投顧 / 美盛投顧 / 大華銀投顧 / 百達投顧 /
          <br></br>
          永豐投顧 / 富邦人壽 / 臺銀人壽 / 合庫人壽 / 鉅亨網
        </p>
        <p>
          萊爾富便利商店 / 全家便利店 / 英僑商會 / 英商邦史都華 / 特力屋 /
          <br></br>
          味丹企業 / 冠革貿易
        </p>
      </div>
      <div id="contact_sec" ref={contactRef} className="about_sec ">
        <h1 className="font_huninn">Contact</h1>
        <p className="text_wh">
          如果您需要任何專業上的諮詢，或與我們分享您對品牌的期待，請透過以下方式留下訊息或直接與我們聯繫，我們將會盡快回覆您的訊息並竭誠地為您服務。
        </p>
        <p className="text_wh">
          tel <span className="divide_icon">|</span>
          <a className="font_weight_bold text_wh" href="tel:02-2581-8501">
            02-2581-8501
          </a>
        </p>
        <p className="text_wh">
          fax <span className="divide_icon">|</span>
          <a className="font_weight_bold text_wh" href="fax:02-2542-8111">
            02-2542-8111
          </a>
        </p>
        <p className="text_wh">
          email <span className="divide_icon">|</span>
          <a
            className="font_weight_bold text_wh"
            href="mailto:lion@richad.com.tw"
          >
            lion@richad.com.tw
          </a>
        </p>
        <p className="text_wh">
          add <span className="divide_icon">|</span>
          104410 台北市中山區長春路40號9F之2 長春工商大樓
        </p>
      </div>
      <Footer origin={""} />
    </div>
  );
}

export default About;
