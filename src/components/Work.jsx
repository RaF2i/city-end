import React, { useState, useEffect } from "react";
import { motion, useScroll } from "motion/react";


const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://images.unsplash.com/photo-1738168601630-1c1f3ef5a95a?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "50%",
      left: "17%",
      isActive: false
    },
    {
      url: "https://images.unsplash.com/photo-1735630455883-bca2c8da0c9a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "56%",
      left: "32%",
      isActive: false
    },
    {
      url: "https://images.unsplash.com/photo-1737741276705-569ebd946f5b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "45%",
      left: "48%",
      isActive: false
    },
    {
      url: "https://images.unsplash.com/photo-1736890722772-97aab67379a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "60%",
      left: "64%",
      isActive: false
    },
    {
      url: "https://images.unsplash.com/photo-1581086432225-c436eaf5f70e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
      top: "43%",
      left: "79%",
      isActive: false
    }
  ]);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const updateImagesOnScroll = (data) => {
      const progress = Math.floor(data * 100);
      
      setImages(prevImages => {
        return prevImages.map((img, index) => {
          let shouldBeActive = false;
          
          if (progress >= 2 && index === 0) shouldBeActive = true;
          if (progress >= 3 && index === 1) shouldBeActive = true;
          if (progress >= 5 && index === 2) shouldBeActive = true;
          if (progress >= 6 && index === 3) shouldBeActive = true;
          if (progress >= 8 && index === 4) shouldBeActive = true;
          
          return {
            ...img,
            isActive: shouldBeActive
          };
        });
      });
    };

    const unsubscribe = scrollYProgress.on("change", updateImagesOnScroll);
    
    return () => unsubscribe();
  }, [scrollYProgress]);

  const word1 = "CITY".split("");
  const word2 = "End".split("");

  return (
    <div className="w-full mt-10">
      <div className="relative max-w-screen mx-auto text-center ">
        <motion.h1 
          className=" tick text-[15vw] mr-[30%] overflow-hidden leading-none font-semibold tracking-widest select-none flex justify-center"
        >
          {word1.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: [0.33, 1, 0.68, 1] }}
              className="inline-block "
            >
              {letter}
            </motion.span>
          ))}

        </motion.h1>
        <motion.h1 
          className=" end text-[13vw] ml-[30%]   leading-none font-semibold select-none flex justify-center"
        >
          {word2.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.26, ease: [0.33, 1, 0.68, 1] }}
              className="inline-block "
            >
              {letter}
            </motion.span>
          ))}
          
        </motion.h1>
        <div className="hidden lg:block absolute top-0 w-full h-full">
          {images.map((elem, index) => 
            elem.isActive && (
              <motion.img
                key={index}
                className="absolute hover:scale-150 transition-transform duration-300 w-60 xl:w-80 rounded-lg -translate-x-1/2 -translate-y-1/2"
                src={elem.url}
                style={{ top: elem.top, left: elem.left }}
                alt=""
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
