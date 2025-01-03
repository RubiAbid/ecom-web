'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', formData);
  };

  return (
    <div className="w-full py-16 bg-white h-[600px] relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/home.jpg" // Adjust the path to your image
          alt="Contact Image"
          layout="fill"
          objectFit="cover"
          className="opacity-100"
        />
      </div>

      {/* Overlay to make text readable */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content (Text & Form) */}
      <div className="relative max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-end items-center h-full text-right">
        <div className="md:w-1/2">
          <h2 className="text-5xl font-extrabold text-center text-white mb-4" style={{ fontFamily: 'cursive' }}>
            🌸
          </h2>
          <h2 className="text-4xl font-bold text-center text-white mb-6" style={{ fontFamily: 'cursive' }}>
            Sign Up To Newsletter
          </h2>
          <p className="text-lg text-white text-center mb-8">
            Sign up and get more updates and discount.
          </p>

          <div className="w-full bg-white p-4 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-purple-600 text-white rounded-r-md hover:bg-purple-700 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
