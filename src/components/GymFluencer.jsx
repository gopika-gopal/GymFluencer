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
    if (element) observer.observe(element);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [scrollingUp]);

  return (
    <section className="bg-black text-gray-400 flex justify-center items-center py-10 border-t-2 border-gray-700 cursor-pointer">
      <div
        id="gymfluencer-text"
        className={`text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-serif uppercase tracking-wide text-center transform transition-all ${animationSpeed} ${
          inView ? "animate-pop-from-bottom" : ""
        }`}
      >
        GYMFLUENCER
      </div>
    </section>
  );
};

export default GymfluencerText;
