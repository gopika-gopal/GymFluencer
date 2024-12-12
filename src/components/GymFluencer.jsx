import React, { useEffect, useState } from "react";

const GymfluencerText = () => {
  const [inView, setInView] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState("duration-700");

  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setScrollingUp(true);
      } else {
        setScrollingUp(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            setAnimationSpeed(scrollingUp ? "duration-400" : "duration-700");
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("gymfluencer-text");
    observer.observe(element);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [scrollingUp]);

  return (
    <section className="bg-black text-white flex justify-center items-center py-7 border-t-2 border-gray-700 pt-20 cursor-pointer">
    <div
      id="gymfluencer-text"
      className={`text-6xl sm:text-8xl lg:text-9xl font-bold uppercase tracking-wide text-center transform transition-all ${animationSpeed} ${
        inView ? "animate-pop-from-bottom" : ""
      }`}
    >
      GYMFLUENCER
    </div>
  </section>
  
  );
};

export default GymfluencerText;
