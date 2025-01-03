'use client'
import { useState, useEffect } from 'react'; // Add these imports
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Note from '@/components/Note';
import ProductList from "@/components/ProductList";
import Tagline from "@/components/Tagline";
import { client } from "@/sanity/lib/client";
import { Image as IImage } from "sanity";
import ProductCard from '@/components/ProductCard';

// Interface for product type
interface IProduct {
  title: string;
  _id: string;
  price: string;
  description: string;
  image: IImage;
}

export default function Home() {
  // State to store product data
  const [products, setProducts] = useState<IProduct[]>([]);

  // Fetch product data on component mount
  useEffect(() => {
    const fetchProductData = async () => {
      const res = await client.fetch(
        `*[_type == "product"]{
          price,
          _id,
          title,
          description,
          image
        }`
      );
      setProducts(res); // Set fetched data in the state
    };

    fetchProductData(); // Call the function to fetch data
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      <Header />
      <Navbar />
      <ProductCard />
      <ProductList products={products} /> {/* Pass the products to ProductList component */}
      <Note />
      <Tagline />
      <ContactUs />
      <Footer />
    </div>
  );
}