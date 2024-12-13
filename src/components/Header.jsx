import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 bg-black bg-opacity-90 text-white px-4 py-3 z-50 cursor-pointer">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <h1 className="text-lg font-bold flex-shrink-0">GYMFLUENCER</h1>

        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex flex-wrap justify-center space-x-4 lg:space-x-8 text-sm uppercase">
            <li><a href="#features" className="hover:underline">Routine</a></li>
            <li><a href="#diet-plan" className="hover:underline">Trainers</a></li>
            <li><a href="#workout-plan" className="hover:underline">Equipments</a></li>
            <li><a href="#blog" className="hover:underline">Blog</a></li>
            <li><a href="#faqs" className="hover:underline">FAQs</a></li>
            <li><a href="#contactus" className="hover:underline">Contact Us</a></li>
          </ul>
        </nav>

        <div className="flex space-x-2 mt-0 md:mt-0">
          <button className="bg-green-500 text-white px-4 sm:px-6 py-2 rounded-full font-semibold shadow-md hover:bg-green-600 hover:shadow-lg transition duration-300 w-full md:w-auto mt-2 md:mt-0">
            Get Started
          </button>

          <button className="border border-gray-300 text-gray-300 px-4 sm:px-6 py-2 rounded-full font-semibold hover:bg-gray-300 hover:text-black hover:shadow-lg transition duration-300 w-full md:w-auto hidden md:block">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
