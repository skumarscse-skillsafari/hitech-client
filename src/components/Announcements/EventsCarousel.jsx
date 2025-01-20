import React, { useState, useEffect } from "react";

const EventsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
    "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
    "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow h-[800px] overflow-hidden">
      <h2 className="text-2xl font-bold text-yellow-600 p-4">
        Events in HITECH
      </h2>
      <div className="relative h-[calc(100%-4rem)] w-full">
        {images.map((url, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
            }}
          >
            <img
              src={url}
              alt={`Event ${index + 1}`}
              className="rounded-lg w-full h-full object-cover p-4"
            />
          </div>
        ))}

        {/* Dot indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsCarousel;
