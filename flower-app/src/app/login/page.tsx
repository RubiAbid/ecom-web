'use client'

import { useState } from 'react';
import Navbar from "@/components/Navbar";

const Login = () => {
  // State to toggle between Login and SignUp forms
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/login.jpg')" }} // Apply background image here
    >
      <Navbar />
      <div className="flex justify-center items-center h-full bg-opacity-60 translate-y-[140px] translate-x-10">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-2xl font-bold text-center mb-6">{isSignUp ? "Sign Up" : "Login"}</h2>

          {/* Toggle between Login and Sign Up forms */}
          {isSignUp ? (
            // Sign Up Form
            <form>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              />

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
              >
                Sign Up
              </button>
            </form>
          ) : (
            // Login Form
            <form>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              />

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
              >
                Login
              </button>
            </form>
          )}

          {/* Toggle button */}
          <div className="text-center mt-4">
            <button
              onClick={toggleForm}
              className="text-purple-600 hover:text-purple-700"
            >
              {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
