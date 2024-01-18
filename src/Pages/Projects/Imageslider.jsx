import React, { useState } from "react";
// 1.

import Slider from "react-slick";
import "./ImageCarousel.css";
// 2.


const ImageSlider = ({ images, slidesToShow = 3 }) => {
	// 3.
  const [imageIndex, setImageIndex] = useState(0);
	// 4.
  const settings = {
    centerMode: true,
    infinite: true,
    dots: true,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    arrows:false,
 
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
	// 5.
  const templateImages = images.map((image, idx) => {
    return (
      <div
        className={idx === imageIndex ? "activeSlide" : "slide"}
        key={image.id}
      >
        <div className="slideWrapper lg:h-[300px]">
          {image.code ? image.code : <img src={image.src} alt={image.alt} />}
        </div>
      </div>
    );
  });
  return <Slider {...settings}>{templateImages}</Slider>;
};
export default ImageSlider;