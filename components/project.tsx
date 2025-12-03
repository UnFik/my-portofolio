"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "SAKU TAGIHAN PTNBH",
    description: "Information System for managing billing and payment at Universitas State of Jakarta.",
    images: ["saku1.png", "saku2.png"],
    demoLink: "https://saku.ptnbh.ac.id/",
    technologies: ["react", "tailwind", "elysia", "drizzle", "postgres"],
    color: "from-green-500/20 to-emerald-500/5",
  },
  {
    title: "SKPI UNJ",
    description: "Information System for managing Diploma Supplement Certificates as one of the graduation requirements.",
    images: ["skpi1.png", "skpi2.png", "skpi3.png"],
    demoLink: "https://skpi.unj.ac.id/",
    technologies: ["nextjs", "tailwind", "drizzle", "postgres", "elysia"],
    color: "from-blue-500/20 to-cyan-500/5",
  },
  {
    title: "PPG UNJ",
    description: "Web-based application specifically designed to support the documentation and transcript needs of students.",
    images: ["ppg1.png", "ppg2.png"],
    demoLink: "http://103.8.12.205/login",
    technologies: ["nextjs", "tailwind", "trpc", "drizzle", "postgres"],
    color: "from-purple-500/20 to-violet-500/5",
  },
  {
    title: "SSW Company Profile",
    description: "Comprehensive online platform designed to provide a clear and detailed insight into the community.",
    images: ["ssw1.svg", "ssw2.svg", "ssw3.svg"],
    demoLink: "https://ssw-web.fikriilhamarifin27.workers.dev/",
    technologies: ["nextjs", "tailwind", "vercel"],
    color: "from-yellow-500/20 to-orange-500/5",
  },
];

const Project = () => {
  return (
    <section id="project" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-20">
        <div className="flex flex-col items-center mb-16 space-y-4 text-center">
          <div className="p-3 rounded-2xl bg-primary/10 w-fit">
            <Image
              src="/assets/project.svg"
              width={40}
              height={40}
              alt="Project Icon"
              className="w-10 h-10"
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Highlighted <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of projects I&apos;ve worked on, ranging from web apps to system integrations.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              key={index}
              className={cn(
                "group relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 lg:p-10 rounded-3xl border border-white/5",
                "bg-gradient-to-br backdrop-blur-sm",
                project.color
              )}
            >
              {/* Content */}
              <div className="order-2 lg:order-1 space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm"
                      >
                        <Image
                          src={`origin/${tech}.svg`}
                          width={16}
                          height={16}
                          alt={tech}
                          className="w-4 h-4"
                        />
                        <span className="capitalize">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
                  >
                    <span>Live Demo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-all"
                  >
                    <Image src="mygithub.svg" width={20} height={20} alt="Github" />
                    <span>Source Code</span>
                  </a>
                </div> */}
              </div>

              {/* Slider */}
              <div className="order-1 lg:order-2 w-full overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-black/20">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={20}
                  pagination={{ clickable: true }}
                  modules={[Pagination]}
                  className="w-full aspect-video"
                >
                  {project.images.map((image, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <div className="relative w-full h-full">
                        <Image
                          src={`/overview/${image}`}
                          fill
                          alt={`${project.title} Screenshot`}
                          className="object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
