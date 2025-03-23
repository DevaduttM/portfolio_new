"use client";
import React, { useEffect } from "react";
import About from "@/components/About";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import { AnimatePresence } from "framer-motion";
import Scrollbar from "smooth-scrollbar";
import Projects from "@/components/Projects";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const container = document.querySelector("#scroll-container");
      if (container) {
        const scrollbar = Scrollbar.init(container);
        return () => {
          scrollbar.destroy();
        };
      }
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        <>
          <Navbar />
          <div
            id="scroll-container"
            className=" w-screen bg-black overflow-hidden"
          >
            <Landing />
            <About />
            <Projects />
          </div>
        </>
      </AnimatePresence>
    </>
  );
}
