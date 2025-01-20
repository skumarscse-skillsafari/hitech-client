import React from "react";
import { useEffect, useState } from "react"; // Import useState and useEffect for fade-in animation

const Courses = () => {
  const [visible, setVisible] = useState(false);
  const courses = [
    {
      id: 1,
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
      name: "Course 1",
      description: "Description for course 1",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
      name: "Course 2",
      description: "Description for course 2",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
      name: "Course 3",
      description: "Description for course 3",
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
      name: "Course 4",
      description: "Description for course 4",
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
      name: "Course 5",
      description: "Description for course 5",
    },
    {
      id: 6,
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
      name: "Course 6",
      description: "Description for course 6",
    },
    {
      id: 7,
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
      name: "Course 7",
      description: "Description for course 7",
    },
    {
      id: 8,
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
      name: "Course 8",
      description: "Description for course 8",
    },
    {
      id: 9,
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
      name: "Course 9",
      description: "Description for course 9",
    },
    {
      id: 10,
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
      name: "Course 10",
      description: "Description for course 10",
    },
  ];

  // Handle fade-in animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 200); // Delay to trigger the fade-in after component is mounted

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-center text-4xl font-bold mb-6 text-yellow-600">
        Courses
      </h2>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 transition-opacity duration-1000 ease-in-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-yellow-600">
                {course.name}
              </h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
                More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
