import React from 'react';
import { MdOutlineHomeWork } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import HomeCliclk2 from './HomeClickEvent/HomeCliclk2';
import { HomeDetiles4 } from './HomeDetiles4';

const HomeDetails3 = () => {
  const localities = [
    {
      name: "Kelambakkam",
      priceRange: "₹ 27L - 90L",
      description: "Find the perfect place to live with your family",
    },
    {
      name: "Sholinganallur",
      priceRange: "₹ 3.60Cr - 4.05Cr",
      description: "Find the perfect place to live with your family",
    },
    {
      name: "Egmore",
      priceRange: "₹ 34L - 90L",
      description: "Find the perfect place to live with your family",
    },
  ];

  const cardColors = [
    'bg-gray-100',
  ];

  const imageCards = [
    {
      title: "Kelambakkam",
      subtitle: "#1 Best Dwelling Area",
      image: "/kelambakam.jpg",
      height: "h-48",
    },
    {
      title: "Velachery",
      subtitle: "Close to malls, schools & IT corridors",
      image: "/phoenix.jpg",
      height: "h-40",
    },
    {
      title: "Egmore",
      subtitle: "Central & well-connected locality",
      image: "/egmore.jpg",
      height: "h-40",
    },
  ];

  return (
    <>
      {/* Top Section */}
      <div className="px-4 md:px-20 py-8">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left Text */}
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Top Preferred
              <span className="text-blue-700 ml-2">locations in</span>
              <span className="ml-2">Chennai</span>
            </h1>
            <p className="text-gray-700">
              Find the best properties in top Chennai locations. Explore premium residential,
              commercial, rental, resale, and lease opportunities in these high-demand areas.
            </p>
          </div>

          {/* Right Images */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 font-medium">
            {imageCards.slice(0, 1).map((card, i) => (
              <div
                key={i}
                className={`${card.height} bg-cover bg-center rounded-xl shadow-md relative`}
                style={{ backgroundImage: `url('${card.image}')` }}
                aria-label={card.title}
              >
                <div className="absolute bottom-4 left-4 text-white bg-black/50 p-3 rounded">
                  <h2 className="font-bold">{card.title}</h2>
                  <p>{card.subtitle}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-4">
              {imageCards.slice(1).map((card, i) => (
                <div
                  key={i}
                  className={`${card.height} w-1/2 bg-cover bg-center rounded-xl shadow-md relative`}
                  style={{ backgroundImage: `url('${card.image}')` }}
                  aria-label={card.title}
                >
                  <div className="absolute bottom-4 left-4 text-white bg-black/50 p-3 rounded">
                    <h2 className="font-bold">{card.title}</h2>
                    <p>{card.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Localities Section */}
      <div className="mt-8 px-4 md:px-20">
        <h1 className="text-2xl font-bold mb-6">Explore by Localities</h1>

        <div className="grid gap-6 md:grid-cols-4">
          {/* Explore Box */}
          <div className="bg-blue-300 rounded-xl text-white flex flex-col justify-between px-5 py-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 border-b-4 border-black w-30">Explore</h2>
              <p className="text-sm font-bold mb-6">Popular Localities in Chennai</p>
            </div>
            <Link
              to="/homecliclk2"
              className="bg-blue-700 text-white font-medium px-6 py-2 rounded-lg self-start hover:bg-blue-800 transition"
            >
              View All
            </Link>
          </div>

          {/* Locality Cards */}
          {localities.map((loc, index) => (
            <div
              key={index}
              className={`${cardColors[index % cardColors.length]} p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <h3 className="text-lg font-bold text-gray-800 mb-2">{loc.name}</h3>
              <p className="text-sm text-gray-600 mb-1 bg-gray-200 inline-block px-2 py-1 rounded">
                {loc.priceRange}
              </p>
              <p className="text-sm font-bold text-gray-700 my-3">{loc.description}</p>
              <div className="flex items-center justify-between text-blue-600 font-medium mt-4">
                <div className="flex items-center gap-2">
                  <MdOutlineHomeWork className="text-xl" />
                <Link to="/homeclick"
               className="ml-2 hover:underline cursor-pointer">View Properties </Link>
                  <GoArrowRight className="text-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <HomeDetiles4/>
    </>
  );
};

export default HomeDetails3;
