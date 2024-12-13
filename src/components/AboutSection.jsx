import React, { useEffect, useState } from "react";

const AboutSection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollDirection(scrollTop > lastScrollTop ? "down" : "up");
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="about-section relative overflow-hidden cursor-pointer bg-black text-white">
      <div
        className={`about-text text-center ${scrollDirection === "down" ? "fade-out" : "fade-in"
          } transition-opacity duration-500 ease-in-out opacity-100`}
        style={{ position: "relative", zIndex: 10 }}
      >
        <h1 className="text-5xl sm:text-4xl md:text-6xl lg:text-7xl font-bold pb-10 md:pb-20">
          ABOUT US
        </h1>
      </div>

      <div
        className={`about-image-container ${scrollDirection === "down" ? "scale-up" : "scale-down"
          } transition-transform duration-700 ease-in-out transform mt-20`}
      >
        <img
          src="https://images.pexels.com/photos/1552108/pexels-photo-1552108.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="About Us"
          className="about-image w-full h-auto object-cover md:h-[500px] md:w-auto rounded-full sm:h-[150px] sm:w-[150px]" // Reduced size for mobile
        />


      </div>
    </section>
  );
};

export default AboutSection;
