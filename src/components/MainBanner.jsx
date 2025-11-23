import React from "react";
import banner from "../assets/images/banner.webp";

export default function MainBanner() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20 md:py-24">
      <div
        className="relative max-w-7xl mx-auto overflow-hidden rounded-none md:rounded-2xl h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-none md:rounded-2xl flex items-center justify-center px-4">
          {/* Content */}
          <div className="text-center text-gray-50 max-w-3xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight tracking-tight">
              Next-Gen Electronics Gadgets at Your Fingertips
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-6 leading-relaxed">
              Discover the latest gadgets and technology with unbeatable prices — plus free shipping on all orders.
            </p>
            <button
              className="inline-block px-6 py-3 bg-amber-500 text-black font-semibold rounded-full shadow-md hover:bg-amber-400 transition-all duration-300"
              aria-label="Shop Now"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
