'use client'
import React, { JSX } from 'react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Testimonials = (): JSX.Element => {
  const testimonials = [
    {
      name: "Ryan Parenti",
      role: "Startup Founder",
      image: "/api/placeholder/80/80",
      quote: "Working with Nahom has been a pleasure from begining to end. He always has insight, guidance, and a unique ability to solve problems. Highly recommended!",
      rating: 5,
      association: "6 months coaching program"
    },
    {
      name: "Thomas Bryant",
      role: "Senior Executive",
      image: "/api/placeholder/80/80",
      quote: "Nahom helped me immensely in many ways to progress my health (both physical and mental), relationships, and my overall grasp of my purpose in this life. He is extremely detail-oriented and profoundly motivating. Thanks to Nahom, I have acquired many essential skills to navigate the complexities of the human personal growth process.",
      rating: 5,
      association: "8 months executive coaching"
    },
    {
      name: "Luke Hills",
      role: "Career Transitioner",
      image: "/api/placeholder/80/80",
      quote: "Nahom’s coaching has guided me through major life decisions, helping me avoid pitfalls and align my career, finances, and relationships with my purpose. His insightful approach has not only brought tangible benefits but also boosted my confidence and integrity. I highly recommend him for optimizing performance, emotional well-being, and financial success.",
      rating: 5,
      association: "4 months career coaching"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 w-full flex justify-center items-center">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from professionals who have transformed their lives and careers 
            through our coaching partnership.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3">
                <div className="bg-blue-500 rounded-full p-2">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 italic"><q>{testimonial.quote}</q></p>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-4">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    width={80}
                    height={80}
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                {/* Program Type */}
                <div className="pt-2">
                  <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {testimonial.association}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="mt-16 text-center">
          <p className="text-gray-600">
            Join over <span className="font-semibold">200+ professionals</span> who have 
            achieved their goals through our coaching partnership
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;