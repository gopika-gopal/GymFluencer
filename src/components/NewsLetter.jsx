import React from "react";
import { FiArrowRight } from "react-icons/fi";

const NewsLetter = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-20 bg-gradient-to-t from-black via-gray-700 to-black border-t border-gray-300 cursor-pointer">
      <div className="flex flex-col items-center p-8 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-3xl text-gray-300 font-semibold mb-6 text-center">NEWSLETTER</h2>
        <form
          action="#"
          method="POST"
          className="w-full flex items-center mb-5"
          aria-label="Newsletter Subscription"
        >
          <input
            type="email"
            name="email"
            aria-label="Email"
            className="flex-grow p-3 border border-gray-300 rounded-l-full text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            aria-label="Submit Email"
            className="p-3 bg-gray-600 text-white rounded-r-full hover:bg-blue-700 transition-all duration-300 border border-gray-300"
          >
            <FiArrowRight size={24} />
          </button>
        </form>
        <p className="text-gray-400 text-lg text-center">
          Subscribe to our newsletter
        </p>
      </div>

      <div className="flex flex-col justify-center items-center p-6 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-4xl text-gray-300 font-semibold mb-4 tracking-wider leading-relaxed text-left">
          GET IN SHAPE WITH OUR PRO TRAINERS
        </h2>
        <p className="text-2xl text-gray-300 mb-6 tracking-wider leading-relaxed text-left">
          REACH YOUR BODY GOALS IN NO TIME, CONTACT US
        </p>
        <p className="text-gray-500 text-lg tracking-widest leading-loose text-left">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using distribution of letters, as opposed to using.
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;
