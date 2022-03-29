import React from 'react';
import ReactDOM from 'react-dom';

import Card from "./Cards";
import "./index.css"; 

ReactDOM.render(
  <>
    <h1 className='heading_style'>Playlists 2022</h1>
    <Card 
    imgsrc ="https://wallpapercave.com/wp/wp7140996.jpg"
    title = "Top Telugu Hits" 
      pname = "Top Hits- Telugu"
      link = "https://open.spotify.com/playlist/37i9dQZF1DX6XE7HRLM75P?si=c8047f88d7c844bc"
    />
    <Card
    imgsrc ="https://wallpapercave.com/uwp/uwp587593.jpeg"
    title = "Top English Hits" 
      pname = "VK KV 17"
      link = "https://open.spotify.com/playlist/6t6tb41IMeJhn9rXdONuPB?si=3d16431580494c72" />
    <Card 
     imgsrc ="https://wallpapercave.com/wp/wp8319532.jpg"
    title = "Top Hindi Hits" 
      pname = "Top Hits Hindi"
      link = "https://open.spotify.com/playlist/37i9dQZF1DX0XUfTFmNBRM?si=41884c74ad6c402a" 
    />
</>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

