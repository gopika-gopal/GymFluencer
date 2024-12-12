import React from "react";

const AboutText = () => {
  return (
    <section className="bg-black text-white py-20 sm:py-24 lg:py-32 cursor-pointer">
      <div className="container mx-auto px-6 text-center space-y-8 sm:px-12 lg:px-24">
        <p className="text-4xl text-gray-200 pb-12 sm:text-5xl lg:text-6xl font-semibold uppercase tracking-wider leading-relaxed">
          "Dedication leads to transformation"
        </p>
        <p className="text-lg pb-20 sm:text-xl lg:text-3xl text-gray-400 leading-relaxed sm:leading-loose tracking-normal">
          We are committed to empowering individuals to achieve their fitness
          goals with unwavering dedication and support. Our mission is to
          inspire you to unlock your true potential through perseverance and
          hard work.
        </p>
      </div>
    </section>
  );
};

export default AboutText;


