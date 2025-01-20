import React, { useEffect, useState, useRef } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import EventsCarousel from "./EventsCarousel";

const AnnouncementScroller = ({ announcements }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        if (scrollPosition >= announcements.length) {
          setScrollPosition(0);
        } else {
          setScrollPosition((prev) => prev + 1);
        }
      }
    }, 2000); // Change scroll speed here (milliseconds)

    return () => clearInterval(scrollInterval);
  }, [scrollPosition, announcements.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.style.transform = `translateY(-${
        scrollPosition * 160
      }px)`;
    }
  }, [scrollPosition]);

  return (
    <div className="relative h-full overflow-hidden">
      <div
        ref={scrollRef}
        className="absolute w-full space-y-4 transition-transform duration-1000 ease-in-out"
      >
        {announcements.map((announcement, index) => (
          <div
            key={index}
            className="bg-white/20 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
          >
            <h3 className="font-bold text-lg mb-2 text-yellow-600">
              {announcement.title}
            </h3>
            <p className="text-gray-600 mb-2">{announcement.description}</p>
            <a
              href="#"
              className="text-yellow-500 hover:text-yellow-600 flex items-center"
            >
              Readmore <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const Announcements = () => {
  const newsItems = [
    {
      title: "ALUMNI MEET 2024",
      description:
        "Inviting to the Alumni Meet 2024 on 14 December 2024. All branches/batches / all years are invited.",
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
    },
    {
      title: "Best Engineer Award",
      description:
        "The Best Engineer Award has been awarded on Engineers' Day 2024 by the Institute of Engineers, Salem Center to Dr.M.Nithya, Professor / Vice Principal & HOD CSE",
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
    },
    {
      title: "National Anti-Ragging Day 2024",
      description:
        "The serious consequences of ragging and to promote a safe and supportive campus environment.",
      image:
        "https://img.freepik.com/premium-vector/banner-template-portrait-design-with-red-blue-background-photography-day-design_96777-1573.jpg?w=1060",
    },
  ];

  const announcements = [
    {
      title: "Carrier Opportunities in HITECH",
      description:
        "Hindusthan Institute of Technology has announced the Various Career opportunities CLICK HERE",
    },
    {
      title: "Recruitment for inhouse warden for boys hostel",
      description: "New positions available for wardens",
    },
    {
      title: "Campus Placement Drive",
      description: "Upcoming placement drive for final year students",
    },
    {
      title: "Research Paper Submission",
      description: "Call for papers in upcoming international conference",
    },
    {
      title: "Sports Day Announcement",
      description: "Annual sports meet registration open",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-full mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Events Section */}
          <EventsCarousel />

          {/* Latest Updates Section */}
          <div className="h-[800px] overflow-y-auto">
            <h2 className="text-2xl font-bold text-yellow-600 mb-4 sticky top-0 bg-gray-50 py-2">
              Latest Updates & Articles
            </h2>
            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 text-yellow-600">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                    <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
                      Readmore
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Announcements Section */}
          <div className="bg-white rounded-lg shadow h-[800px] overflow-hidden p-4">
            <h2 className="text-2xl font-bold text-yellow-600 mb-4">
              Announcements
            </h2>
            <div className="h-[calc(100%-3rem)]">
              <AnnouncementScroller announcements={announcements} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
