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
    <div ref={ref} className="w-full relative">
      {/* Full Screen Image Carousel with Text Overlay */}
      <div className="relative h-154">
        <Slider {...settings}>
          <div>
            <img 
              src="/cor1.jpeg" 
              alt="Business Image 1"
              className="w-full h-154 object-cover"
            />
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Business Image 2"
              className="w-full h-154 object-cover"
            />
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1664447972779-316251bd8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80" 
              alt="Business Image 3"
              className="w-full h-154 object-cover"
            />
          </div>
        </Slider>
        
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10">
           <Slider {...settings}>
          <div>
            <img 
              src="/cor1.jpeg" 
              alt="Business Image 1"
              className="w-full h-154 object-cover"
            />
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Business Image 2"
              className="w-full h-154 object-cover"
            />
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1664447972779-316251bd8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80" 
              alt="Business Image 3"
              className="w-full h-154 object-cover"
            />
          </div>
        </Slider>
        </div>
        
        {/* Business Details Overlay - Left Side */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="text-left text-white px-8 md:px-16 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Fresh & Delicious
            </h1>
            <p className="text-xl md:text-2xl mb-6 font-light drop-shadow-lg">
              Serving authentic flavors with love
            </p>
            <p className="text-lg md:text-xl leading-relaxed drop-shadow-lg mb-8">
              Experience the taste of tradition with our fresh, quality ingredients.
            </p>
            
            {/* Call to Action Button */}
            <button className="bg-white text-black px-8 py-3 text-lg font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Body;