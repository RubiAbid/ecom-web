'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className="bg-white text-purple-900 py-2">
      <div className="overflow-hidden">
        <motion.div
          className="whitespace-nowrap text-lg sm:text-base md:text-lg lg:text-xl font-semibold"
          animate={{ x: ['100%', '-100%'] }} // Move from right to left
          transition={{
            repeat: Infinity, // Make it loop infinitely
            duration: 20, // Adjust the duration for general speed
            ease: 'linear', // Smooth animation
          }}
        >
          Delivery Available All Over Pakistan
        </motion.div>
      </div>
    </div>
  )
}

export default Header
