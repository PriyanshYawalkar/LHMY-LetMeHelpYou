"use client"
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const ContactPage = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                        <h1
                            className="text-5xl md:text-6xl font-bold mb-4 text-gray-800 transition-all duration-300 ease-in-out"
                            style={{ transform: isHovered ? 'translateY(-5px)' : 'translateY(0)' }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            Get in Touch with Us
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8">We'd love to hear from you!</p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <form onSubmit={handleSubmit} className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center transition-all duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                aria-label="Submit"
                                onClick={() => setFormData({ name: '', email: '', message: '' })}
                            >
                                Submit
                                <FaArrowRight className="ml-2" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-sm text-gray-600">© 2024 LMHY. All rights reserved.</p>
            </div>
        </div>
    );
};

export default ContactPage;
