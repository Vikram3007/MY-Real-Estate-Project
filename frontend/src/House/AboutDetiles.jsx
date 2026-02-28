import React from 'react';
import aboutImg from '../assets/aboutimg1.webp';
import aboutImg2 from '../assets/aboutimg2.webp';
import aboutImg4 from '../assets/aboutimge4.webp';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import HomeDetiles5 from './HomeDetiles5';

const AboutDetails = () => {
    return (
        <>
            {/* About Us Section */}
            <div className="max-w-screen-xl mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/2 w-full">
                    <h2 className="text-2xl font-bold mb-4">About Us</h2>
                    <p className="mb-4">
                        Pincode Pillars is a next-generation, zero-brokerage real estate platform built to transform the way people buy, sell, or rent property in India. With a bold vision to become the most trusted real estate brand in every Indian city, we’re starting our journey from Chennai — one pincode at a time.
                    </p>
                    <p>
                        We work with a powerful network of Pincode Entrepreneurs — local consultants assigned to specific pincodes — offering tailored guidance, verified listings, and expert support across all property needs. From residential resale and PG rentals to commercial leasing and investment properties, Pincode Pillars is designed to be your go-to property consultant in Chennai — and soon, across India.
                    </p>
                </div>

                <div className="md:w-1/2 w-full relative">
                    <img
                        src={aboutImg}
                        alt="About Us"
                        className="w-full h-auto rounded-lg shadow-[0_10px_15px_-5px_rgba(0,0,0,0.3)]"
                    />
                </div>
            </div>

            {/* Our Strength Section */}
            <div className="max-w-screen-xl mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6 mt-10">
                <div className="md:w-1/2 w-full">
                    <img
                        src={aboutImg2}
                        alt="Our Strength"
                        className="w-full h-auto rounded-lg shadow-[0_10px_15px_-5px_rgba(0,0,0,0.3)]"
                    />
                </div>

                <div className="md:w-1/2 w-full">
                    <h2 className="text-2xl font-bold mb-4">Our Strength</h2>
                    <p className="mb-4">
                        At Pincode Pillars, we combine technology, transparency, and trust to make your property journey effortless. Our strength lies in offering:
                    </p>

                    {[
                        "A dedicated expert in your pincode — someone who knows the area like no one else.",
                        "No Brokerage — we keep your transactions clear and commission-free.",
                        "Verified property listings updated in real-time.",
                        "Full support in buying, renting, or selling real estate — all in one place.",
                        "A powerful back-end system for CRM, documentation, and deal tracking.",
                    ].map((item, idx) => (
                        <div key={idx} className="mb-2 flex items-start gap-2">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1" />
                            <p className="font-medium">{item}</p>
                        </div>
                    ))}

                    <p className="mt-4">
                        Our local-first model makes us different from traditional agencies. When you work with us, you work with someone who lives where you’re buying — making every deal smarter, safer, and faster.
                    </p>
                </div>
            </div>

            {/* Mission, Vision, Values Section */}
            <div className="max-w-screen-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/2 w-full">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
                        <p>
                            To deliver transparent, zero-brokerage real estate consulting across every Indian pincode, with local experts who understand customer needs and provide end-to-end support.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
                        <p>
                            To become the top real estate platform in India, led by 1,000+ Pincode Entrepreneurs, trusted by families, investors, and businesses in every corner of the country.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-2">Our Values</h2>
                        {[
                            "Transparency in every transaction",
                            "Local trust with national standards",
                            "Ethical and compliant operations",
                            "Future-ready technology for smarter service",
                            "Customer-first, always",
                        ].map((value, idx) => (
                            <div key={idx} className="mb-2 flex items-start gap-2">
                                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1" />
                                <p className="font-medium">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:w-1/2 w-full">
                    <img
                        src={aboutImg}
                        alt="Values"
                        className="w-full h-auto rounded-lg shadow-[0_10px_15px_-5px_rgba(0,0,0,0.3)]"
                    />
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="max-w-screen-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/2 w-full">
                    <img
                        src={aboutImg4}
                        alt="Why Choose Us"
                        className="w-full h-auto rounded-lg shadow-[0_10px_15px_-5px_rgba(0,0,0,0.3)]"
                    />
                </div>

                <div className="md:w-1/2 w-full">
                    <h2 className="text-2xl font-bold mb-4">Why Choose Pincode Pillars?</h2>

                    <p className="mb-3">
                        Whether you're buying your first home, renting an apartment, or selling an investment — Pincode Pillars simplifies your experience with real-time support and zero-hassle service. Our consultants are your personal real estate guides — not just brokers, but local experts.
                    </p>

                    <p className="mb-4">
                        We’re building a system where you never need to pay a middleman or get stuck with outdated property data again. You’ll always have a verified listing, a transparent process, and a local advisor who’s just a call away.
                    </p>

                    {[
                        "A dedicated local expert for your specific pincode",
                        "Zero-brokerage model — no hidden charges",
                        "Verified, updated listings only",
                        "Support for home loans, legal, and registration",
                        "Complete CRM tracking, status updates, and after-sale support",
                        "Assistance with resale, rental, lease, and PG services",
                        "After-sale support and on-call guidance",
                        "A brand that’s built on transparency and long-term trust",
                    ].map((value, idx) => (
                        <div key={idx} className="mb-2 flex items-start gap-2">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1" />
                            <p className="font-medium">{value}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom Section at Bottom */}
            <HomeDetiles5 />
        </>
    );
};

export default AboutDetails;
