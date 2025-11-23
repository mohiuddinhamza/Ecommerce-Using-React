import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useData } from "../hooks/useData";
import Category from "./Category";

export default function Carousel() {
  const { allFatch, data } = useData();

  useEffect(() => {
    allFatch();
  }, [allFatch]);

  const SampleNextArrow = ({ className, style, onClick }) => (
    <div
      className={`${className} !flex !items-center !justify-center !bg-amber-500 !rounded-full !shadow-lg !p-4`}
      style={{ ...style, right: "30px", zIndex: 10 }}
      onClick={onClick}
    >
      <FaArrowRight className="text-black text-2xl" />
    </div>
  );

  const SamplePrevArrow = ({ className, style, onClick }) => (
    <div
      className={`${className} !flex !items-center !justify-center !bg-amber-500 !rounded-full !shadow-lg !p-4`}
      style={{ ...style, left: "30px", zIndex: 10 }}
      onClick={onClick}
    >
      <FaArrowLeft className="text-white text-2xl" />
    </div>
  );

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {data?.slice(0, 7).map((items, index) => (
          <div
            key={index}
            className="min-h-screen sm:min-h-[80vh] w-full bg-black px-4 sm:px-6 py-6 sm:py-10 flex items-center justify-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center max-w-7xl w-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] p-6 sm:p-10">
              {/* Image Section */}
              <div className="flex justify-center items-center">
                <div className="rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300">
                  <img
                    src={items.image}
                    alt={items.title}
                    className="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] object-cover"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="text-white">
                <h1 className="text-xl sm:text-2xl font-bold mb-4 leading-tight">
                  {items.title}
                </h1>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 line-clamp-6">
                  {items.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
                    Explore Now
                  </button>
                  <button className="px-6 py-3 bg-amber-500 text-black font-semibold rounded hover:bg-amber-400 transition">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Category />
    </div>
  );
}
