'use client'
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Booking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="w-full flex justify-center items-center py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div variants={imageVariants} className="relative flex justify-center">
            <Image 
              src="/cta.png" 
              alt="Nahom Abegaze" 
              className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md object-contain shadow-lg h-auto"
              width={150}
              height={200}
            />
            {/* Accent decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 sm:w-48 sm:h-48 bg-blue-100 rounded-lg -z-10"></div>
          </motion.div>

          {/* Right side - Booking Content */}
          <div className="space-y-6 text-center lg:text-left">
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Life?</h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Book a complimentary 30-minute discovery call. Let&apos;s discuss your goals 
                and see how I can help you achieve them.
              </p>
            </motion.div>

            {/* Session Info Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-base sm:text-lg">Session Duration</h3>
                      <p className="text-gray-600 text-sm sm:text-base">30-minute discovery call</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-base sm:text-lg">Availability</h3>
                      <p className="text-gray-600 text-sm sm:text-base">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <Button 
                size="lg"
                className="group flex items-center gap-2 text-lg"
                onClick={() => window.open('#booking-calendar', '_blank')}
              >
                Schedule Your Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Additional Info */}
            <motion.p variants={itemVariants} className="text-sm text-gray-500">
              * All sessions are conducted via Zoom. You&apos;ll receive a confirmation email 
              with the meeting link upon booking.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;