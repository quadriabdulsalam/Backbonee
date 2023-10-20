import React, { useState } from "react";
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";



import "./Slider.scss";
import slidera from '../../img/slidera.jpg';
import sliderb from '../../img/sliderb.png';
import sliderc from '../../img/sliderc.png';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    '',
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={slidera} alt="" />
        <img src={sliderb} alt="" />
        <img src={sliderc} alt="" />
      </div>
      
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          < TfiAngleLeft/>
        </div>
        <div className="icon" onClick={nextSlide}>
          <TfiAngleRight  />
        </div>
      </div>
    </div>
  );
};

export default Slider;
