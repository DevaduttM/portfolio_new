import React from 'react'
import { motion } from 'framer-motion'

const Transition = (OgComponent) => {
  return function WrappedComponent(props) {
    return (
      <>
        <OgComponent {...props} />
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.9, ease: [0.8, 0.2, 0.16, 1] }}
          className="z-50 fixed h-screen w-screen top-0 flex flex-col items-center justify-center left-0 bg-[#ddcccc] origin-bottom">
        </motion.div>
        <motion.div 
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.9, ease: [0.8, 0.2, 0.16, 1], delay: 0.12 }}
          className="z-50 fixed h-screen w-screen top-0 left-0 flex flex-col-reverse bg-[#a8a8a8] origin-top">
        </motion.div>
        <motion.div 
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.9, ease: [0.8, 0.2, 0.16, 1], delay: 0.08 }}
          className="z-50 fixed h-screen w-screen top-0 left-0 flex flex-col-reverse bg-[#636363] origin-top">
        </motion.div>
        <motion.div 
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.8, ease: [0.8, 0.2, 0.16, 1], delay: 0.04 }}
          className="z-50 fixed h-screen w-screen top-0 left-0 flex flex-col-reverse bg-[#3d3d3d] origin-top">
        </motion.div>
        <motion.div 
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.7, ease: [0.8, 0.2, 0.16, 1] }}
          className="z-50 fixed h-screen w-screen top-0 left-0 flex flex-col-reverse bg-[#1b1b1b] origin-top">
        </motion.div>
      </>
    )
  };
};

export default Transition;
