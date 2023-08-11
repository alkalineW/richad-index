import React, { useRef, useEffect, useState } from 'react';
import './css/LoadingScreen.css';
import './css/Base.css';
import { gsap } from 'gsap';

function typeEffect() {
  let loadString = 'loading...';
  var index = -1;

  function countUp(elm) {
    index++;
    console.log(index);
    if (index >= loadString.length) {
      index = -1;
      elm.innerHTML = '&nbsp;';
    } else {
      elm.innerHTML += loadString[index];
    }
    return index;
  }
  return countUp;
}

let typeLoading = typeEffect();

function LoadingScreen({ onShow }) {
  let basePath = useRef();
  let logoDot = useRef();
  let loadText = useRef();
  let tick = 0; // tick to set onUpdate less frequent
  const [isFade, setFade] = useState(false);

  useEffect(() => {
    const basePathLength = basePath.getTotalLength();
    gsap.fromTo(
      basePath,
      {
        strokeDasharray: basePathLength,
        strokeDashoffset: -basePathLength,
      },
      {
        // Loop the animation N times
        repeat: 1,
        // Make the animation lasts N seconds
        duration: 2,
        strokeDasharray: basePathLength,
        strokeDashoffset: basePathLength,
        // Function call on each frame of the animation
        onUpdate: () => {
          tick++;
          if (tick % 25 === 0) {
            typeLoading(loadText);
          }
        },
        onComplete: () => {
          basePath.style.cssText += 'stroke-dashoffset: 0; stroke:#0054a0';
          gsap.fromTo(
            logoDot,
            { y: '100' },
            { fill: '#fa5869', y: '0', duration: 1 }
          );
          setFade(true);
          // wait 2 second then close loading screen
          const timer = setTimeout(() => {
            onShow();
          }, 2000);
          return () => {
            clearTimeout(timer);
          };
        },
      }
    );
  }, []);

  return (
    <div
      className={`d-flex align-items-center flex-column justify-content-center Loading_wrap ${
        isFade ? 'Loading-fade' : ''
      }`}
    >
      <svg className='Loading_logo' viewBox='0 0 482 114'>
        <g>
          <defs>
            <path
              fill='none'
              id='SVGID_1_'
              d='M24.5,56.1C16.8,61.7,10,68.6,3,75.6c11.9-9.9,35.9-34.4,53.2-28.9c5.1,1.6,8.5,6.4,8.5,11.7
			c0.1,12.4-6.4,25-7.8,37.3c-1.2,10,7.1,14.1,16.3,12.1c25.4-5.5,48.9-36.7,75.1-33.6c4.4,0.5,8.4,2.8,11.2,6.2
			c6,7.5,12,14,24.2,11.6c28.6-4.4,52.3-31.8,72.8-49.8c13.8-12,31.2-27.2,49.5-33.1c13.6-4.1,31.2-5.8,35.6,9.9
			c7.3,20-14.8,63.4,10.7,73.9c41.5,8.5,64.7-60.4,126.7-70.3l-0.2-1.1c-17.2,1.1-48.4,18.1-58.3,27.4
			c-15.7,10.6-37.4,44.2-64.7,40.5c-13-3.5-11.1-17.1-11-27c0.8-15.3,6.9-39.6-4.5-51.5c-18.8-19.7-53.6,3.9-70.9,18.2
			c-23.6,18.6-42.7,43.9-74.9,57.3c-18.4,7.7-24.2-1-34-10.7c-1.6-1.5-3.5-2.7-5.6-3.2c-27.1-7.5-57.3,27.1-76.7,32
			c-5.7,2-14.1,2-16.5-4.6C58.3,88.9,72,65.8,67,52.1c-0.7-1.8-1.9-3.3-3.4-4.4C52.1,39.7,37,46.3,24.5,56.1z'
            />
          </defs>
          <clipPath id='SVGID_2_'>
            <use xlinkHref='#SVGID_1_' overflow='visible' />
          </clipPath>
          <path
            ref={(el) => (basePath = el)}
            className='Loading_path'
            fill='none'
            stroke='white'
            strokeWidth='20'
            d='M478.8,21.5c-61.7,10.5-84.6,75.8-124.6,70c-19.5-8.7-6.5-51.1-10.2-69.1c-3-14.9-12.8-18.3-28.6-17
		c-50.7,8.1-77.7,70.1-127,84.4c-12.1,2.9-19.8-2-22.7-5.4c-22.7-31.3-59.5,8.4-84.3,20.2c-49.1,17,3.3-51.6-24.3-59.4
		C36,41.3,18.8,61.8,4.1,74.5'
          />
        </g>
        <circle
          ref={(el) => (logoDot = el)}
          fill='#222'
          cx='148.9'
          cy='37.3'
          r='11.9'
        />
      </svg>
      <p ref={(el) => (loadText = el)} className='Loading_text'>
        &nbsp;
      </p>
    </div>
  );
}

export default LoadingScreen;
