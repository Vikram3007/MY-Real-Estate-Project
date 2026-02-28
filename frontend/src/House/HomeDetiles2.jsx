import React from 'react';
import { FaHome, FaBuilding, FaDollarSign, FaKey } from "react-icons/fa";
import { MdPerson } from "react-icons/md"; 
import HomeDetiles3 from './HomeDetiles3';


const HomeDetails2 = () => {
  const services = [
    {
      title: "Buy Property",
      description: "Find verified homes, plots, and commercial spaces across Chennai. Guided by your local Pincode Expert, every step of the way.",
      icon: <FaBuilding />,
    },
    {
      title: "Sell Property",
      description: "List your property with confidence. We help you find serious buyers, handle site visits, and manage the paperwork professionally. 🔹 Fast Closures | Transparent Process",
      icon: <FaHome />,
    },
    {
      title: "Commercial Services",
      description: "Lease, rent or buy office spaces, retail outlets, showrooms, and more — across prime business locations. 🔹 Local Market Insight | Legal Support",
      icon: <MdPerson />, // ✅ FIXED
    },
    {
      title: "Rent / Lease",
      description: "Whether it’s a home or office, get connected with verified tenants or landlords in your area. 🔹 PG, Residential, Commercial Rentals",
      icon: <FaDollarSign />,
    },
    {
      title: "PG / Co-Living",
      description: "Find or list shared accommodations with ease. Perfect for students, working professionals, and co-living setups. 🔹 Fully Managed | Verified Leads",
      icon: <FaKey />,
    },
    {
      title: "Consultation & Documentation",
      description: "From legal advice to agreement drafting, we offer full support for a smooth transaction. 🔹 Document Writing | Loan Assistance | Registration",
      icon: <FaBuilding />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center min-h-screen flex items-center justify-start text-white px-4 mt-10 bg-black/50"
        style={{
          backgroundImage: "url('/home.jpg')",
        }}
      >
        <div className="max-w-xl bg-black/60 p-6 rounded-lg mt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Services We Provide</h1>
          <p className="text-base md:text-lg">
            We offer end-to-end property solutions tailored for buyers, sellers, and investors in Chennai.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6 mb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg border-b-amber-100 rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-xl"
          >
            <div
              className="bg-blue-900 rounded-full p-6 flex items-center justify-center w-24 h-24"
              role="img"
              aria-label={service.title}
            >
              <div className="text-white text-3xl">
                {service.icon}
              </div>
            </div>
            <h1 className="mt-4 text-2xl font-semibold">{service.title}</h1>
            <p className="mt-4 text-gray-700 font-medium text-sm md:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Extra Component */}
      <HomeDetiles3 />
    </>
  );
};

export default HomeDetails2;
