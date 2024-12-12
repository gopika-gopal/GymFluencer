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
    <section className="about-section relative overflow-hidden cursor-pointer">
      {/* Text Section */}
      <div
        className={`about-text ${
          scrollDirection === "down" ? "fade-out" : "fade-in"
        } transition-opacity duration-500 ease-in-out opacity-100`}
      >
        <h1 className="text-7xl sm:text-5xl lg:text-6xl font-bold text-white pb-20">
          ABOUT US
        </h1>
      </div>

      {/* Image Section */}
      <div
        className={`about-image-container ${
          scrollDirection === "down" ? "scale-up" : "scale-down"
        } transition-transform duration-700 ease-in-out transform`}
      >
        <img
          src="https://img.freepik.com/free-photo/man-training-with-dumbbells-smoke_23-2147752875.jpg?t=st=1733936004~exp=1733939604~hmac=b7bf616daec7fdf4481c67452311628b84fd00ec329cfd91b97e12c2be8446d2&w=740"
          alt="About Us"
          className="about-image w-full object-cover"
        />
      </div>
    </section>
  );
};

export default AboutSection;
