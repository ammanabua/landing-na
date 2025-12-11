'use client'

import React, { useRef } from 'react'
import ServiceCard from './ServiceCard'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const services = [
    {
        image: "/one_one.jpg", 
        title: "Speaking", 
        description: "This is a sample description for the card. Replace this with your actual content."
    },
    {
        image: "/group.jpg", 
        title: "Coaching", 
        description: "This is a sample description for the card. Replace this with your actual content."
    },
    {
        image: "/dei.jpg", 
        title: "Consultation", 
        description: "This is a sample description for the card. Replace this with your actual content."
    },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.6, ease: 'easeIn' },
  },
}

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.6, ease: 'easeIn' },
  },
}

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <motion.div 
      ref={ref}
      className='flex flex-col items-center justify-center w-full bg-[#CCE0FF] px-4 py-16 overflow-hidden'
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      exit="exit"
      variants={containerVariants}
    >
        <motion.h2 
          className='text-4xl font-bold text-center text-slate-800'
          variants={titleVariants}
        >
          How I Help
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 mx-auto max-w-6xl"
          variants={containerVariants}
        >
            {services.map((service, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <ServiceCard image={service.image} title={service.title} description={service.description} />
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Services