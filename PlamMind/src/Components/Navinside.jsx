import React from 'react';
import { Link } from 'react-router-dom';

export const Navinside = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold hover:text-blue-400 transition duration-300">
          Home
        </Link>
        <div className="space-x-4">
          <Link to="/register" className="text-white text-lg hover:text-blue-400 transition duration-300">
            See the Registered Users
          </Link>
         
        </div>
      </div>
    </nav>
  );
};
