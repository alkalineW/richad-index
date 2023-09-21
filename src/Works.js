import React , { useState } from 'react';
import './css/Base.css';
import './css/Works.css';
import MenuBar from './MenuBar';
import WorksGrid from './WorksGrid';
import imgData from './api/imgList.json';

export default function Works() {
  const data = imgData.imgList.map((eachImgUrl) => eachImgUrl);
  console.log(data);
  const [ workData, setWorkData] = useState(data);

  function filterImgData(data , filterCategory){
    if (filterCategory === ''){
      return data;
    }else{
      const matchRule = new RegExp( filterCategory, 'gi');
      const result = data.filter((data)=>data.match(matchRule))
    return result;
    }
  }

  return (
    <div className='Works_wrap'>
      <div>
      <button onClick={()=>{
          setWorkData(filterImgData(workData , ''))
        }}>All</button>
        <button onClick={()=>{
          setWorkData(filterImgData(workData , 'packaging'))
        }}>Packaging</button>
        <button onClick={()=>{
          setWorkData(filterImgData(workData , 'web'))
        }}>Website</button>
        <button onClick={()=>{
          setWorkData(filterImgData(workData , 'graphics'))
        }}>Graphics</button>
        
      </div>
      <MenuBar orgin={'Works'} />
      <WorksGrid imgList={workData}/>
    </div>
  );
}
