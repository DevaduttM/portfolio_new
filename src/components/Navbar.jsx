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
      className="md:z-10 fixed top-0 right-0 md:w-[50%] md:h-[5rem] md:bg-transparent md:flex hidden items-center md:mix-blend-difference md:flex-row flex-col justify-around overflow-hidden h-screen w-screen bg-[#1d1d1d] z-50"
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
    <AnimatePresence onExitComplete={() => {
      if(!showContact) setShowContact(false);}}>

      {showContact && 
       <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.5, 0.2, 0.1, 1] }}
          className="fixed top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-[#535353]"
        >
          <div className="z-50 md:h-[94vh] md:w-[96vw] flex justify-center items-center md:flex-row flex-col-reverse w-[100vw] h-[100vh]">
            <motion.div
              initial={{ opacity: 0.5, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0.5, scaleY: 0 }}
              transition={{ duration: 1, ease: [0.5, 0.2, 0.1, 1] }}
              className="h-full md:w-1/2 w-full bg-[#1d1d1d] origin-top flex justify-center items-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.5, 0.2, 0.1, 1],
                  delay: 0.6,
                }}
                className="flex items-center justify-center h-[90%] w-[90%] flex-col"
              >
                <h1 className="mt-10 text-white text-8xl font-Frontage tracking-tighter w-full text-center">
                  Get In
                </h1>
                <h1 className="text-white text-8xl font-Balladeer w-[50%] text-right">
                  Touch
                </h1>
                <form className="w-full h-full flex items-center justify-center flex-col">
                  <div className="flex flex-col gap-5 w-[70%]">
                    <div className="w-full flex justify-center items-center gap-5">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full h-[4rem] px-4 text-white border-[0.25px] border-[#c5c5c5]"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full h-[4rem] px-4 text-white border-[0.25px] border-[#c5c5c5]"
                      />
                    </div>
                    <textarea
                      placeholder="Message"
                      className="w-full h-[15rem] px-4 py-3 mt-5 text-white border-[0.25px] border-[#c5c5c5]"
                    ></textarea>
                    <button
                      type="submit"
                      className="bg-[#1b1b1b] text-white w-[30%] rounded-full border-[0.5px] border-[#c5c5c5] cursor-pointer hover:bg-[#d8d8d8] h-[4rem] font-Posterama tracking-wider transition-all duration-300 hover:text-black ease-in-out"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0.5, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0.5, scaleY: 0 }}
              transition={{ duration: 1, ease: [0.5, 0.2, 0.1, 1] }}
              className="h-full md:w-1/2 w-full bg-[#c7c7c7] origin-bottom relative flex items-center justify-center"
            >
              <div className="relative h-[20rem] w-3/4 bg-[#1f1e1e] rounded-xl shadow-2xl">
                <div className="w-full h-[14%] bg-[#1f6fae] rounded-t-xl flex items-center justify-start">
                  <div className="flex justify-start items-center w-1/4 gap-4 pl-5">
                    <div className="rounded-full h-4 aspect-square bg-[#e77a4d]"/>
                    <div className="rounded-full h-4 aspect-square bg-[#efc04e]"/>
                    <div className="rounded-full h-4 aspect-square bg-[#81cb72]"/>
                  </div>
                </div>
                <div className="absolute h-[86%] w-[95%] md:w-full flex justify-start items-start">
                  <div className="h-full w-[25%] bg-[#191918] flex justify-center items-start rounded-bl-xl">
                    <p className="text-white md:text-sm text-xs py-1 font-cascadia w-full mt-3 pl-1 bg-[#37363c]">Contact.json</p>
                  </div>
                  <div className="w-3/4 h-fit flex-col flex justify-start items-start">
                    <p className="text-gray-500 font-cascadia text-xs pt-1 pl-1"><span className="text-[#caca41]">{"{}"}</span> Contact.json {">"} ..</p>
                  <div className="w-full h-fit flex flex-col justify-start items-start">
                    <p className="text-[#dbd705] font-cascadia text-sm pt-1 pl-3">
                      <span className="text-gray-500 mr-3">1</span>{"{"}
                    </p>
                    <p className="text-white font-cascadia text-sm pt-1 pl-3">
                      <span className="text-gray-500 mr-8">2</span>"Name": <span className="text-[#ce753f]">"Devadutt Mohan"</span>,
                    </p>
                    <p className="text-white font-cascadia text-sm pt-1 pl-3">
                      <span className="text-gray-500 mr-8">3</span>"Email": <span className="text-[#ce753f]">"devaduttmohan.mec@gmail.com"</span>,
                    </p>
                    <p className="text-white font-cascadia text-sm pt-1 pl-3">
                      <span className="text-gray-500 mr-8">4</span>"LinkedIn": <a target="_blank" href="https://www.linkedin.com/in/devadutt-mohan/" className="text-[#ce753f]">"linkedin.com/in/devadutt-mohan/"</a>,
                    </p>
                    <p className="text-white font-cascadia text-sm pt-1 pl-3">
                      <span className="text-gray-500 mr-8">5</span>"Github": <a target="_blank" href="https://github.com/DevaduttM" className="text-[#ce753f]">"github.com/DevaduttM"</a>,
                    </p>
                    <p className="text-[#dbd705] font-cascadia text-sm pt-1 pl-3">
                      <span className="text-gray-500 mr-3">6</span>{"}"}
                    </p>
                  </div>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-[3rem] h-[3rem] absolute top-5 right-5 bg-[#383838] flex items-center justify-center rounded-full cursor-pointer"
                onClick={() => setShowContact(false)}
              >
                <RxCross1 className="text-2xl text-white" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </>
      }
    </AnimatePresence>
      </>
  );
};

export default Navbar;
