import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";



const x = "Vishal";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/200/300";
const img3 = "https://picsum.photos/200/300";
const link = "https://picsum.photos/"
ReactDOM.render(
  <>
    <h1 className = "heading"> My Name is {x} </h1>

    <div className= "img_div">
    <img src={img1} alt="random images" />
    <img src={img2} alt="random images" />
    <a href= {link} >
    <img src={img3} alt="random images" />
    </a>
    </div>
  </>,
  
  document.getElementById('root')
);