import React from 'react';

const GridText = () => {
  return (
    <div className="bg-black cursor-pointer">
      <section className="bg-black text-white pt-10 pb-10">
      <div className="container mx-auto">
  <p className="text-3xl text-gray-500 font-bold text-center w-5/6 mx-auto sm:w-4/6 py-6 font-merriweather italic">
    Achieve your fitness goals with personalized guidance and support.
  </p>
</div>
      </section>

      <section className="py-6">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 bg-gradient-to-b from-black via-gray-900 to-gray-700">
      <div className="flex flex-col justify-center text-white text-center p-10 sm:p-20">
        <h2 className="text-3xl text-gray-300 sm:text-4xl lg:text-6xl font-semibold transform transition-transform duration-300 hover:scale-105 font-serif italic">
          Transform Your Health
        </h2>
      </div>

      <div className="flex flex-col justify-center text-white text-center p-10 sm:p-20">
        <p className="text-base text-gray-300 sm:text-lg lg:text-2xl leading-relaxed transform transition-transform duration-300 hover:scale-105 font-serif italic">
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
