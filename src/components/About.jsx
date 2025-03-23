import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="w-screen h-screen bg-[#cacaca] flex items-center justify-center flex-col gap-5"
      >
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="font-Frontage text-black md:text-5xl text-5xl z-10 tracking-tighter text-left w-[30%]"
        >
          ABOUT ME
        </motion.h1>
        <motion.p 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-[#383838] w-[30%] font-GeoGrotesque text-xl text-left tracking-tighter">
          Hey! I'm a Third-year Computer Science student
          passionate about Web and Frontend development, working with
          React, Next.js, and JavaScript. I'm also interested in Machine
          Learning and enjoy exploring AI-driven solutions. <br />Moreover, I love capturing moments through photography. I'm always
          eager to learn, experiment, and collaborate on exciting projects.
          Let's connect and build something awesome!
        </motion.p>
        <div className="w-[30%] mt-7 flex items-center justify-start">
            <a
            className="text-[#c0c0c0] font-Helvetica text-lg text-left tracking-tighter bg-[#2e2e2e] w-[10rem] flex items-center justify-center rounded-full h-[3rem] hover:shadow-lg transition-all duration-300 ease-in-out" href="https://drive.google.com/file/d/1xmk-dW3gdLAQt_lBnF3nADnA07vYsREg/view?usp=drive_link" target="_blank" rel="noreferrer">
                View Resume
            </a>
        </div>
      </div>
    </>
  );
};

export default About;
