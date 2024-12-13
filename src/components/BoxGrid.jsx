import React, { useEffect, useState } from 'react';

const BoxGrid = () => {
  const [isVisible, setIsVisible] = useState([false, false, false]);
  const [scrollingDown, setScrollingDown] = useState(true);

  const handleScroll = () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {
      const rect = box.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8) {
        setIsVisible((prev) => {
          const newVisibility = [...prev];
          newVisibility[index] = true;
          return newVisibility;
        });
      } else if (rect.top > window.innerHeight) {
        setIsVisible((prev) => {
          const newVisibility = [...prev];
          newVisibility[index] = false;
          return newVisibility;
        });
      }
    });

    const isScrollingDown = window.scrollY > window.pageYOffset;
    setScrollingDown(isScrollingDown);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 px-4 bg-gray-300 cursor-pointer">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div
            className={`box p-6 text-center transition-all duration-1000 transform ${isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${scrollingDown ? 'opacity-100' : ''}`}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 uppercase tracking-wide mb-4">
              Personalized Training
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Get tailored fitness plans designed to meet your specific needs and goals.
            </p>
          </div>

          <div
            className={`box p-6 text-center transition-all duration-1000 transform ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${scrollingDown ? 'opacity-100' : ''}`}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 uppercase tracking-wide mb-4">
              Expert Trainers
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Work with experienced trainers who are committed to your success.
            </p>
          </div>

          <div
            className={`box p-6 text-center transition-all duration-1000 transform ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${scrollingDown ? 'opacity-100' : ''}`}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 uppercase tracking-wide mb-4">
              State-of-the-Art Facilities
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Enjoy access to the best equipment and fitness environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxGrid;
