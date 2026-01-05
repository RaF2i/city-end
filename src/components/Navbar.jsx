import React, { useState } from "react";
import { motion } from "motion/react"
import Button from "./Button";

const Navbar = () => {
  const links = ["Home", "Work", "Culture", "", "News"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative max-w-screen-xl mx-auto py-4 md:py-6 px-4 md:px-6 bg-zinc-800 flex items-center justify-between">
     
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-zinc-400"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      />

      <div className="flex items-center w-full md:w-auto justify-between md:justify-start">
        <h1 className="te text-2xl md:text-4xl"><span className="texx">C</span>E</h1>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex nav links gap-6 xl:gap-14 ml-10 xl:ml-20">
          {links.map((elem, index) =>
            elem ? (
              <a
                key={index}
                className="text-xs xl:text-sm flex items-center gap-1"
                href="#"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0 .12em #00FF19" }}
                    className="inline-block w-1 h-1 rounded-full bg-green-500"
                  ></span>
                )}
                {elem}
              </a>
            ) : (
              <motion.span
                key={index}
                className="w-[2px] h-8 bg-zinc-400"
                initial={{ height: 0 }}
                animate={{ height: "32px" }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
              ></motion.span>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="flex flex-col gap-1.5">
            <span className={`w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full bg-zinc-800 border-t border-zinc-700 py-4 px-4 z-40"
        >
          {links.filter(link => link).map((elem, index) => (
            <a
              key={index}
              className="block py-3 text-sm border-b border-zinc-700 last:border-0"
              href="#"
              onClick={() => setIsMenuOpen(false)}
            >
              {elem}
            </a>
          ))}
        </motion.div>
      )}

      <div className="hidden md:block">
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
