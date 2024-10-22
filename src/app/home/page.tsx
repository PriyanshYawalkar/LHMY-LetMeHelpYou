"use client"
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";


const HeroSection = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center px-4 sm:px-6 lg:px-">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                        <h1
                            className="text-5xl md:text-6xl font-bold mb-4 text-gray-800 transition-all duration-300 ease-in-out"
                            style={{ transform: isHovered ? 'translateY(-5px)' : 'translateY(0)' }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            A single platform to help you for your
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8">Startup, Freelance & Other work</p>
                        <button
                            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center transition-all duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            aria-label="Learn More"
                        >
                            <a href="mailto:yawalkarpriyansh@gmail.com">E-mail Us</a>
                            <FaArrowRight className="ml-2" />
                        </button>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <img
                                src="././images/demo.jpg"
                                alt="sample work image"
                                className="rounded-lg shadow-2xl transition-all duration-300 ease-in-out hover:shadow-3xl"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            />
                            {isHovered && (
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300">
                                    <p className="text-white text-2xl font-bold">Explore Our Services</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-sm text-gray-600">© 2024 LMHY. All rights reserved.</p>
            </div>
        </div>
    );
};

export default HeroSection;