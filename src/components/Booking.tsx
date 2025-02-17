'use client'
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';

const Booking = () => {
  return (
    <section className="w-full flex justify-center items-center py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <Image 
              src="/nahom.png" 
              alt="Nahom Abegaze" 
              className="rounded-lg w-full object-cover shadow-lg h-auto"
              width={150}
              height={200}
            />
            {/* Accent decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-lg -z-10"></div>
          </div>

          {/* Right side - Booking Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Life?</h2>
              <p className="text-gray-600 text-lg">
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
                      <h3 className="font-semibold mb-2">Session Duration</h3>
                      <p className="text-gray-600">30-minute discovery call</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Availability</h3>
                      <p className="text-gray-600">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg"
              className="group flex items-center gap-2 text-lg"
              onClick={() => window.open('#booking-calendar', '_blank')}
            >
              Schedule Your Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

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