'use client'; // Add this at the top to indicate client-side rendering
import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = () => {
  return (
    <div
      className="w-full max-w-[1500px] h-[300px] bg-cover bg-center flex"
      style={{
        backgroundImage: "url('/heru.jpg')", // Set the background image for the entire container
      }}
    >
      {/* Left Side: Text on top of the background image */}
      <div className="w-1/2 flex justify-center items-center text-center bg-purple-900 text-white p-8 relative opacity-80">
        <div>
          <h2 className="text-7xl font-extrabold leading-snug tracking-tight mb-2" style={{ fontFamily: 'cursive' }}>
            New Collection
          </h2>
          <hr />
          <div className="bg-purple-800 text-white py-2 mt-4">
            <h3 className="text-4xl max-w-4xl font-bold leading-snug tracking-tight" style={{ fontFamily: 'cursive' }}>
              <motion.div
                className="whitespace-nowrap text-lg sm:text-base md:text-lg lg:text-xl font-semibold animate-blink"
              >
                Available to order
              </motion.div>
            </h3>
          </div>
        </div>
      </div>

      {/* Right Side: Full background image */}
      <div className="w-1/2 bg-cover bg-center h-full relative"></div>
    </div>
  );
};

export default ProductCard;
