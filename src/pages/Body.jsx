import Slider from "react-slick";
import { forwardRef, useRef } from "react";
import PremiumHeroSection from "./description";

const Body = forwardRef((props, ref) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    customPaging: () => (
      <div className="w-3 h-3 bg-white/50 rounded-full transition-all duration-300 hover:bg-white cursor-pointer" />
    ),
    dotsClass:
      "slick-dots !flex !justify-center !items-center !gap-3 !bottom-8 !z-30",
  };

  return (
    <div ref={ref} className="w-full h-168 relative overflow-hidden">
      {/* Background Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Slider Container */}
      <div className="h-full">
        <Slider {...settings} ref={sliderRef} className="h-full">
          {/* Slide 1 */}
          <div className="relative h-screen">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-5" />
            <img
              src="/title1.jpg"
              alt="Premium Restaurant Interior"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Slide 2 */}
          <div className="relative h-screen">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-5" />
            <img
              src="/title2.jpeg"
              alt="Modern Business Architecture"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Slide 3 */}
          <div className="relative h-screen">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-5" />
            <img
              src="/ttl4.jpeg"
              alt="Elegant Dining Experience"
              className="w-full h-full object-cover"
            />
          </div>
        </Slider>
      </div>

      {/* Business Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="text-left text-white px-8 md:px-16 lg:px-24 max-w-4xl">
          <PremiumHeroSection />
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .slick-dots li {
          margin: 0 !important;
        }

        .slick-dots li.slick-active div {
          background: white !important;
          transform: scale(1.3);
        }

        .slick-slide {
          height: 100vh !important;
        }

        .slick-track {
          height: 100vh !important;
        }

        .slick-list {
          height: 100vh !important;
        }
      `}</style>
    </div>
  );
});

export default Body;
