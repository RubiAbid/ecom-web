import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai'; // Quick view icon
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; // Full and Half Star icons
import { Image as SanityImage } from "sanity";
import { useCart } from '@/context/CartContext'; // Import the CartContext hook
import imageUrlBuilder from '@sanity/image-url'; // Import the image URL builder
import { client } from "@/sanity/lib/client"; // Import your sanity client

// Initialize the image builder
const builder = imageUrlBuilder(client);
function urlFor(source: SanityImage) {
  return builder.image(source);
}

// Interface for Product
interface Product {
  _id: string;
  title: string;
  description: string;
  image: SanityImage; // Sanity image type
  price: string;
}

interface ProductListProps {
  products: Product[]; // Accept products as a prop
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const { addToCart } = useCart(); // Access the addToCart function from context

  const openQuickView = (product: Product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  // Function to render 4 full stars and 1 half star
  const renderStars = () => {
    const stars = [];

    // Add 4 full yellow stars
    for (let i = 0; i < 4; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
    }

    // Add 1 half yellow star
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);

    // Add 0 empty stars (to make it exactly 5 stars)
    while (stars.length < 5) {
      stars.push(<FaStar key={`empty-${stars.length}`} className="text-gray-300" />);
    }

    return stars;
  };

  const addToCartHandler = (product: Product) => {
    const cartItem = {
      id: product._id,  // Use _id as the CartItem id (string)
      name: product.title,  // Use title as the CartItem name
      price: product.price,  // Price stays the same
      quantity: 1,  // Default quantity is 1
      image: urlFor(product.image).url(),  // Map image to a valid URL
    };

    addToCart(cartItem);  // Call addToCart with mapped CartItem
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">New Arrival Items</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={urlFor(product.image).url()} // Use urlFor to generate the URL
                alt={product.title}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center", // Adjust this if necessary
                }}
                className="rounded-t-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{product.description}</p>

            {/* Star Rating: 4 full yellow stars and 1 half yellow star */}
            <div className="flex mb-4">
              {renderStars()}
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-purple-600">{product.price}</span>

              {/* Quick View icon */}
              <button
                onClick={() => openQuickView(product)}
                className="text-gray-600 hover:text-purple-600 transition-all duration-300"
              >
                <AiOutlineEye size={24} />
              </button>

              {/* Add to Cart Button */}
              <button
                onClick={() => addToCartHandler(product)}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="modal-container fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
            {/* Close button */}
            <button
              onClick={closeQuickView}
              className="absolute top-2 right-2 text-xl text-gray-600 hover:text-red-600"
            >
              &times;
            </button>
            <div className="flex justify-center mb-4">
              <Image
                src={urlFor(quickViewProduct.image).url()} // Use urlFor for quick view
                alt={quickViewProduct.title}
                width={300}
                height={300}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{quickViewProduct.title}</h3>
            <p className="text-sm text-gray-600">{quickViewProduct.description}</p>
            <p className="text-lg font-bold text-purple-600 mt-4">{quickViewProduct.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;