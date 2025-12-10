'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <main className='hero flex flex-col w-full'>
        <motion.section
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }} className="flex flex-col items-center justify-center text-center w-full h-screen text-white z-10">
            {/* <Image
                className="dark:invert"
                src="/bg.jpg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
                /> */}
            <h1 className="text-4xl md:text-6xl font-bold"><span className='text-blue-800'>Transform</span> Challenges Into <span className='text-blue-800'> Growth</span></h1>
            <p className="text-xl mt-4">Lead with Clarity and Purpose</p>
            <Button variant="default" size="lg" className='mt-8'>
                Let&apos;s Work Together
            </Button>
        </motion.section>
        <div className='absolute bg-black h-screen w-full opacity-25 top-0'></div>
    </main>
  )
}

export default Hero