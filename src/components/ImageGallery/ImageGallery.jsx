import React from "react";

const ImageGallery = () => {
  const galleryItems = [
    {
      id: 1,
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
      title: "Cafeteria",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
      title: "Infrastructure",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
      title: "Library",
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
      title: "Lab",
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
      title: "Cafeteria",
    },
    {
      id: 6,
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
      title: "Infrastructure",
    },
    {
      id: 7,
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
      title: "Library",
    },
    {
      id: 8,
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
      title: "Lab",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-600">Gallery</h1>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
        {galleryItems.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            {/* Circular Image Container */}
            <div className="rounded-full overflow-hidden w-64 h-64 mb-4 transition-transform duration-300 transform hover:scale-110">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Title Card */}
            <p className="cursor-pointer bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
