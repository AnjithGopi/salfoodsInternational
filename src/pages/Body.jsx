// Body.js
import Slider from 'react-slick';
import React, { forwardRef } from 'react';

const Body = forwardRef((props, ref) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div ref={ref} className="w-full min-h-screen bg-black">
      <Slider {...settings} className="h-screen">
        <div className="h-screen">
          <img
            src="https://via.placeholder.com/1920x1080.png?text=Image+1"
            alt="Slide 1"
            className="w-full h-screen object-cover"
          />
        </div>
        <div className="h-screen">
          <img
            src="https://via.placeholder.com/1920x1080.png?text=Image+2"
            alt="Slide 2"
            className="w-full h-screen object-cover"
          />
        </div>
      </Slider>
    </div>
  );
});

export default Body;
