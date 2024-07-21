import React from 'react';
import bg from '../assets/image.png'; // Correctly import the image

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20"
      style={{ backgroundImage: `url(${bg})` }} // Use the imported image
    >
      <div className="absolute inset-0 bg-blue-400 bg-opacity-60 z-0"></div>
      <div className="relative container mx-auto text-center z-10">
        <h1 className="text-5xl font-bold mb-4">Welcome to Mental Balance</h1>
        <p className="text-xl mb-8">Your go-to source for mental health awareness and healthy living tips.</p>
        <button
          className="bg-white text-blue-800 font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300"
          onClick={() => window.scrollTo({ top: document.getElementById('content').offsetTop, behavior: 'smooth' })}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
