import React, { useState, useEffect } from 'react';
import './css/App.css';
import InteractiveIndex from './InteractiveIndex';
import LoadingScreen from './LoadingScreen';
import {imgData }from './api/imgList';

function App() {
  let data = [];
  let pageContent = '';

  const [showLoading, setShowLoading] = useState(true);
  data = imgData.map((eachData) => eachData.imgUrl);

  showLoading
    ? (pageContent = (
        <LoadingScreen isActive={true} onShow={() => setShowLoading(false)} />
      ))
    : (pageContent = <InteractiveIndex imgList={data} isActive={true} />);

  return <div className='App'>{pageContent}</div>;
}

export default App;
