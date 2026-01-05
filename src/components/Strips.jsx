import React from "react";


const Stripes = () => {
    const shapes = [
        { type: "square", style: "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-500 to-pink-500" },
        { type: "circle", style: "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" },
        { 
            type: "triangle",
            style: "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-b from-pink-500 to-red-900",
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)"
        },
        { type: "rectangle", style: "w-8 h-4 md:w-10 md:h-5 lg:w-14 lg:h-7 bg-gradient-to-r from-yellow-500 to-orange-500" },
        { 
            type: "pentagon", 
            style: "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-indigo-500 to-cyan-500",
            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
        },
        { 
            type: "hexagon", 
            style: "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-teal-500 to-lime-500",
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
        },
    ];

    return (
        <div className="flex items-center mt-10 md:mt-20 px-2 md:px-0">
            {shapes.map((shape, index) => (
                <div
                    key={index}
                    className="h-12 md:h-16 lg:h-20 w-[16.66%] px-2 md:px-3 lg:px-5 flex justify-center items-center"
                >
                    <div 
                        className={`${shape.style} hover:rotate-180 transition-transform duration-300 ease-in-out`}
                        style={shape.clipPath ? { clipPath: shape.clipPath } : {}}
                    ></div>
                </div>
            ))}
        </div>
    );
};

export default Stripes;