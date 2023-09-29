import React from 'react';
import './css/Base.css';
import './css/Works.css';
import MenuBar from './MenuBar';
import { importAll, sortOutArray } from './methods';

export default function Works() {
  const workImgData = importAll(require.context('./img/work', false, /\.(png|jpe?g|gif)$/));

  return (
    <div className='Works_wrap'>
    </div>
  );
}
