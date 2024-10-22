"use client"
import React from "react";

const About = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-full p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-gray-800 text-center">
                            <u>About Us</u>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 text-center">
                            Welcome to <b>LMHY</b> - Let Me Help You, your trusted partner for freelance work tailored to startups and businesses seeking customized solutions. With over a year of experience in web development and design, we specialize in transforming your ideas into reality.
                            <br />
                            At <b>LMHY</b>, we understand the unique challenges faced by new ventures and strive to offer personalized services that fit your specific needs. Whether you're launching a startup or require bespoke development and design work, we're here to help you succeed. From intuitive website designs to robust, scalable development solutions, we handle it all with creativity, precision, and dedication.
                            <br />
                            Let us take the complexity out of your projects, so you can focus on what matters most – growing your business.
                            <br />
                            <b>Let Me Help You — because your success is our priority.</b>
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-sm text-gray-600">© 2024 LMHY. All rights reserved.</p>
            </div>
        </div>
    );
};

export default About;
