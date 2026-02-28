import React from 'react';
import HomeDetiles5 from './HomeDetiles5';

const Contactbackground = () => {
  return (
    <>
      {/* Background Image Section */}
      <div
        className="w-full h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/contact1.jpg')" }}
      >
        <div className="flex items-center justify-end h-full bg-black bg-opacity-50 px-6 md:px-20">
          <div className="text-right text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="flex flex-col md:flex-row justify-between gap-6 px-6 md:px-20 py-10">
        
        {/* LEFT: Enquiry Form */}
        <section className="w-full md:w-1/2 border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">What we can help you with</h2>

          <form className="space-y-6">
            {/* Enquiry Type */}
            <div>
              <label className="block font-medium mb-1" htmlFor="enquiryType">
                Select Enquiry Type
              </label>
              <select
                id="enquiryType"
                className="w-full border rounded px-4 py-2"
                required
              >
                <option value="">-- Please Select --</option>
                <option value="buy">Buy Property</option>
                <option value="sell">Sell Property</option>
                <option value="rent">Rent</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Name */}
            <div>
              <label className="block font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border rounded px-4 py-2"
                required
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block font-medium mb-1" htmlFor="mobile">
                Mobile
              </label>
              <input
                type="tel"
                id="mobile"
                className="w-full border rounded px-4 py-2"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1" htmlFor="email">
                Email ID
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded px-4 py-2"
                required
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="consent"
                className="mr-2 mt-1"
                required
              />
              <label htmlFor="consent" className="text-sm text-gray-700">
                I authorise <strong>Pincode Pillars</strong> to contact me via Email/SMS/Call. This overrides DND.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </section>

        {/* RIGHT: Contact Information */}
        <section className="w-full md:w-1/2 border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Interested in a project? Let’s talk</h2>

          <div className="mb-6 flex justify-between py-5">
            <h3 className="font-bold mb-1">Headquarters</h3>
            <address className="not-italic text-gray-700 mb-2 leading-relaxed">
              No.2, 1st Floor, KVIC NAGAR,<br />
              Velachery Rd, next to KTM Showroom,<br />
              Gowriwakkam, Chennai - 600073
            </address>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Locate in Maps
            </a>
          </div>

          <div className="mb-6 flex justify-between py-5">
            <h3 className="font-bold mb-1">Phone</h3>
            <a href="tel:+919884855955" className="text-blue-600 underline">
              +91 98848 55955
            </a>
          </div>

          <div className="mb-6 flex justify-between py-5">
            <h3 className="font-bold mb-1">Corporate Office</h3>
            <p>Monday to Saturday</p>
            <p>09:30 am to 06:30 pm</p>
          </div>

          <div className="mb-6 flex justify-between py-5">
            <h3 className="font-bold mb-1">Site Office</h3>
            <p>All Days</p>
            <p>10:00 am to 07:00 pm</p>
          </div>
        </section>
      </div>

      <div className="mt-5">
    <iframe
      title="Pincode Pillars Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0739309782634!2d80.19125527487255!3d12.93137888737933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fc6c171cfa7%3A0xc08f6b4e2213f6a7!2sGowrivakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600073!5e0!3m2!1sen!2sin!4v1682412345678!5m2!1sen!2sin"
      width="100%"
      height="250"
      allowFullScreen=""
      loading="lazy"
      className="rounded border"
    ></iframe>
  </div>
  <div className="mt-6">
 {/* Custom Section at Bottom */}
 <HomeDetiles5 />
 </div>
    </>
  );
};

export default Contactbackground;
