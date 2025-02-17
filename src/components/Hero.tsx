'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <main className='hero flex flex-col w-full'>
        <motion.section
            animate={{ rotate: 360 }} className="flex flex-col items-center justify-center text-center w-full h-screen text-white">
            {/* <Image
                className="dark:invert"
                src="/bg.jpg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
                /> */}
            <h1 className="text-4xl md:text-6xl font-bold"><span className='text-blue-800'>Coaching</span> Can <span className='text-blue-800'>Change</span> Everything</h1>
            <p className="text-xl mt-4">Shift your perspective to unlock your potential!</p>
            <Button variant="default" size="lg" className='mt-8'>
                Book a Consultation
            </Button>
        </motion.section>
    </main>
  )
}

export default Hero