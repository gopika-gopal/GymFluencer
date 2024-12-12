import React from 'react';

const BoxGrid = () => {
  return (
    <section className="py-40 px-4 bg-gray-300 cursor-pointer">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide mb-4 transition-colors duration-300 hover:text-blue-700">
              Personalized Training
            </h2>
            <p className="text-gray-600 text-base leading-relaxed transition-colors duration-300 hover:text-gray-800">
              Get tailored fitness plans designed to meet your specific needs and goals.
            </p>
          </div>
          <div className="rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide mb-4 transition-colors duration-300 hover:text-blue-700">
              Expert Trainers
            </h2>
            <p className="text-gray-600 text-base leading-relaxed transition-colors duration-300 hover:text-gray-800">
              Work with experienced trainers who are committed to your success.
            </p>
          </div>
          <div className="rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide mb-4 transition-colors duration-300 hover:text-blue-700">
              State-of-the-Art Facilities
            </h2>
            <p className="text-gray-600 text-base leading-relaxed transition-colors duration-300 hover:text-gray-800">
              Enjoy access to the best equipment and fitness environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxGrid;
