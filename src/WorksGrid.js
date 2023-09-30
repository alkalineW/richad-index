import React  from "react";

function WorksGrid({imgList}){
    const imgContent = imgList.map((eachImg)=>{<p>{eachImg}</p>})
    console.log('imgList in worksGrid');
    return (<>{imgContent}</>)
}

export default WorksGrid;