'use client'
import { Sparkle } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';


function Hero() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 75 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.25 }}
    className='container relative flex justify-center items-center h-screen w-full mt-20 overflow-hidden' id='#'>
      <div className='w-[500px] h-[500px] absolute lg:right-[25%] top-[10%] bg-transparent rounded-full glow_shadow -z-[50]'>
      </div>

      <div className='z-10 flex flex-col text-center items-center justify-center w-full gap-2'>
        <div className='flex gap-3 items-center justify-center active'>
          <Sparkle size={34} className='text-primary' />
          <p className=' text-primary para-small md:para-large'>Your Digital Creative Companion</p>
        </div>
        <div className='md:px-32 p-5 flex flex-col justify-center items-center gap-4'>
          <h1 className='heading-1 text-secondary font-black capitalize'>Elevate Your Business with Innovative Tech Solutions</h1>
          <p className='para-large text-para'>Xoftics provides innovative digital solutions to help businesses grow and succeed. From web development to digital marketing, we tailor strategies that enhance your online presence and drive measurable growth.</p>
          <button className='bg-primary text-white px-4 py-2 rounded-lg font-medium shadow-gray-900 shadow-lg hover:bg-[#7d50cb] hvr-scl'>Get in Touch</button>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
