import React from 'react';

const MediaSection = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
      <div className="grid grid-cols-2 gap-4">
        {/* Astronomical Images */}
        <div className="relative group cursor-pointer">
          <img
            src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=400"
            alt="Galaxy"
            className="w-full h-32 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg" />
        </div>
        
        <div className="relative group cursor-pointer">
          <img
            src="https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Nebula"
            className="w-full h-32 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg" />
        </div>

        <div className="relative group cursor-pointer">
          <img
            src="https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=400"
            alt="Earth from space"
            className="w-full h-32 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg" />
        </div>

        <div className="relative group cursor-pointer">
          <img
            src="https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Planet surface"
            className="w-full h-32 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg" />
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-400">
        <p className="mb-1">Serendipitously Discovered Asteroids</p>
        <p className="text-xs">Kepler Sar • Telescope • Asteroids • 1998-03-16</p>
      </div>

      {/* Quote Section */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg">
        <p className="text-white text-center italic">
          "I'm gonna be Hokage one day."
        </p>
        <div className="mt-2 flex justify-center">
          <img
            src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=100"
            alt="Avatar"
            className="w-12 h-12 rounded-full border-2 border-yellow-400"
          />
        </div>
      </div>
    </div>
  );
};

export default MediaSection;