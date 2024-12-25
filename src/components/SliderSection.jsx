import { useState, useEffect } from 'react'
import "./SliderSection.css";
import SliderImage1 from "./Images/img9.png";
import SliderImage2 from "./Images/img10.png";

export const SliderSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [SliderImage1, SliderImage2, ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide,4000);
        return () => clearInterval(interval); 
    }, );

  return (
    <div className="custom-slider">
 <button onClick={prevSlide} className="slider-btn left-btn">
        &#10094;
      </button>
      <div className="slider-images">
      {slides.map((image, index) => (
          <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={index === currentSlide ? "active" : "inactive"}
          />
      ))}
      <button onClick={nextSlide} className="slider-btn right-btn">
        &#10095;
      </button>
      </div>
    </div>
  )
}
