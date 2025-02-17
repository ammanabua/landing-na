'use client'
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';

const Booking = () => {
  return (
    <section className="w-full flex justify-center items-center py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative flex justify-center">
            <Image 
              src="/cta.png" 
              alt="Nahom Abegaze" 
              className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md object-contain shadow-lg h-auto"
              width={150}
              height={200}
            />
            {/* Accent decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 sm:w-48 sm:h-48 bg-blue-100 rounded-lg -z-10"></div>
          </div>

          {/* Right side - Booking Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Life?</h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Book a complimentary 30-minute discovery call. Let&apos;s discuss your goals 
                and see how I can help you achieve them.
              </p>
            </div>

            {/* Session Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Button 
                size="lg"
                className="group flex items-center gap-2 text-lg"
                onClick={() => window.open('#booking-calendar', '_blank')}
              >
                Schedule Your Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Additional Info */}
            <p className="text-sm text-gray-500">
              * All sessions are conducted via Zoom. You&apos;ll receive a confirmation email 
              with the meeting link upon booking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;