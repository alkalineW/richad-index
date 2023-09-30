import React from 'react';
import './css/Base.css';
import './css/Works.css';

export default function WorkRow({data}){
    console.log(data);
    console.log(data[0]);
    return (
    <div className='grid-row'>
{data.map((eachUrl , index)=>{
    console.log(eachUrl);
    let gridElm='';
        switch((index+1)%12){
          case 1:
            gridElm= <div className='grid-1'><img src={eachUrl}/></div>
            break;
          case 2:
            gridElm= <div className='grid-2'><img src={eachUrl}/></div>
            break;
          case 3: 
            gridElm= <div className='grid-3'><img src={eachUrl}/></div>
            break;
            case 4: 
            gridElm= <div className='grid-4'><img src={eachUrl}/></div>
            break;
            case 5: 
            gridElm= <div className='grid-5'><img src={eachUrl}/></div>
            break;
            case 6: 
            gridElm= <div className='grid-6'><img src={eachUrl}/></div>
            break;
            case 7: 
            gridElm= <div className='grid-7'><img src={eachUrl}/></div>
            break;
            case 8: 
            gridElm= <div className='grid-8'><img src={eachUrl}/></div>
            break;
            case 9: 
            gridElm= <div className='grid-9'><img src={eachUrl}/></div>
            break;
            case 10: 
            gridElm= <div className='grid-10'><img src={eachUrl}/></div>
            break;
            case 11: 
            gridElm= <div className='grid-11'><img src={eachUrl}/></div>
            break;
          default:
            gridElm= <div className='grid-12'><img src={eachUrl}/></div>
        }
        return gridElm;}
)}
  </div>)
}