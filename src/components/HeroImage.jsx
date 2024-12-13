import React, { useState, useEffect } from "react";

const HeroImage = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = Math.min(Math.max(1, 1 + scrollY * 0.00025), 1.2);
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-screen bg-black relative cursor-pointer overflow-hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))",
        }}
      ></div>

      {/* Background Image */}
      <div
        className="h-full w-full overflow-hidden"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center",
          transition: "transform 0.2s ease-out",
        }}
      >
        <img
          src="https://images.pexels.com/photos/897061/pexels-photo-897061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Gym Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroImage;
