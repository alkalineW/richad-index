import React, { useState } from "react";
import "./css/Base.css";
import "./css/Works.css";
import MenuBar from "./MenuBar";
import { importAll, sortOutArray } from "./methods";

export default function Works() {
  const workImgData = importAll(
    require.context("./img/work", false, /\.(png|jpe?g|gif)$/)
  );
  // const data = imgData.imgList.map((eachImgUrl) => eachImgUrl);
  // console.log(data);
  // const [ workData, setWorkData] = useState(data);

  // function filterImgData(data , filterCategory){
  //   if (filterCategory === ''){
  //     return data;
  //   }else{
  //     const matchRule = new RegExp( filterCategory, 'gi');
  //     const result = data.filter((data)=>data.match(matchRule))
  //   return result;
  //   }
  // }

  const generateWorkArray = sortOutArray(Object.values(workImgData), 12);

  let workRowArray = generateWorkArray;

  console.log(workRowArray);

  const workRow = workRowArray.map((workRowArray) => (
    <div className="grid-row">
      {workRowArray.map((eachUrl, index) => {
        let gridElm = "";
        switch ((index + 1) % 12) {
          case 1:
            gridElm = (
              <div className="grid-1">
                <img src={eachUrl} />
              </div>
            );
            break;
          case 2:
            gridElm = (
              <div className="grid-2">
                <img src={eachUrl} />
              </div>
            );
            break;
          case 3:
            gridElm = (
              <div className="grid-3">
                <img src={eachUrl} />
              </div>
            );
            break;
          case 4:
            gridElm = (
              <div className="grid-4">
                <img src={eachUrl} />
              </div>
            );
            break;
          case 5:
            gridElm = (
              <div className="grid-5">
                <img src={eachUrl} />
              </div>
            );
            break;
          case 6:
            gridElm = (
              <div className="grid-6">
                <img src={eachUrl} />
              </div>
            );
            break;
          case 7:
            gridElm = (
              <div className="grid-7">
                <img src={eachUrl} />
              </div>
            );
            break;
          case 8:
            gridElm = (
              <div className="grid-8">
                <img src={eachUrl} />
              </div>
            );
            break;
          case 9:
            gridElm = (
              <div className="grid-9">
                <img src={eachUrl} />
              </div>
            );
            break;
          case 10:
            gridElm = (
              <div className="grid-10">
                <img src={eachUrl} />
              </div>
            );
            break;
          case 11:
            gridElm = (
              <div className="grid-11">
                <img src={eachUrl} />
              </div>
            );
            break;
          default:
            gridElm = (
              <div className="grid-12">
                <img src={eachUrl} />
              </div>
            );
        }
        return gridElm;
      })}
    </div>
  ));

  return (
    <div className="Works_wrap">
      {/* // <div>
      // <button onClick={()=>{
      //     setWorkData(filterImgData(workData , ''))
      //   }}>All</button>
      //   <button onClick={()=>{
      //     setWorkData(filterImgData(workData , 'packaging'))
      //   }}>Packaging</button>
      //   <button onClick={()=>{
      //     setWorkData(filterImgData(workData , 'web'))
      //   }}>Website</button>
      //   <button onClick={()=>{
      //     setWorkData(filterImgData(workData , 'graphics'))
      //   }}>Graphics</button>
        
      // </div> */}
      <MenuBar origin={"Works"} />
      <div className="Works_album_wrap position_relative">
        <div className="grid-outer">{workRow}</div>
      </div>
    </div>
  );
}
