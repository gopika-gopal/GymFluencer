import React from 'react';

const GridText = () => {
  return (
    <div className="bg-black cursor-pointer">
      <section className="bg-black text-white pt-20 pb-20">
        <div className="container mx-auto">
          <p className="text-4xl font-bold text-center w-4/6 mx-auto py-10">
            {/* Achieve Your Fitness Goals */}
          </p>
        </div>
      </section>

      <section className="py-1">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 bg-gradient-to-b from-black via-gray-900 to-gray-700">
            <div className="flex flex-col justify-center text-white text-center p-20 py-20 mb-20">
              <h2 className="text-6xl font-semibold transform transition-transform duration-300 hover:scale-105">
                Transform Your Health
              </h2>
            </div>

            <div className="flex flex-col justify-center text-white text-center p-20 py-20 mb-20">
              <p className="text-2xl leading-relaxed transform transition-transform duration-300 hover:scale-105">
                Our fitness plans are designed to help you build strength, lose weight, and improve your overall health. Start your journey with us and reach your fitness goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GridText;
