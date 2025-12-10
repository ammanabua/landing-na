'use client'

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from 'framer-motion'


type ServiceCardProps = {
    image: string;
    title: string;
    description: string;
}


const ServiceCard = ({ 
  image, 
  title, 
  description,
}: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <Card className="w-full h-full">
        {/* Image Section */}
        <div className="h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={80}
            height={80}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <CardHeader>
          <motion.h3 
            className="text-xl font-semibold text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {title}
          </motion.h3>
        </CardHeader>

        <CardContent>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {description}
          </motion.p>
        </CardContent>

        <CardFooter className="flex justify-end gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              className="bg-slate-800 text-white font-semibold"
            >
              Learn More
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;