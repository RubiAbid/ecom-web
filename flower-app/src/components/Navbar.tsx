'use client'
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-purple-950 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20"> {/* Increased height here */}
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              {/* Larger logo image */}
              <Image
          src="/lily bloom.webp" 
          alt="Lily Bloom Logo"
          width={200} // Set width (adjust as per requirement)
          height={80} // Set height (adjust as per requirement)
          className="object-contain" // Ensures the image doesn't stretch and maintains its aspect ratio
        />            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 font-serif">
            <Link href="/" className="text-lg font-semibold text-white hover:text-purple-300">
              Home
            </Link>
            <Link href="/product/1" className="text-lg font-semibold text-white hover:text-purple-300">
              Shop
            </Link>
            <Link href="/cart" className="text-lg font-semibold text-white hover:text-purple-300">
              Cart
            </Link>
            <Link href="/login">
<Button className="bg-purple-600 hover:bg-purple-700 text-white">Login</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-purple-800 px-4 py-4 space-y-4">
          <Link href="/" className="text-lg font-semibold text-white hover:text-purple-300 block">
            Home
          </Link>
          <Link href="/product/1" className="text-lg font-semibold text-white hover:text-purple-300 block">
            Shop
          </Link>
          <Link href="/cart" className="text-lg font-semibold text-white hover:text-purple-300 block">
            Cart
          </Link>
          <Link href="/login">
          <Button className="bg-purple-900 hover:bg-purple-700 text-white w-full">Login</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
