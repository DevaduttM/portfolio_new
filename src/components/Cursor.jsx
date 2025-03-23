import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = ({ hovered }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 w-16 h-16 rounded-full bg-white pointer-events-none z-50 ${
        hovered ? "mix-blend-difference scale-150" : "scale-100"
      }`}
      animate={{
        x: cursorPos.x - 32, 
        y: cursorPos.y - 32,
      }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.1,
      }}
    />
  );
};

export default Cursor;
