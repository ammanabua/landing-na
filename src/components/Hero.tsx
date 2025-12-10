'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: { duration: 0.8, ease: "easeIn" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <main className='hero flex flex-col w-full' ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.25 } : { opacity: 0 }}
          transition={{ duration: 1, ease: isInView ? "easeOut" : "easeIn" }}
          className='absolute bg-black h-screen w-full opacity-25 top-0 z-[5]'></motion.div>
        <motion.section
            initial="hidden"
            animate={isInView ? "visible" : "exit"}
            variants={containerVariants}
            className="flex flex-col items-center justify-center text-center w-full h-screen text-white z-10 relative">
            <motion.h1
              variants={headingVariants}
              className="text-4xl md:text-6xl font-bold leading-tight">
              <span className='text-blue-300 drop-shadow-lg'>Transform</span> Challenges Into{' '}
              <span className='bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg'> Growth</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl mt-6 text-gray-200 max-w-2xl">
              Lead with Clarity and Purpose
            </motion.p>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}>
              <Button variant="default" size="lg" className='mt-8 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow'>
                  Let&apos;s Work Together
              </Button>
            </motion.div>
        </motion.section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.25 } : { opacity: 0 }}
          transition={{ duration: 1, ease: isInView ? "easeOut" : "easeIn" }}
          className='absolute bg-black h-screen w-full opacity-25 top-0'></motion.div>
    </main>
  )
}

export default Hero