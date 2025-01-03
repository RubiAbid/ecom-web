'use client'; // Add this at the top to indicate client-side rendering
import React from 'react';

const Note = () => {
  return (
    <div
      className="w-full max-w-[1500px] h-[500px] bg-cover bg-center flex"
      style={{
        backgroundImage: "url('/heru.jpg')", // Set the background image for the entire container
      }}
    >
<div className="w-full flex items-center text-center bg-purple-950 p-8 relative opacity-60 translate-x-[130px]">
  <div className="w-1/2 flex justify-start items-center pl-8">
    <h2 className="text-4xl text-white font-extrabold leading-snug tracking-tight mb-[240px]" style={{ fontFamily: 'cursive' }}>
      We are Blossoms
    </h2>
  </div>
  <div className="w-[900px] flex justify-center items-center text-center">
  <div className="text-white py-2 mt-4">
  <h3 
    className="text-4xl  text-white translate-x-[-180px] font-bold leading-tight tracking-tight" 
    style={{ 
      fontFamily: 'cursive', 
      whiteSpace: 'normal', 
    }}>
    We trust that the best, freshest flowers deliver the most noteworthy presentations.
  </h3>
</div>

  </div>
</div>
      {/* Right Side: Full background image */}
      <div className="w-1/2 bg-cover bg-center h-full relative"></div>
    </div>
  );
};

export default Note;
