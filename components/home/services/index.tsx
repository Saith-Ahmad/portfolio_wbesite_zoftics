'use client'
import { motion } from "framer-motion";
import React from "react";
import Card from "../card";
import Web from "../../../app/assets/web.png";
import Seo from "../../../app/assets/seo.png";
import Marketing from "../../../app/assets/marketing.png";
import { BorderBeam } from "@/components/ui/border-beam";

const Services = () => {

  return (
    <div className="container mx-auto py-12 px-4 my-20" id="services">
      <motion.div
         initial={{ opacity: 0, y: -65 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.9, delay: 0.25 }}
      className="flex flex-col justify-center items-center gap-3">
        <div className="text-primary active relative">Find the best services in the town <BorderBeam size={70} duration={4}/></div>
        <h2 className="heading-2 text-white text-center mb-8 font-medium">The best Solutions For Your Business!</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card image={Web} description="Custom websites tailored to your business needs." serviceName="Web Development"/>
        <Card image={Seo} description="Boost your website's visibility on search engines." serviceName="SEO Optimization"/>
        <Card image={Marketing} description="Effective strategies to grow your business online." serviceName="Digital Marketing"/>
      </div>
    </div>
  );
};

export default Services;
