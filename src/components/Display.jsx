import React, { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const products = [
    {
        title: "New York",
        description:
            "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
        live: true,
        case: false,
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        gradient: "from-blue-200 via-blue-400 to-blue-50"
    },
    {
        title: "London",
        description:
            "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
        live: true,
        case: false,
        image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        gradient: "from-gray-200 via-gray-400 to-gray-50"
    },
    {
        title: "Tokyo",
        description:
            "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
        live: true,
        case: true,
        image: "https://plus.unsplash.com/premium_photo-1661902398022-762e88ff3f82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        gradient: "from-red-200 via-red-400 to-red-50"
    },
    {
        title: "Paris",
        description:
            "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
        live: true,
        case: true,
        image: "https://images.unsplash.com/photo-1736890722772-97aab67379a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        gradient: "from-pink-200 via-pink-400 to-pink-50"
    }
];

const Products = () => {
    const [pos, setPos] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const mover = (val) => {
        setPos(val * 20);
        setHoveredIndex(val);
    };

    const resetHover = () => {
        setHoveredIndex(null);
    };

    return (
        <div className="mt-16 md:mt-32 relative px-4 md:px-0">
            {products.map((item, index) => (
                <div 
                    key={index} 
                    className={`w-full min-h-[20rem] py-10 md:py-20 text-white 
                        ${hoveredIndex === index 
                            ? `bg-gradient-to-b ${item.gradient} text-zinc-700` 
                            : ''
                        } transition-all duration-500`}
                    onMouseEnter={() => mover(index)}
                    onMouseLeave={resetHover}
                >
                    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">{item.title}</h1>
                        <div className="dets w-full md:w-1/2 lg:w-1/3">
                            <p className="mb-6 md:mb-10 text-sm md:text-base">{item.description}</p>
                            <div className="flex items-center gap-3 md:gap-5 flex-wrap">
                                {item.live && <Button title1="Check Out" />}
                                {item.case && <Button title1="Case Study" title2="View More" eyes={true} />}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="hidden lg:block absolute top-0 w-full h-full pointer-events-none">
                <motion.div
                    initial={{ y: pos, x: "-50%" }}
                    animate={{ y: pos + `rem` }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
                    className="window absolute w-[25rem] xl:w-[30rem] h-[20rem] bg-white left-[44%] overflow-hidden"
                >
                    {products.map((item, index) => (
                        <motion.div
                            key={index}
                            animate={{ y: -pos + `rem` }}
                            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                            className="w-full h-full"
                        >
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Products;