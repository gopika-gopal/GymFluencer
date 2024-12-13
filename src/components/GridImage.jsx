import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const GridImage = () => {
  const trainers = [
    { name: "John Doe", charge: "$200/month", image: "https://img.freepik.com/free-photo/fitness-man_23-2148137698.jpg?ga=GA1.1.2115210507.1711006710&semt=ais_hybrid" },
    { name: "Jane Smith", charge: "$250/month", image: "https://img.freepik.com/free-photo/sports-man-spend-time-morning-gym_1157-28936.jpg?ga=GA1.1.2115210507.1711006710&semt=ais_hybrid" },
    { name: "Emily Johnson", charge: "$180/month", image: "https://img.freepik.com/free-photo/smiling-woman-with-jumping-rope_23-2147778543.jpg?ga=GA1.1.2115210507.1711006710&semt=ais_hybrid" },
    { name: "Michael Brown", charge: "$220/month", image: "https://img.freepik.com/free-photo/young-happy-athlete-using-mobile-phone-while-working-out-health-club_637285-8398.jpg?ga=GA1.1.2115210507.1711006710&semt=ais_hybrid" },
    { name: "Sophia Davis", charge: "$200/month", image: "https://img.freepik.com/free-photo/smiling-beautiful-brunette-female-boxer-sportswear-holds-protective-helmet-looking-camera-isolated-dark-textured-background_613910-19927.jpg?ga=GA1.1.2115210507.1711006710&semt=ais_hybrid" },
  ];

  return (
    <section className="py-16 px-4 bg-black text-white cursor-pointer">
      <div className="bg-black text-white flex justify-center items-center h-40 sm:h-64">
        <h1 className="text-4xl text-gray-200 sm:text-6xl font-bold uppercase">OUR TRAINERS</h1>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="shadow-lg bg-white text-black rounded-lg overflow-hidden relative group h-60 sm:h-80"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-50"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black bg-opacity-50 text-white">
                <p className="text-base sm:text-xl font-semibold">{trainer.name}</p>
              </div>
              <div className="absolute bottom-4 right-4 py-1 px-3 rounded-lg border border-white text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <p className="text-sm sm:text-base font-semibold">{trainer.charge}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-center items-center text-center shadow-lg rounded-lg bg-black group h-60 sm:h-80">
            <div className="flex flex-col items-center">
              <FiArrowRight size={36} className="text-white group-hover:scale-125 transition-transform duration-300" />
              <p className="text-base sm:text-lg font-semibold mt-2 group-hover:underline">GET A TRAINER</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridImage;
