import React from 'react';

const Header = () => {
  return (
    <>
      <header className="sticky top-0 bg-black bg-opacity-90 text-white p-4 z-50 cursor-pointer">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <h1 className="text-lg font-bold">GYMFLUENCER</h1>

          <nav className="flex-1">
            <ul className="flex flex-wrap justify-center space-x-8 text-sm uppercase">
              <li><a href="#features" className="hover:underline">Routine</a></li>
              <li><a href="#diet-plan" className="hover:underline">Trainers</a></li>
              <li><a href="#workout-plan" className="hover:underline">Equipments</a></li>
              <li><a href="#blog" className="hover:underline">Blog</a></li>
              <li><a href="#faqs" className="hover:underline">FAQs</a></li>
              <li><a href="#contactus" className="hover:underline">Contact Us</a></li>
            </ul>
          </nav>

          <div className="flex flex-wrap space-x-4 mt-4 sm:mt-0">
            <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-green-600 hover:shadow-lg transition duration-300 w-full sm:w-auto">
              Get Started
            </button>

            <button className="border border-gray-300 text-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 hover:text-black hover:shadow-lg transition duration-300 w-full sm:w-auto">
              Login
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
