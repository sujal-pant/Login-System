import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full py-3 bg-transparent z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <a className="text-xl font-bold text-white" href="#page-top">
          UserHub
        </a>
        <button
          className="text-white focus:outline-none md:hidden"
          type="button"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <div className="hidden md:flex space-x-4">
          <Link
            className="no-underline text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-700 hover:to-indigo-700 rounded-full py-2 px-4 transition duration-300 ease-in-out shadow-lg transform hover:scale-105"
            to="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
