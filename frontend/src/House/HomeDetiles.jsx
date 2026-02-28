import { useState } from 'react';
import { FaHandshake, FaRupeeSign, FaHotel, FaFileAlt, FaHome } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdLocate } from "react-icons/io";
import CountUp from 'react-countup';
import House from '../assets/house1.jpg';  // Make sure the path is correct
import HomeDetiles2 from './HomeDetiles2';

const HomeDetails = () => {
  // Define card colors for features
  const cardColors = [
    'bg-amber-100',
    'bg-blue-100',
    'bg-green-100',
    'bg-pink-100',
    'bg-purple-100',
    'bg-yellow-100',
  ];

  const features = [
    {
      icon: <FaHandshake />,
      title: "Easy Consultation",
      description: "We don’t just sell properties—we help you make the right choice. Our experts understand your needs and guide you with personalized solutions for buying, renting, or investing."
    },
    {
      icon: <FaRupeeSign />,
      title: "Financial Assistance",
      description: 'From home loans to legal paperwork, we simplify the process. Our team ensures smooth approvals, tax guidance, and transparent financial support.'
    },
    {
      icon: <FaFileAlt />,
      title: 'Sale Assistance',
      description: 'Our service goes beyond the sale. We assist with documentation, registration, and utility transfers—ensuring a hassle-free transition for you.'
    },
  ];

  const experiences = [
    {
      icon: <IoIosPeople />,
      count: 10,
      suffix: '+',
      title: 'Years Experience',
    },
    {
      icon: <FaHandshake />,
      count: 2500,
      suffix: '+',
      title: ' Happy Clients',
    },
    {
      icon: <FaLocationDot />,
      count: 100,
      suffix: '+',
      title: ' Locations',
    },
    {
      icon: <FaHotel />,
      count: 350,
      suffix: '+',
      title: ' Projects',
    },
  ];

  const [activeTab, setActiveTab] = useState('highlighted');

  const properties = [
    {
      bgImg: House,  // Use actual image imported from assets
      type: "2 BHK",
      status: "Ready to Move",
      title: "2 BHK RESALE APARTMENT",
      area: "950 sq.ft",
      location: "Vengambakkam",
      house: 'APARTMENT',
      category: 'highlighted',
    },
    {
      bgImg: House,  // Use actual image imported from assets
      type: "3 BHK",
      status: "Ready to Move",
      title: "Brigade Residences at WTC",
      area: "1200 sq.ft",
      location: "Tambaram",
      house: 'APARTMENT',
      category: 'highlighted',
    },
    {
      bgImg: House,  // Use actual image imported from assets
      type: "1 BHK",
      status: "Ready to Move",
      title: "Ottiambakkam 3BHK Resale Villa",
      area: "600 sq.ft",
      location: "Pallavaram",
      house: 'VILLA',
      category: 'highlighted',
    },
    {
      bgImg: House,  // Use actual image imported from assets
      type: "2 BHK",
      status: "Ready to Move",
      title: "Sobha Gardenia 2bhk Resale Villa",
      area: "900 sq.ft",
      location: "Chromepet",
      house: 'VILLA',
      category: 'highlighted',
    },
    {
      bgImg: House,  // Use actual image imported from assets
      type: "3 BHK",
      status: "Ready to Move",
      title: "Prestige Silver Springs 2BHK RESALE VILLA",
      area: "1300 sq.ft",
      location: "Medavakkam",
      house: 'VILLA',
      category: 'highlighted',
    },
    {
      bgImg: House,  // Use actual image imported from assets
      type: "2 BHK",
      status: "Ready to Move",
      title: "DRA D'ELITE 3.5 BHK Apartment",
      area: "980 sq.ft",
      location: "Guduvanchery",
      house: 'APARTMENT',
      category: 'highlighted',
    },
  ];

  // Filter properties based on active tab
  const filteredProperties = properties.filter(
    (item) => item.category === activeTab
  );

  return (
    <>
      {/* Why Choose Us Section */}
      <div className='w-full px-4 md:px-8 py-8'>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Text content */}
          <div className="flex-1 py-10 px-4 md:px-8 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold mb-4">Why Choose Us?</h2>
            <p className="text-gray-700 mb-6">
              We know real estate decisions are big. That’s why we make the process simple, stress-free, and personalized
              — with a local expert by your side, every step of the way.
            </p>
          </div>

          {/* Feature cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`${cardColors[index % cardColors.length]} flex flex-col items-start text-left p-6 border 
              border-amber-100 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300`}>
                <div className="text-blue-500 text-4xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
            <img src={House} alt="House visual" className='rounded-lg w-full' />
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-20 py-10'>
        {experiences.map((experience, index) => (
          <div key={index} className="flex flex-col items-start p-4 border-b-amber-200 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="text-green-500 text-4xl mb-2">
              {experience.icon}
            </div>
            <h1 className="flex gap-1 text-xl font-semibold text-black">
              <CountUp end={experience.count} duration={2} />{experience.suffix}
            
            <h1 className="text-xl font-semibold">{experience.title}</h1>
            </h1>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <h1 className="text-3xl px-4 md:px-20 py-6 font-bold text-gray-800">Projects in Chennai</h1>
      <div className="p-6 bg-white max-w-xl mx-auto space-y-4">
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 py-6">
          <button
            onClick={() => setActiveTab('highlighted')}
            className={`px-4 py-2 rounded-xl transition ${activeTab === 'highlighted'
              ? 'bg-blue-800 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
          >
            Top Highlighted
          </button>
          <button
            onClick={() => setActiveTab('recommended')}
            className={`px-4 py-2 rounded-xl transition ${activeTab === 'recommended'
              ? 'bg-blue-800 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
          >
            Recommended Properties
          </button>
        </div>
      </div>

      {/* Property Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-20">
        {filteredProperties.map((item, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div
              className="h-48 w-full bg-cover bg-center text-white p-3"
              style={{ backgroundImage: `url(${item.bgImg})` }}
            >
              <div className="flex gap-2">
                <span className="block font-bold bg-green-600 rounded p-2">Verified</span>
                <span className="block bg-blue-700 rounded p-2">{item.type}</span>
                <span className="bg-gray-800 p-2 rounded">{item.status}</span>
              </div>
            </div>

            <div className="p-4 space-y-2">
              <h1 className="text-lg font-semibold">{item.title}</h1>
              <div className="flex items-center gap-4 text-sm">
                <FaHome className='text-blue-800' />
                <p className='font-extrabold'>{item.house}</p>
                <IoMdLocate className='text-blue-800' />
                <p className='text-gray-600'>{item.location}</p>
                <p className='font-extrabold'>{item.area}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <HomeDetiles2/>
    </>
  );
};

export default HomeDetails;
