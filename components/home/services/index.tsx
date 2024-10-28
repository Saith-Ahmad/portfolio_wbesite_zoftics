'use client';

import { motion } from "framer-motion";
import React, { useState } from "react";
import Card from "../card";
import { BorderBeam } from "@/components/ui/border-beam";
import services from './services';
import { StaticImageData } from "next/image";

type Service = {
  image: StaticImageData; 
  description: string;
  serviceName: string;
  category: string;
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Development Services");

  const servicesList: Service[] = services;

  const categories: string[] = Array.from(new Set(servicesList.map(service => service.category)));

  const filteredServices = servicesList.filter(service => service.category === activeCategory);

  return (
    <div className="container mx-auto py-12 px-4 my-20" id="services">
      <motion.div
        initial={{ opacity: 0, y: -65 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25 }}
        className="flex flex-col justify-center items-center gap-3"
      >
        <div className="text-primary active relative">
          Find the best services in the town{" "}
          <BorderBeam size={70} duration={20} />
        </div>
        <h2 className="heading-2 text-white text-center mb-8 font-medium">
          The best Solutions For Your Business!
        </h2>
      </motion.div>

      <div className="flex justify-center flex-col sm:flex-row gap-2 sm:gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 font-medium rounded-full hvr-scl ${
              activeCategory === category
                ? "blog-category text-secondary"
                : "active"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-start sm:flex-wrap gap-5">
        {filteredServices.map((service, index) => (
          <Card
            key={index}
            image={service.image}
            description={service.description}
            serviceName={service.serviceName}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
