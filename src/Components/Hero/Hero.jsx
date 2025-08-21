import React from 'react'
import './Hero.css';
import model from '../../assets/model1.png'

const Hero = () => {
  return (
    <div className='container'>
        <div className="left-section">
              <p>Experience crystal and smooth </p>
              <h1>clear sound</h1>
              <p>with our top rated speakers</p>
            <button className='btn'>SHOP NOW</button>
            <div className='box'>
                  <span>50% OFF</span> on Rs.25000

            </div>
        </div>
        <div className="right-section">
           <img src={model} alt="" /> 
        </div>
      
    </div>
  )
}

export default Hero
