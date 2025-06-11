import React, { useState } from "react";
import { ChevronDown, Menu, X, Phone, MapPin, Mail } from "lucide-react";
import { topNavData, mainNavData } from "../../data/navData";
import collegeLogo from "../../assets/logo.png";
import aicte from "../../assets/aicte.jpg";
import naac from "../../assets/naac.png";
import anna from "../../assets/anna.png";
import hect from "../../assets/hect.png";
import nba from "../../assets/NBA.png";

const TopNavDropdown = ({ items }) => {
  return (
    <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-400 transition-colors duration-200"
        >
          {item.title}
        </a>
      ))}
    </div>
  );
};

const MainNavDropdown = ({ items }) => {
  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="text-lg block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-400 transition-colors duration-200"
        >
          {item.title}
        </a>
      ))}
    </div>
  );
};

const NavbarComp = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // <div className="min-h-screen">
    <div
      style={{ minHeight: "calc(100vh-30vh)" }}
      // className="sticky top-0 w-full z-50 shadow-md"
    >
      {/* Top Navigation Bar */}
      <div className="bg-yellow-400 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center">
                <Phone size={16} className="mr-1" />
                <span className="text-lg">{topNavData.contact.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-1" />
                <span className="text-lg">{topNavData.contact.email}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-1" />
                <span className="text-lg">{topNavData.contact.location}</span>
              </div>
            </div>

            {/* Right Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 ml-auto">
              {topNavData.rightLinks.map((item, index) => (
                <div key={index} className="relative group">
                  <button className="flex items-center text-lg hover:text-yellow-200 transition-colors duration-200">
                    {item.title}
                    {item.dropdown && (
                      <ChevronDown size={16} className="ml-1" />
                    )}
                  </button>
                  {item.dropdown && <TopNavDropdown items={item.dropdown} />}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden ml-auto p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap md:flex-nowrap items-center">
            {/* Left Section */}
            <div className="flex flex-col md:flex-row items-center w-full md:w-2/3">
              <img
                src={collegeLogo}
                alt="College Logo"
                style={{ height: 130, width: "auto", marginRight: 20 }}
                className="mb-4 md:mb-0"
              />
              <div>
                <h1 className="text-3xl font-bold text-yellow-500">
                  HINDUSTHAN INSTITUTE OF TECHNOLOGY
                </h1>
                <p className="text-xl text-stone-400 font-bold">
                  (An Autonomous Institution)
                </p>
                <p className="text-stone-400 font-bold">
                  Approved by AICTE, New Delhi. Affiliated to Anna University,
                  Chennai.
                </p>
                <p className="text-stone-400 font-bold">
                  Accredited by NAAC with "A" Grade.
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex w-full md:w-1/3 justify-center">
              <div className="flex justify-between w-full">
                <div className="mr-2">
                  <img
                    src={aicte}
                    alt="AICTE Logo"
                    style={{ height: 130, width: "auto" }}
                    className="mb-4 md:mb-0"
                  />
                </div>
                <div className="mr-2">
                  <img
                    src={naac}
                    alt="NAAC Logo"
                    style={{ height: 130, width: "auto" }}
                    className="mb-4 md:mb-0"
                  />
                </div>
                <div className="mr-2">
                  <img
                    src={anna}
                    alt="Anna Univ Logo"
                    style={{ height: 130, width: "auto" }}
                    className="mb-4 md:mb-0"
                  />
                </div>
                <div className="w-32">
                  <img
                    src={nba}
                    alt="NBA Logo"
                    style={{ height: 130, width: "auto" }}
                    className="mb-4 md:mb-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Navigation */}
      <div className="bg-gray-100 shadow-md z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <nav className="hidden lg:flex justify-center space-x-8 py-4">
            {mainNavData.map((item, index) => (
              <div key={index} className="relative group">
                <button className="text-lg text-gray-700 hover:text-yellow-400 py-2 flex items-center group-hover:text-yellow-400 transition-colors duration-200">
                  {item.title}
                  <ChevronDown
                    size={16}
                    className="ml-1 transform group-hover:rotate-180 transition-transform duration-200"
                  />
                </button>
                <MainNavDropdown items={item.dropdown} />
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        {/* Mobile Menu Content */}
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-white transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4">
            {/* Mobile Contact Info */}
            <div className="space-y-4 mb-6 border-b border-gray-200 pb-4">
              <div className="flex items-center text-gray-600">
                <Phone size={16} className="mr-2" />
                <span className="text-sm">{topNavData.contact.phone}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail size={16} className="mr-2" />
                <span className="text-sm">{topNavData.contact.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin size={16} className="mr-2" />
                <span className="text-sm">{topNavData.contact.location}</span>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-6">
              {/* Top Nav Links */}
              <div className="space-y-4">
                {topNavData.rightLinks.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <button className="text-gray-700 font-medium">
                      {item.title}
                    </button>
                    {item.dropdown && (
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.link}
                            className="block text-sm text-gray-600 hover:text-yellow-400"
                          >
                            {subItem.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Main Nav Links */}
              <div className="border-t border-gray-200 pt-4 space-y-4">
                {mainNavData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <button className="text-gray-700 font-medium">
                      {item.title}
                    </button>
                    <div className="pl-4 space-y-2">
                      {item.dropdown.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.link}
                          className="block text-sm text-gray-600 hover:text-yellow-400"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComp;
