import React from 'react';
import AboutDetiles from './AboutDetiles';

const AboutBackground = () => {
  return (
    <div
      className="w-full h-96 bg-cover bg-center"
      style={{ backgroundImage: "url('/AboutBg.jpg')" }}
    >
      <div className="flex items-center justify-end h-full bg-opacity-50 px-6 md:px-20">
        <div className="text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold ">
            About Us
          </h1>
          <p className="text-white text-md md:text-md max-w-md  mt-4 md:mt-5">
            Luxury Real Estate Consulting, Powered by Local Expertise
          </p>
        </div>
      </div>
      <AboutDetiles/>
    </div>
  );
};

export default AboutBackground;
