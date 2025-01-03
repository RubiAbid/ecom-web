'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { client } from "@/sanity/lib/client"; // Sanity client import
import imageUrlBuilder from '@sanity/image-url'; // Image URL builder import

// Initialize image URL builder
const builder = imageUrlBuilder(client);

// Define the specific type for the image source
interface ImageAsset {
  _ref: string;
}

// Update the urlFor function to accept the correct type
function urlFor(source: ImageAsset) {
  return builder.image(source);
}

// Interface for Flower
interface Flower {
  _id: string;
  name: string;
  description: string;
  price: string;
  image: ImageAsset; // Adjusted to match Sanity image format
}

const FlowerList = () => {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedFlower, setSelectedFlower] = useState<Flower | null>(null);
  const [cart, setCart] = useState<Flower[]>([]);

  // Fetch flowers from Sanity
  useEffect(() => {
    const fetchFlowers = async () => {
      const data = await client.fetch(
        `*[_type == "flower"]{
          _id,
          name,
          description,
          price,
          image
        }`
      );
      setFlowers(data);
    };

    fetchFlowers();
  }, []);

  // Open modal with selected flower's details
  const openModal = (flower: Flower) => {
    setSelectedFlower(flower);
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedFlower(null);
  };

  // Add flower to cart
  const addToCart = (flower: Flower) => {
    const existingItem = cart.find((item) => item._id === flower._id);
    if (existingItem) {
      alert(`${flower.name} is already in your cart!`);
      return;
    }
    setCart([...cart, flower]);
    alert(`${flower.name} added to your cart!`);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">New Arrival Items</h2>

        {/* Flower list display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {flowers.map((flower) => (
            <div
              key={flower._id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={urlFor(flower.image).url()}
                  alt={flower.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{flower.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{flower.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-purple-600">{flower.price}</span>
                <button
                  onClick={() => openModal(flower)}
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-all duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && selectedFlower && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
              <div className="flex items-center">
                {/* Image on the left */}
                <div className="w-1/2 pr-8">
                  <Image
                    src={urlFor(selectedFlower.image).url()}
                    alt={selectedFlower.name}
                    width={600}
                    height={450}
                    className="rounded-lg"
                  />
                </div>

                {/* Text on the right */}
                <div className="w-1/2">
                  <h2 className="text-3xl font-bold text-center mb-4">{selectedFlower.name}</h2>
                  <p className="text-xl font-semibold text-gray-700 mb-4">{selectedFlower.price}</p>
                  <p className="text-base text-gray-600 mb-6">{selectedFlower.description}</p>
                  <p className="text-base text-gray-600 mb-6">
                    Celebrate your birthday with special flowers! We provide quality flowers. Access to new collections, invitations to special events, and personalized bouquets with us. Be with us and make your events special!
                  </p>

                  {/* Add to Cart button with margin-bottom */}
                  <button
                    onClick={() => addToCart(selectedFlower)}
                    className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-all duration-300 mb-4"
                  >
                    Add to Cart
                  </button>

                  {/* Close button */}
                  <button
                    onClick={closeModal}
                    className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-all duration-300 mx-2"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cart Display */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-lg text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item._id} className="flex justify-between items-center border-b py-2">
                  <div className="flex items-center">
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded-lg mr-4"
                    />
                    <span className="text-lg font-semibold text-gray-800">{item.name}</span>
                  </div>
                  <span className="text-lg text-purple-600">{item.price}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlowerList;
