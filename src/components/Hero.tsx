import React from 'react'
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className='hero flex flex-col w-full'>
        <main>
            <section className="hero flex flex-col items-center justify-center text-center w-full h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                {/* <Image
                    className="dark:invert"
                    src="/bg.jpg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                    /> */}
                <h1 className="text-4xl font-bold">Coaching Can Change Everything</h1>
                <p className="text-xl mt-4"></p>
                <Button variant="default" size="lg" className='mt-8'>
                    Book a Session
                </Button>
            </section>
        </main>
    </div>
  )
}

export default Hero