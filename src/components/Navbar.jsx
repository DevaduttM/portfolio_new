"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";
import Landing from "./Landing";
import Contact from "./Contact";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const navItems = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Projects", link: "project-container" },
    { name: "Certificates", link: "certificates" },
  ];

  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    if (showContact) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [showContact]);

  const [scrambledTexts, setScrambledTexts] = useState(
    navItems.map((item) => item.name)
  );
  const [contactText, setContactText] = useState("Contact");

  const scramble = (str) => {
    return str
      .split("")
      .map((char) =>
        char === " " ? " " : String.fromCharCode(33 + Math.random() * 94)
      )
      .join("");
  };

  const handleMouseEnter = (index, isContact = false) => {
    let iterations = 0;
    const originalText = isContact ? "Contact" : navItems[index].name;

    const interval = setInterval(() => {
      if (isContact) {
        setContactText(scramble(originalText));
      } else {
        setScrambledTexts((prev) => {
          const updated = [...prev];
          updated[index] = scramble(originalText);
          return updated;
        });
      }

      iterations++;
      if (iterations > 3) {
        clearInterval(interval);
        if (isContact) {
          setContactText(originalText);
        } else {
          setScrambledTexts((prev) => {
            const updated = [...prev];
            updated[index] = originalText;
            return updated;
          });
        }
      }
    }, 75);
  };

  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: [0.5, 0.2, 0.1, 1], delay: 0.5 }}
      className="z-10 fixed top-0 right-0 w-[50%] h-[5rem] bg-transparent flex items-center mix-blend-difference justify-around overflow-hidden"
    >
      {navItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.5, 0.2, 0.1, 1],
            delay: 0.5 + index * 0.1,
          }}
        >
          <Link
            to={item.link}
            smooth={true}
            duration={1500}
            onMouseEnter={() => handleMouseEnter(index)}
            className="relative font-Geogrotesque text-xl tracking-tighter mix-blend-difference cursor-pointer"
          >
            {scrambledTexts[index]}
          </Link>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.5, 0.2, 0.1, 1], delay: 1 }}
      >
        <Link
          to="contact"
          smooth={true}
          duration={1500}
          onClick={() => setShowContact(true)}
          onMouseEnter={() => handleMouseEnter(null, true)}
          className="relative font-Geogrotesque text-xl tracking-tighter mix-blend-difference cursor-pointer"
        >
          {contactText}
        </Link>
      </motion.div>
    </motion.div>
    <AnimatePresence>
      {showContact && 
        <>
                <div className="fixed top-0 left-0 z-50 h-screen w-screen flex justify-center items-center">
                    <div className="z-50 h-[94vh] w-[96vw] flex justify-center items-center">
                        <motion.div 
                        initial={{ opacity: 0.5, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0.5, scaleY: 0 }}
                        transition={{ duration: 1, ease: [0.5, 0.2, 0.1, 1] }}
                        className="h-full w-1/2 bg-[#383838] origin-top"></motion.div>
                        <motion.div
                        initial={{ opacity: 0.5, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0.5, scaleY: 0 }}
                        transition={{ duration: 1, ease: [0.5, 0.2, 0.1, 1] }}
                        className="h-full w-1/2 bg-[#c7c7c7] origin-bottom relative">

                          <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1}} 
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1, delay: 1 }} 
                          className="w-[3rem] h-[3rem] absolute top-5 right-5 bg-[#383838] flex items-center justify-center rounded-full cursor-pointer" onClick={() => setShowContact(false)}>
                            <RxCross1 className="text-2xl text-white  " />
                          </motion.div>
                        </motion.div>
                    </div>
                </div>
            </>
      }
    </AnimatePresence>
      </>
  );
};

export default Navbar;
