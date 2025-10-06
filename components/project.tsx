"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const Project = () => {
  return (
    <div
      id="project"
      className="px-4 sm:px-8 md:px-16 lg:px-20 mt-16 sm:mt-24 md:mt-32"
    >
      <div className="heading flex flex-col sm:flex-row gap-3 sm:gap-5 items-center sm:items-end sm:justify-end mb-8">
        <Image
          src="project.svg"
          width={80}
          height={80}
          alt="Project"
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
        />
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center sm:text-left">
          Highlighted Projects{" "}
          <span className="text-xl sm:text-2xl block sm:inline">i&apos;ve done</span>
        </h1>
      </div>
      {[
        {
          title: "SSW Company Profile",
          color: "text-yellow-500",
          description:
            "Smart Sinergy World (SSW) company profile website is a comprehensive online platform designed to provide a clear and detailed insight into the community. It offers an overview of SSW, explains its business model, showcases seminar activities, and highlights available products",
          images: ["ssw1.svg", "ssw2.svg", "ssw3.svg"],
          demoLink: "https://smartsinergyworld.com/",
          btnClass: "btn-demo3",
          technologies: ["next", "tailwind", "vercel"],
        },
        {
          title: "PPG UNJ",
          color: "text-green-500",
          description: "PPG Documentation & Transcript Application is a web-based application specifically designed to support the documentation and transcript needs of students in the Teacher Professional Education field.",
          images: ["ppg1.png", "ppg2.png"],
          demoLink: "http://103.8.12.205/login",
          btnClass: "btn-demo2",
          technologies: ["next", "tailwind", "vercel"],
        },
        {
          title: "SKPI UNJ",
          color: "text-green-500",
          description: "SI - SKPI UNJ is an Information System for managing Diploma Supplement Certificates as one of the graduation requirements for students at Jakarta State University",
          images: ["skpi1.png", "skpi2.png", "skpi3.png"],
          demoLink: "https://skpi.unj.ac.id/",
          btnClass: "btn-demo2",
          technologies: ["next", "tailwind", "vercel"],
        },
      ].map((project, index) => (
        <div
          key={index}
          className={`project${
            index
          } px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-16 mt-8 sm:mt-12 md:mt-14 space-y-6 sm:space-y-8 md:space-y-12`}
        >
          <div
            className={`font-bold text-4xl sm:text-5xl md:text-6xl ${project.color}`}
          >
            {project.title}
          </div>
          <div className="text-base sm:text-lg md:text-xl leading-relaxed">
            {project.description}
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination]}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {project.images.map((image, imgIndex) => (
              <SwiperSlide key={imgIndex}>
                <Image
                  src={`/overview/${image}`}
                  width={600}
                  height={600}
                  alt={`${project.title} Project`}
                  className="rounded-lg w-full h-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${project.btnClass} flex justify-center items-center gap-4 py-4 sm:py-6 px-6 sm:px-8 w-full sm:w-auto`}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Live Demo
              </div>
              <div className="box-arrow2 p-2 sm:p-3">
                <Image
                  src="demo.svg"
                  width={20}
                  height={20}
                  alt="arrow"
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                />
              </div>
            </a>
            <div className="flex flex-col">
              <div className="text-xl sm:text-2xl md:text-3xl text-[#919DC1] font-bold">
                Source Code & Documentation
              </div>
              <div className="flex flex-row items-center gap-2 sm:gap-3">
                <div className="text-xl sm:text-2xl md:text-3xl text-black font-semibold">
                  On
                </div>
                <Image
                  src="mygithub.svg"
                  width={40}
                  height={40}
                  alt="Github"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                />
                <div className="text-xl sm:text-2xl md:text-3xl text-black font-semibold">
                  github.com
                </div>
              </div>
            </div>
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Featured technologies used
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-5 md:gap-7">
            {project.technologies.map((tech, techIndex) => (
              <Image
                key={techIndex}
                src={`origin/${tech}.svg`}
                width={60}
                height={60}
                alt={tech}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
