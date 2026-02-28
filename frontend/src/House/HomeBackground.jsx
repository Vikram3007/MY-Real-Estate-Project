import React, { useState } from 'react';
import HomeDetails from './HomeDetiles';

const HomeBackground = () => {
  const [activeButton, setActiveButton] = useState(null);
  const buttons = ['Buy', 'Rent', 'Commercial', 'PG Coliving'];

  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full min-h-screen bg-cover bg-center bg-black/15 shadow border-zinc-500 flex flex-col justify-center items-center px-4 py-10"
        style={{ backgroundImage: 'url("/bacground.jpg")' }}
      >
        {/* Heading */}
        <h1 className="text-black text-2xl sm:text-3xl md:text-5xl font-semibold mb-8 text-center">
          Find Your Perfect Property
        </h1>

        {/* Toggle Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {buttons.map((label) => (
            <button
              key={label}
              onClick={() => setActiveButton(label)}
              className={`py-2 px-4 rounded-md text-sm sm:text-base transition-colors duration-300 ${
                activeButton === label
                  ? 'bg-blue-900 text-white border-b-4 border-white'
                  : 'bg-gray-800 text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="w-full flex flex-col items-center gap-4 md:flex-row md:justify-center md:items-stretch">
          {/* Static Category */}
          <div className="font-semibold text-gray-700 rounded-lg bg-white px-5 py-3 text-sm shadow-sm">
            Residential
          </div>

          {/* Dropdown */}
          <div className="w-full md:w-auto">
            <select
              defaultValue=""
              className="w-full md:w-52 border border-gray-300 rounded-lg bg-white px-5 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              <option value="" disabled className="text-gray-400">
                + Select Type
              </option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="plot">Plot</option>
            </select>
          </div>

          {/* Text Input */}
          <input
            type="text"
            placeholder="Enter locality, landmark, or project..."
            className="border border-gray-300 rounded-lg px-5 py-3 w-full md:w-80 text-sm shadow-sm"
          />

          {/* Search Button */}
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg text-sm shadow-sm transition">
            Search
          </button>
        </div>

        {/* Tagline */}
        <h2 className="text-black text-base sm:text-lg md:text-2xl font-bold py-8 font-mono tracking-wide text-center">
          {/* You can animate this span with a typewriter effect */}
          <span className="typewriter">
            HyperLocal Experts, <span className="text-black font-semibold">100% Transparency</span>
          </span>
        </h2>
      </div>

      {/* Services Section */}
      <HomeDetails />
    </>
  );
};

export default HomeBackground;
