"use client";
import { motion } from "framer-motion";
import React from "react";
import { BorderBeam } from "@/components/ui/border-beam";
import SingleBlogCard from "./blog";
import BlogImage1 from "../../..//app/assets/blog1.png";
import BlogImage2 from "../../..//app/assets/blog2.png";
import BlogImage3 from "../../..//app/assets/blog3.png";
import { StaticImageData } from "next/image";

interface Blog {
  category: string;
  title: string;
  description: string;
  image: StaticImageData;
}

const blogData: Blog[] = [
  {
    category: "Technology",
    title: "AI Trends 2024",
    description:
      "Explore the latest in AI, including automation and innovations.",
    image: BlogImage1,
  },
  {
    category: "Web Development",
    title: "Next.js Updates",
    description: "What's new in Next.js and best practices for development.",
    image: BlogImage2,
  },
  {
    category: "Cybersecurity",
    title: "Hacking Prevention",
    description:
      "Effective tips on safeguarding data against emerging cyber threats.",
    image: BlogImage3,
  },
];

const Blogs = () => {
  return (
    <div className="container mx-auto py-12 px-4 my-20" id="services">
      <motion.div
        initial={{ opacity: 0, y: -65 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25 }}
        className="flex flex-col justify-center items-center gap-3"
      >
        <div className="text-primary active relative">
          Read Our Articles <BorderBeam size={70} duration={20} />
        </div>
        <h2 className="heading-2 text-white text-center mb-8 font-medium">
          Latest Blogs
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap gap-10 justify-center items-center">
        {blogData.map((blog, index) => (
          <SingleBlogCard
            key={index}
            category={blog.category}
            title={blog.title}
            description={blog.description}
            image={blog.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
