'use client'
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react'; // Social icons
import Image from 'next/image'; // Import Image component

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          {/* Replace the text 'Blossoms' with the image */}
          <div className="mb-4">
            <Image
              src="/lily bloom.webp" // Replace with the correct path to your image
              alt="Lily Bloom Logo"
              width={160} // Adjust the width as per your design
              height={80} // Adjust the height as per your design
              className="object-contain" // Ensures the image maintains its aspect ratio
            />
          </div>
          <p className="text-gray-300">Crafting beautiful floral arrangements to brighten your day, every day.</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/"><span className="hover:text-purple-400 cursor-pointer">Home</span></Link></li>
            <li><Link href="/shop"><span className="hover:text-purple-400 cursor-pointer">Shop</span></Link></li>
            <li><Link href="/about"><span className="hover:text-purple-400 cursor-pointer">About Us</span></Link></li>
            <li><Link href="/contact"><span className="hover:text-purple-400 cursor-pointer">Contact</span></Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>🌸 Custom Bouquets</li>
            <li>🚚 Same Day Delivery</li>
            <li>🎁 Gift Wrapping</li>
            <li>📅 Event Decoration</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-purple-400"><Facebook size={28} /></a>
            <a href="#" className="hover:text-purple-400"><Instagram size={28} /></a>
            <a href="#" className="hover:text-purple-400"><Twitter size={28} /></a>
          </div>
        </div>
        
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-12 border-t border-gray-800 pt-6">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Lily Blooms. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
