import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

const App = () => {
  const data = [
    {SongName: "mahiVe", artist: "omi",Image:"https://img.freepik.com/free-photo/portrait-beautiful-female-dj-with-headphones_23-2148325452.jpg?uid=R147153548&ga=GA1.1.1555283371.1726491413&semt=ais_hybrid", added: false},
    {SongName: "tere bina", artist: "Shreya",Image:"https://img.freepik.com/free-photo/character-playing-electric-guitar_23-2151375969.jpg?uid=R147153548&ga=GA1.1.1555283371.1726491413&semt=ais_hybrid", added: false},
    {SongName: "love me like you do", artist: "shiva",Image:"https://img.freepik.com/free-photo/musician-fog-playing-saxophone_23-2148730897.jpg?uid=R147153548&ga=GA1.1.1555283371.1726491413&semt=ais_hybrid", added: false},
    {SongName: "zara zara", artist: "rocky",Image:"https://img.freepik.com/free-photo/portrait-person-playing-music-violin_23-2151051668.jpg?uid=R147153548&ga=GA1.1.1555283371.1726491413&semt=ais_hybrid", added: false},
    {SongName: "tumhare siva", artist: "harsh",Image:"https://img.freepik.com/free-photo/woman-headphones-holding-palette-paintbrushes_114579-26715.jpg?uid=R147153548&ga=GA1.1.1555283371.1726491413&semt=ais_hybrid", added: false},
  ];
  const [songData, setSongData]= useState(data)
  const handleClick = (index)=>{
    setSongData((prev)=>{
      return prev.map((newdata,indexitem)=>{
        if(indexitem===index) return {...newdata, added: !newdata.added}
        return newdata
      })
    })
  }
  return (
    <>
      <div className="">
        <Navbar data ={songData}/>
        <div className="px-20 m-2 flex gap-8 flex-wrap">
         {songData.map((elem,index)=>{
          return <Card data ={elem} handleClick ={handleClick} index={index} key={index}/>
         })}
        </div>
      </div>
    </>
  );
};

export default App;
