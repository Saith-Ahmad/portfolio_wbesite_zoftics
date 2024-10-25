'use client'
import { motion } from "framer-motion"
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { SquareArrowOutUpRight } from "lucide-react"
import Image from "next/image"
import Project1 from "../../../app/assets/project-1.png"
import Project2 from "../../../app/assets/project-2.png"
import Project3 from "../../../app/assets/project-3.png"
import Project4 from "../../../app/assets/project-4.png"
import Project5 from "../../../app/assets/project-5.png"
import { BorderBeam } from "@/components/ui/border-beam"
import { cn } from "@/lib/utils";
import { GridPattern } from "../../ui/animated-grid-pattern"


const projects = [
  {
    image: Project1,
    title: "Shopify Ecommerce Store",
    description: "Responsive eCommerce site with filtering, secure checkout, and updates.",
    data: ["React", "Next.js", "Shopify API"],
  },
  {
    image: Project2,
    title: "Sleek Figma UI Design",
    description: "Modern UI design focusing on accessibility and responsive layouts.",
    data: ["Figma", "Tailwind CSS", "JavaScript"],
  },
  {
    image: Project3,
    title: "Cross-Platform Mobile App",
    description: "Feature-rich mobile app with notifications, location-based services, storage.",
    data: ["React Native", "Node.js", "Express"],
  },
  {
    image: Project5,
    title: "Interactive Portfolio Website",
    description: "Animated portfolio showcasing projects, contact forms, and SSR features.",
    data: ["Next.js", "Framer Motion", "CSS Modules"],
  },
  {
    image: Project4,
    title: "CMS-Integrated Blog Platform",
    description: "CMS-powered blog with content editing, SEO, and sharing features.",
    data: ["React", "Sanity.io", "TypeScript"],
  },
];


export function ProjectsCarousel() {
  return (
    <div className="container py-12 px-4 my-12 w-full ">
      <div className="bg-black bg-opacity-50 blog-card-shadow backdrop-blur-lg border-1  border-primary box_shadow p-2 md:p-6 py-16 rounded-3xl shadow-md  w-full relative overflow-hidden">
      <GridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%]  skew-y-12",
        )}
      />        
        <motion.div
          initial={{ opacity: 0, y: -65 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
        className="flex flex-col justify-center items-center gap-3 mb-7">
          <div className="text-primary active relative">Top Notch Technologies<BorderBeam size={70} duration={5} /> </div>
          <h2 className="heading-2 text-white text-center mb-8 font-medium">Explore Our Recent Projects!</h2>
      </motion.div>
        <Carousel className="relative px-3" opts={{ align: "start", loop: true, }}>
          <CarouselContent className="flex gap-4 md:px-1">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="pl-1 lg:basis-1/2 p-3 "
              >
                <div className="ml-2 p-3 h-full bg-white card_shadow bg-opacity-10 rounded-xl shadow-lg backdrop-blur-lg transform transition hover:scale-[1.02] hover:cursor-pointer flex flex-col sm:flex-row sm:justify-start sm:items-start  gap-3  md:max-h-[300px]">
                  <div className="w-full sm:w-[350px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="rounded-xl"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-start items-start w-full h-full">
                    <h6 className="heading-6 text-white font-medium">{project.title}</h6>
                    <p className="text-para">{project.description}</p>
                    <div className="flex items-center gap-2 mt-auto flex-wrap">
                      {
                        project.data.map((data, index) => (
                          <p key={index} className="text-[13px] md:text-[15px] bg-[#166a66] text-white rounded-md p-1 hover:scale-105 cursor-pointer">{data}</p>
                        ))
                      }
                      <SquareArrowOutUpRight
                        size={25}
                        className="text-[#166a66] hover:scale-110 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-primary bg-opacity-50 rounded-full hover:bg-opacity-70 border-primary text-white font-bold" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-primary bg-opacity-50 rounded-full hover:bg-opacity-70 border-primary text-white font-bold" />
        </Carousel>
      </div>
    </div>
  )
}
