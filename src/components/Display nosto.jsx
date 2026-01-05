import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const Product = ({ val, mover, count }) => {
  return (
    <div
      onMouseEnter={() => mover(count)}
      className="w-full h-[20rem] py-20 text-white"
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-5xl font-semibold">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex items-center gap-5">
            {item.live && <Button title1="Check Out" />}
            {item.case && (
              <Button title1="Case Study" title2="View More" eyes={true} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
      image:
        "https://images.unsplash.com/photo-1738168601630-1c1f3ef5a95a?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
      image:
        "https://images.unsplash.com/photo-1735630455883-bca2c8da0c9a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
      image:
        "https://images.unsplash.com/photo-1737741276705-569ebd946f5b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
      image:
        "https://images.unsplash.com/photo-1736890722772-97aab67379a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [pos, setPos] = useState(null);

  const mover = (val) => {
    setPos(val * 20);
  };

  return (
    <div className="mt-32 relative">
      {products.map((item, index) => (
        <Product key={index} val={item} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[30rem] h-[20rem] bg-white left-[44%] overflow-hidden rounded-lg shadow-lg"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="absolute w-full h-full top-0 left-0"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
