import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <>
        <div className="fixed top-0 left-0 z-50 h-screen w-screen flex justify-center items-center">
            <div className="z-50 h-[95vh] w-[96vw] flex justify-center items-center">
                <motion.div 
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                transition={{ duration: 1, ease: [0.5, 0.2, 0.1, 1] }}
                className="h-full w-1/2 bg-[#383838] origin-top"></motion.div>
                <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                transition={{ duration: 1, ease: [0.5, 0.2, 0.1, 1] }}
                className="h-full w-1/2 bg-[#c7c7c7] origin-bottom"></motion.div>
            </div>
        </div>
    </>
  )
}

export default Contact