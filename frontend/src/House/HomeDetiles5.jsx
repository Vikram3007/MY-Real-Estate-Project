import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const HomeDetiles5 = () => {
  
  return (
    <>
   

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white mt-auto pt-30 ">

        <img src="/Logo.jpg" alt="Boblick Logo" className="h-15 p-2 mb-10 w-auto" />
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Properties</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p>
              Email:{" "}
              <a
                href="mailto:pincodepillars@gmail.com"
                className="underline"
              >
                pincodepillars@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+919884855955" className="underline">
                +91 9884855955
              </a>
            </p>
            <p>Location: Chennai, India</p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Subscribe to our Newsletter
            </h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-1/2 rounded-md text-black bg-white"
              />
              <button className="mt-2 w-1/2 bg-yellow-400 font-bold text-black py-3  rounded-md hover:bg-blue-700">
                Subscribe
              </button>
            </div>
            <div className="flex gap-2 p-5 ml-10">
              <FaFacebook size={24} />
              <FaTwitter size={24} />
              <FaInstagram size={24} />
              <CiLinkedin size={24} />
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 py-3 border-t border-gray-700">
          © 2025 Pincode Pillars. All rights reserved.
        </div>
      </footer>

    </>
  );
};

export default HomeDetiles5;
