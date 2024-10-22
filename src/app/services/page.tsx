"use client"
import React, { useState } from "react";
import Image from "next/image";

const Services = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const services = [
        { title: "Startup Services", description: "Helping you launch your startup. From building your initial website to make you bigger", link: "#", image: "././images/startup.jpg" },
        { title: "Freelance Services", description: "Supporting your freelance career like Web Designign, Web Development, UI/UX.", link: "#", image: "././images/free.jpg" },
        { title: "SEO", description: "Supporting your SEO optimisation to keep you ahead of everyone.", link: "#", image: "././images/seo.jpg" },
        { title: "Copywritting", description: "Web Development, UI/UX, Social Media Managment & More.", link: "#", image: "././images/cw.png" },
        { title: "Consultation", description: "A consultant provides expert advice, solves problems, and develops strategies in specialized fields, offering flexible, project-based or retainer services", link: "#", image: "././images/con.png" },
        { title: "Other Services", description: "Assisting with various needs.", link: "#", image: "././images/os.jpg" },
    ];

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            onClick={() => window.location.href = service.link}
                        >
                            <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                            <h2 className="text-2xl font-bold mb-2 text-gray-800">{service.title}</h2>
                            <p className="text-gray-600">{service.description}</p>
                            {hoveredCard === index && (
                                <p className="text-white text-xl font-bold">Click to Learn More</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-sm text-gray-600"></p>
            </div>
        </div >
    );
};

export default Services;
