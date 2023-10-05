import React, { useState, useEffect } from "react";
import "./css/App.css";
import InteractiveIndex from "./InteractiveIndex";
import LoadingScreen from "./LoadingScreen";
import { imgData } from "./api/imgList";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  let data = [];
  let pageContent = "";

  const [showLoading, setShowLoading] = useState(true);
  data = imgData.map((eachData) => eachData.imgUrl);

  showLoading
    ? (pageContent = (
        <LoadingScreen isActive={true} onShow={() => setShowLoading(false)} />
      ))
    : (pageContent = <InteractiveIndex imgList={data} isActive={true} />);

  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <title>里安國際</title>
          <meta
            name="description"
            content="里安國際股份有限公司 LiOn international"
          />
          <meta
            name="keywords"
            content="平面設計,包裝設計,網頁設計,展場佈置,活動規劃,禮品設計,廣告設計,商業設計"
          />
        </Helmet>
        {pageContent}
      </HelmetProvider>
    </div>
  );
}

export default App;
