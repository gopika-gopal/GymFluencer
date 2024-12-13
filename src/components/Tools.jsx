import React from 'react';

const GymEquipment = () => {
    const equipmentImages = [
        'https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114174.jpg?ga=GA1.1.2115210507.1711006710&semt=ais_hybrid',
        'https://img.freepik.com/free-photo/big-dumbbells-white_144627-24203.jpg?ga=GA1.1.2115210507.1711006710&semt=ais_hybrid',
        'https://img.freepik.com/free-psd/barbell-training-isolated_23-2151870417.jpg?ga=GA1.1.2115210507.1711006710',
        'https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114143.jpg?ga=GA1.1.2115210507.1711006710&semt=ais_hybrid',
        'https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114169.jpg?ga=GA1.1.2115210507.1711006710&semt=ais_hybrid',
        'https://img.freepik.com/free-photo/close-up-hands-training-with-kettlebell_23-2149307706.jpg?ga=GA1.1.2115210507.1711006710&semt=ais_hybrid',
        'https://img.freepik.com/free-photo/sport-equipment_23-2148177621.jpg?ga=GA1.1.2115210507.1711006710&semt=ais_hybrid',
        'https://img.freepik.com/free-photo/sports-equipment-isolated-grey-pink-surface_176420-11908.jpg?ga=GA1.1.2115210507.1711006710&semt=ais_hybrid',
        'https://img.freepik.com/free-photo/back-school-arrangement-with-blue-backpack_23-2148666138.jpg?ga=GA1.1.2115210507.1711006710&semt=ais_hybrid',
        'https://img.freepik.com/free-photo/composition-with-neatly-organized-arranged-sport-items_23-2150275241.jpg?ga=GA1.1.2115210507.1711006710&semt=ais_hybrid'
    ];

    return (
        <>
            <div className="container mx-auto py-8 px-4 bg-black cursor-pointer">
                <div className="bg-black text-white flex justify-center items-center h-64">
                    <h1 className="text-7xl text-gray-200 font-bold uppercase mt-30">TRAINING EQUIPMENT</h1>
                </div>
                <div>
                    <p className="text-xl text-gray-500 font-bold mt-0 flex justify-center items-center">Best ones at affordable price. Shop now</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-8">
                    {equipmentImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative group transform transition-transform duration-500 hover:scale-110"
                        >
                            <img
                                src={image}
                                alt={`Image of gym equipment ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                                loading="lazy"
                            />
                            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-transparent text-white border-2 border-white py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:translate-y-2 group-hover:transition-transform group-hover:duration-500">
                                Shop Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default GymEquipment;
