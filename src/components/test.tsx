// import React from 'react';
// import './App.css';
import halfCircleImage from '../../public/imgs/languagestube.png'; // Import your half-circle image here

const Test = () => {
  return (
    <div className="container">
      <div className="fade-in"></div>
      <div className="circle-container">
        <div className="half-circle">
          <img src={halfCircleImage} alt="Half Circle" className="rotating-image" />
        </div>
        <div className="content">
          <h2>Rotating Half Circle</h2>
          <p>Description goes here...</p>
        </div>
      </div>
    </div>
  );
}

export default Test;
