import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Placements = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "K. Maheswari, EEE",
      batch: "2024 Batch",
      company: "Wells Fargo",
      quote:
        "Exceptional education and guidance bestowed upon me propelled me into a fulfilling career...",
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
    },
    {
      id: 2,
      name: "N.Sudarssan, AI&DS",
      batch: "2024 Batch",
      company: "Wells Fargo",
      quote:
        "Team work all the way! International Hackathons helped shape our skills...",
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
    },
    {
      id: 3,
      name: "R. Preethi, Mech",
      batch: "2024 Batch",
      company: "Mercedes Benz",
      quote: "Women in manufacturing setting new...",
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
    },
  ];

  const stats = [
    { students: "7", package: "44 L", label: "HIGHEST PACKAGE" },
    { students: "11", package: "20 L", label: "AROUND" },
    { students: "65", package: "10 L", label: "ABOVE" },
    { students: "95", package: "7 L", label: "ABOVE" },
    { students: "345", package: "4 L", label: "ABOVE" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-blue-600">PLACEMENT</span>{" "}
          <span className="text-yellow-400">STORIES</span>
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Sharing the glorious success of our 2025 batch who are placed in more
          than 120 top multinational companies.{" "}
          <span className="font-semibold">We are so proud of them!</span>
        </p>
      </div>

      {/* Statistics Section */}
      <div className="bg-blue-600 rounded-lg p-6 mb-12">
        <div className="flex flex-wrap items-center justify-between">
          {/* Top Companies Circle */}
          <div className="relative">
            <div className="bg-yellow-400 rounded-full p-6 w-32 h-32 flex flex-col items-center justify-center relative">
              <div className="text-sm font-semibold">TOP COMPANIES</div>
              <div className="text-3xl font-bold">120+</div>
              {/* Decorative elements */}
              <div className="absolute -right-4 top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
              <div className="absolute -left-4 bottom-4 w-4 h-4 bg-yellow-400 rounded-full"></div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-4 ml-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-white text-center">
                <div className="text-3xl font-bold">{stat.students}</div>
                <div className="text-sm">STUDENTS</div>
                <div className="text-2xl font-bold mt-2">{stat.package}</div>
                <div className="text-xs">
                  {index === 0 ? stat.label : "ABOVE"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <div className="bg-yellow-50 rounded-lg p-6 flex items-start space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.batch}</p>
                    <p className="text-sm text-gray-600">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Placements;
