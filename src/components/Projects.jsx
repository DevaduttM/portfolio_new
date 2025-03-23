"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ImageSection = ({ src, title, link, index, offsetY }) => {
    const [hovered , setHovered] = useState(false);
  return (
    <div onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="relative md:h-[70vh] h-[50vh] w-screen flex justify-start items-start bg-black overflow-hidden cursor-default">
      <Image
        src={src}
        layout="fill"
        objectFit="cover"
        alt={title}
        className={`object-cover transition-transform duration-800 ease-in-out 
            ${hovered ? "md:scale-[1.52] scale-[1.82] brightness-25" : "md:scale-[1.5] scale-[1.8] brightness-30"}`}          
        style={{
          transform: `translateY(${(offsetY + index * 600) * -0.15}px)`,
          transition: "transform 0.1s ease-out",
          willChange: "transform",
        }}
      />
      <h1 className="text-white text-center text-5xl font-Frontage absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {title}
      </h1>
      <a href={link} target="blank" className={`${hovered ? `opacity-100` : `opacity-0`} text-white bg-[#000000] w-[10rem] h-[3rem] absolute bottom-[30%] flex justify-center items-center rounded-full font-Geogrotesque left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out`}>View Project</a>
    </div>
  );
};

const Projects = () => {
  const [offsetY, setOffsetY] = useState(0);
  const projectRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (projectRef.current) {
        const rect = projectRef.current.getBoundingClientRect();
        setOffsetY(rect.top);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    { src: "/interview.jpg", title: "AI Mock Interview Analysis", link: "https://github.com/DevaduttM/Mini-Project" },
    { src: "/car.jpg", title: "TorqHub", link: "https://github.com/DevaduttM/DBMS_Project"},
    { src: "/hospital.jpg", title: "Alz - AI", link: "https://github.com/DevaduttM/Dementia-Detection-System" },
  ];

  return (
    <div ref={projectRef} id = "project-container" className="h-fit w-screen flex items-start justify-center">
      <div className="bg-[#e6e6e6] w-screen flex items-center justify-center flex-col">
        <div className="h-[70vh] flex justify-center flex-col">
          <motion.h1 
          initial={{opacity: 0, x: -20}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.8}}
          className="text-black text-6xl font-Balladeer">My</motion.h1>
          <motion.h1
          initial={{opacity: 0, x: 20}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.8, delay: 0.3}}
          className="text-black text-7xl font-Posterama">Projects</motion.h1>
        </div>

        {projects.map((project, index) => (
          <ImageSection key={index} index={index} offsetY={offsetY} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
