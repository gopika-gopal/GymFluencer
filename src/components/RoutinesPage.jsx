import React from "react";

const RoutineSection = () => {
  const routines = [
    {
      title: "ABS",
      image:
        "https://img.freepik.com/free-photo/shirtless-sporty-male-holding-barbell-weights-isolated-grey-background_613910-16661.jpg?t=st=1733982440~exp=1733986040~hmac=3624e0f22dccf9bd5b3701a2fb115739f94cfc9bd386ce38127225cc3072736c&w=996",
    },
    {
      title: "BACK",
      image:
        "https://img.freepik.com/free-photo/young-powerful-sportsman-training-with-dumbbells-dark-wall_176420-518.jpg?ga=GA1.1.2115210507.1711006710&semt=ais_hybrid",
    },
    {
      title: "ARMS",
      image:
        "https://img.freepik.com/free-photo/side-view-athletic-man-torso-holding-weights_23-2148418161.jpg?ga=GA1.1.2115210507.1711006710&semt=ais_hybrid",
    },
    {
      title: "LEGS",
      image:
        "https://img.freepik.com/free-photo/concentrated-young-sportsman-make-sport-exercises_171337-7743.jpg?ga=GA1.1.2115210507.1711006710&semt=ais_hybrid",
    },
    {
      title: "SHOULDERS",
      image:
        "https://img.freepik.com/free-photo/muscular-sports-man-is-engaged-training-cross-fit-gym-concept-sport_169016-4708.jpg?ga=GA1.1.2115210507.1711006710&semt=ais_hybrid",
    },
  ];

  return (
    <section className="w-full cursor-pointer">
      <div className="bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white flex justify-center items-center h-64">
        <h1 className="text-7xl text-gray-200 font-bold uppercase">Routine</h1>
      </div>

      <div className="bg-black text-white py-16 px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {routines.map((routine, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 group"
            >
              <div className="w-60 h-60 bg-gray-700 rounded-full overflow-hidden transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg">
                <img
                  src={routine.image}
                  alt={`Image showing the ${routine.title} routine`}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <h2 className="text-lg font-semibold uppercase">{routine.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoutineSection;
