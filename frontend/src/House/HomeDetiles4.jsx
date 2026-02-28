import React, { useState } from 'react';
import { FaRegStar } from "react-icons/fa6";
import HomeDetiles5 from './HomeDetiles5';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


export const HomeDetiles4 = () => {
    const testimonials = [
        {
            name: 'Nikhilesh',
            image: '/images.png',
            message: `Pincode pillars is a highly experienced and honest real estate agency that 
            provides exceptional support. They are always available to address any queries 
            and offer satisfactory answers. I highly recommend contacting Pincode Realty for your property search.`,
            rating: 5,
        },
        {
            name: 'Subhankar',
            image: '/images.png',
            message: ` Working with Pincode pillars was an absolute pleasure. 
          From the moment we began our property search to the day we made the purchase,
            they were there for us, guiding, advising, and assisting every step of the way.T
           heir support made the entire process smooth and enjoyable.`,
            rating: 5,
        },
        {
            name: 'Pravin',
            image: '/images.png',
            message: `Their team of experienced professionals provided full support t
            hroughout the process. We highly recommend their services for all your property needs. Trust Pincode pillars to ensure 
            a smooth and comfortable experience with any real estate transaction.`,
            rating: 5,
        },
    ];

    const faqs = [
        {
          question: "What is Pincode Pillars?",
          answer: "Pincode Pillars is a real estate platform offering hyperlocal property services through trained local consultants.",
        },
        {
          question: "How does the Pincode Consultant model work?",
          answer: "Each pincode is managed by a dedicated, trained local consultant — called a Pincode Entrepreneur — who handles all property-related services in that specific area. This ensures hyperlocal expertise and faster, more reliable service.",
        },
        {
          question: "Can I buy or rent a property through Pincode Pillars?",
          answer: "Yes, Pincode Pillars offers both buying and renting options across multiple property types.",
        },
        {
          question: "Are the property listings on your site verified?",
          answer: "Yes, all listings go through a verification process to ensure authenticity and accuracy.",
        },
        {
          question: "What types of properties do you deal with?",
          answer: "We deal with residential, commercial, and rental properties including plots, villas, apartments, and offices.",
        },
        {
          question: "What support do I get from Pincode Pillars?",
          answer: "Our consultants assist you through the entire property journey — from search to legal, documentation, and handover.",
        },
        {
          question: "Can I sell my property through Pincode Pillars?",
          answer: "Absolutely. You can list and sell your property through our local consultants.",
        },
        {
          question: "Do you provide legal and finance assistance?",
          answer: "Yes, we provide legal verification, documentation support, and finance assistance through partner banks.",
        },
        {
          question: "Is Pincode Pillars available only in Chennai?",
          answer: "Currently, we are focused on Chennai, but expansion plans are underway.",
        },
        {
          question: "How can I get in touch with a local consultant?",
          answer: "You can contact a consultant via our website by selecting your pincode or contacting our support team.",
        },
      ];
    
      const [openIndex, setOpenIndex] = useState(null);
    
      const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    
      const leftFAQs = faqs.slice(0, 5);
      const rightFAQs = faqs.slice(5);

    return (
        <>
            <div className="bg-amber-300  py-12 px-20 mt-10 m-10 rounded-2xl shadow-md">
                <div className="flex flex-row mr-10  md:flex-row items-center justify-between gap-2">
                    <div className="text-left">
                        <h1 className="md:text-3xl font-bold mb-2 text-2xl md:font-bold md:mb-2">Find Your Dream Property!</h1>
                        <p className="md:text-lg ">We are offering the best real estate properties for everyone.</p>
                    </div>
                    <button className="bg-black text-white px-6 mt-10 py-2 rounded-full hover:bg-gray-800 transition">
                        Contact Now
                    </button>
                </div>
            </div>
            <div className=" py-10 px-4 ml-15 mt-30">
                <h1 className="text-3xl font-bold mb-4">What Our Customers Say</h1>
                <p className="text-lg text-gray-700  mx-auto">
                    Our real estate industry has the highest ratings, and we take pride in it.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 m-20'>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className='border-0 p-4 rounded shadow'>
                        <img src={testimonial.image} alt={testimonial.name} className='w-16 h-16 ml-30 rounded-full mb-2' />
                        <h1 className='text-xl font-semibold'>{testimonial.name}</h1>
                        <p className='text-sm text-gray-700 font-bold mb-2'>{testimonial.message}</p>
                        <div className='flex ml-30'>
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <FaRegStar key={i} className='text-amber-400' />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

               <div className="max-w-6xl mx-auto p-6 ml-20">
                    <h2 className="text-3xl font-bold  text-blue-950 mb-6 mr-10">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[leftFAQs, rightFAQs].map((faqGroup, colIndex) => (
                        <div key={colIndex}>
                          {faqGroup.map((faq, index) => {
                            const realIndex = colIndex * 5 + index;
                            return (
                              <div key={realIndex} className="border-0 shadow rounded-2xl  py-5 p-3">
                                <button
                                  className="flex justify-between items-center w-full text-left font-semibold text-lg"
                                  onClick={() => toggleFAQ(realIndex)}
                                >
                                  {faq.question}
                                  {openIndex === realIndex ? (
                                    <FaChevronUp className="text-gray-500" />
                                  ) : (
                                    <FaChevronDown className="text-gray-500" />
                                  )}
                                </button>
                                {openIndex === realIndex && (
                                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
            <HomeDetiles5/>

        </>
    );
};
