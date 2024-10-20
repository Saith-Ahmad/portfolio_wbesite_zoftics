import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import TestimonialWrapper from "@/components/home/testimonial-wrapper";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services/>
      <TestimonialWrapper/>
      <Contact/>
    </div>
  );
};

export default page;
