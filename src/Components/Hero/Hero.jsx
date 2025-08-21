import React from 'react'
import './Hero.css';
import model from '../../assets/model1.png'
import moment from "moment";

const Hero = () => {

//  const now = moment();
//  console.log(now,"time")

  return (
    <div className='container'>
        <div className="left-section">
              <p>Experience crystal </p>
              <h1>clear sound</h1>
              <p>with our top rated speakers</p>
            <button className='btn'>SHOP NOW</button>
            <div className='box'>
                  <span>50% OFF</span> on Rs.25000
            </div>
        </div>
      {/* <div className="middle-section">
          <h2>Current date and time</h2>
        <p>{now.format("DD-MM-YYYY hh:mm:ss a")}</p>
        </div>
        */} 
        <div className="right-section">
           <img src={model} alt="" /> 
        </div>
      
    </div>
  )
}

export default Hero
