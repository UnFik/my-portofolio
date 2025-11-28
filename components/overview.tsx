"use client";

import React from "react";
import Image from "next/image";
import DotPattern from "./magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import { CVDrawer } from "./cv-drawer";
import { useState } from "react";

const Overview = () => {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const socialLinks = [
    { name: "github", url: "https://github.com/YourUsername" },
    { name: "linkedin", url: "https://linkedin.com/in/YourUsername" },
    { name: "instagram", url: "https://instagram.com/YourUsername" },
    { name: "facebook", url: "https://facebook.com/YourUsername" },
  ];

  const brands = ["upwork", "dribbble", "fiverr"];

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden pt-20 lg:pt-0">
      <DotPattern
        className={cn(
          "absolute inset-0 h-full w-full opacity-20",
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
      />

      <div className="container mx-auto px-4 sm:px-8 lg:px-20 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center lg:text-left order-2 lg:order-1"
        >
          <h3 className="text-xl md:text-2xl font-medium text-primary tracking-wide">
            Front-End Developer
          </h3>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Fikri Ilham <br />
            <span className="text-gradient">Arifin</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Computer Science Student passionate about <span className="text-foreground font-semibold">Web Development</span> & <span className="text-foreground font-semibold">Cybersecurity</span>.
            Building digital experiences that matter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a href="#contact" className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25">
              Let&apos;s Connect
            </a>
            <div className="flex items-center gap-4 justify-center">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors border border-white/5"
                >
                  <Image
                    src={`${social.name}.svg`}
                    width={20}
                    height={20}
                    alt={social.name}
                    className="w-5 h-5 invert dark:invert-0"
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Hero Image Replacement - Innovative Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 lg:order-2 flex justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCVOpen(true)}
            className="relative group cursor-pointer"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative px-8 py-8 bg-[#18243a]/90 backdrop-blur-xl rounded-xl leading-none flex items-center divide-x divide-white/10 border border-white/10">
              <span className="flex items-center space-x-5">
                <span className="pr-6 text-gray-100 text-2xl font-bold tracking-wider">View My CV</span>
              </span>
              <span className="pl-6 text-primary group-hover:text-white transition duration-200 font-medium">
                Click to Open &rarr;
              </span>
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Brands / Trusted By */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full mt-16 lg:mt-24 py-8 glass-dark border-y border-white/5"
      >
        <div className="container mx-auto flex flex-wrap justify-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {/* {brands.map((brand) => (
            <div key={brand} className="relative h-8 w-32">
              <Image
                src={`${brand}.svg`}
                fill
                className="object-contain"
                alt={brand}
              />
            </div>
          ))} */}
        </div>
      </motion.div>

      <CVDrawer isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </section>
  );
};

export default Overview;
