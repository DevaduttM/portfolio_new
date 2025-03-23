"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Transition from "./Transition";
import { TypeAnimation } from "react-type-animation";

// Define AnimatedHeading outside of Landing component
const AnimatedHeading = React.memo(({ text }) => {
  const letters = text.split("");

  return (
    <h1 className="font-Balladeer text-white tracking-wider md:text-7xl text-4xl z-10">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: index * 0.2,
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </h1>
  );
});

const Landing = () => {
  const [hovered, setHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        id="home"
        className="relative h-screen w-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.5, 0.2, 0.1, 1], delay: 0.6 }}
          className="absolute inset-0 "
        >
          <Image
            src="/profile.png"
            alt="Background"
            fill
            className="object-cover scale-90 brightness-75"
            style={{ transform: `translateY(${scrollY * 0.25}px)` }}
          />
        </motion.div>

        <div className="h-fit w-fit flex items-center justify-center gap-3 flex-col">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center justify-center"
          >
            <h1 className="font-Frontage text-white md:text-9xl text-5xl z-10 font-bold text-center">
              DEVADUTT
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex w-full items-center justify-end"
          >
            <AnimatedHeading text="Mohan" />
          </motion.div>
        </div>

        {/* <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute bottom-[8rem] text-white text-4xl font-Helvetica"
        >
          Web Developer
        </motion.h1> */}
        <TypeAnimation
          sequence={["Web Developer", 2000, "Photographer", 2000]}
          wrapper="span"
          speed={40}
          style={{
            fontSize: "2em",
            display: "inline-block",
            color: "white",
            zIndex: 10,
            fontFamily: "GeoGrotesque",
            position: "absolute",
            bottom: "8rem",
            letterSpacing: "0.1em",
          }}
          repeat={Infinity}
        />
      </div>
    </>
  );
};

export default Transition(Landing);
