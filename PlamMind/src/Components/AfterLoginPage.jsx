import React from 'react';
import { Link } from 'react-router-dom';
const AfterLoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Welcome to UserHub</h1>
          <nav>
            <a href="/profile" className="mr-4 hover:underline">Profile</a>
            <a href="/settings" className="mr-4 hover:underline">Settings</a>
            <Link to="/" className="hover:underline">Logout</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Dashboard</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Hello, User!</h3>
          <p className="text-gray-600 mb-4">This is your main dashboard where you can access various features and settings.</p>
          <div className="flex justify-center">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
              Explore Features
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 UserHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AfterLoginPage;
