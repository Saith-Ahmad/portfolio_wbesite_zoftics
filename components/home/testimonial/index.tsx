'use client'
import React from "react";
import Image, { StaticImageData } from "next/image"; 
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  designation: string;
  testimonial: string;
  image: StaticImageData; 
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, designation, testimonial, image }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: -75 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.25 }}
    className="bg-black bg-opacity-50 backdrop-blur-lg p-6 rounded-lg shadow-md flex flex-col card_shadow">
      <div className="flex items-center mb-4">
        <Image src={image} alt={name} width={50} height={50} className="rounded-full mr-4" />
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-sm text-gray-400">{designation}</p>
        </div>
      </div>
      <p className="text-white">{testimonial}</p>
    </motion.div>
  );
};

export default TestimonialCard;
