import React from "react";

const AboutText = () => {
  return (
    <section className="bg-black text-white py-16 sm:py-20 lg:py-32 cursor-pointer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center space-y-8">
        <p className="text-3xl sm:text-4xl lg:text-5xl text-gray-200 pb-8 font-semibold uppercase tracking-wide leading-relaxed">
          "Dedication leads to transformation"
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed sm:leading-loose tracking-normal px-2 sm:px-6 lg:px-12">
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
