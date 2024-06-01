import React from 'react'
import './Style.css'
const Hero = () => {
  return (
    <div className='hero_section'>
      <div className="left_section">
        <div className="heading">Kondji Bokhare</div>
        <div className="dev">Web Designer based In New York</div>
        <div className="button">Hire me!</div>
      </div>
      <div className="right_section">
        <img src="https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg" alt="" />
      </div>
    </div>
  )
}

export default Hero