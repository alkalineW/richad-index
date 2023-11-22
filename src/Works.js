import React, { useState } from "react";
import "./css/Base.css";
import "./css/Works.css";
import MenuBar from "./MenuBar";
import { importAll, sortOutArray } from "./methods";
import { imgData } from "./api/imgList";
import { Outlet, Link } from "react-router-dom";

export default function Works() {
  const workImgData = importAll(
    require.context("./img/work", false, /\.(png|jpe?g|gif)$/)
  );
  const data = imgData.map((eachData) => eachData);
  const [workData, setWorkData] = useState(data);

  console.log(workData);

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

  // const generateWorkArray = sortOutArray(Object.values(workImgData), 12);
  const generateWorkArray = sortOutArray(workData, 12);

  let workRowArray = generateWorkArray;

  const workRow = workRowArray.map((workRowArray) => (
    <div className="grid-row">
      {workRowArray.map((eachData, index) => {
        console.log(eachData);
        let gridElm = "";
        let workGrid = (
          <Link
            to={eachData.category + "/" + eachData.urlName}
            state={{
              name: eachData.name,
              gallery: eachData.gallery,
            }}
            key={eachData.id}
          >
            <img
              key={eachData.id}
              src={eachData.workCover}
              alt={eachData.name}
            />
          </Link>
        );
        switch ((index + 1) % 12) {
          case 1:
            gridElm = (
              <div className="grid-1" key={eachData.id}>
                {workGrid}
              </div>
            );
            break;
          case 2:
            gridElm = (
              <div className="grid-2" key={eachData.id}>
                {workGrid}
              </div>
            );
            break;
          case 3:
            gridElm = (
              <div className="grid-3" key={eachData.id}>
                {workGrid}
              </div>
            );
            break;
          case 4:
            gridElm = (
              <div className="grid-4" key={eachData.id}>
                {workGrid}
              </div>
            );
            break;
          case 5:
            gridElm = (
              <div className="grid-5" key={eachData.id}>
                {workGrid}
              </div>
            );
            break;
          case 6:
            gridElm = (
              <div className="grid-6" key={eachData.id}>
                {workGrid}
              </div>
            );
            break;
          case 7:
            gridElm = (
              <div className="grid-7" key={eachData.id}>
                {workGrid}
              </div>
            );
            break;
          case 8:
            gridElm = (
              <div className="grid-8" key={eachData.id}>
                {workGrid}
              </div>
            );
            break;
          case 9:
            gridElm = (
              <div className="grid-9" key={eachData.id}>
                {workGrid}
              </div>
            );
            break;
          case 10:
            gridElm = (
              <div className="grid-10" key={eachData.id}>
                {workGrid}
              </div>
            );
            break;
          case 11:
            gridElm = (
              <div className="grid-11" key={eachData.id}>
                {workGrid}
              </div>
            );
            break;
          default:
            gridElm = (
              <div className="grid-12" key={eachData.id}>
                {workGrid}
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
      <MenuBar origin={"work"} />
      <div className="Works_album_wrap position_relative">
        <div className="grid-outer">{workRow}</div>
      </div>
      <Outlet />
    </div>
  );
}
