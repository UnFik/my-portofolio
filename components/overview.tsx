"use client";

import React from "react";
import Image from "next/image";
import DotPattern from "./magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Overview = () => {
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
              Let's Connect
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

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <Image
              src="me.svg"
              fill
              className="object-contain drop-shadow-2xl"
              alt="Fikri"
              priority
            />
          </div>
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
          {brands.map((brand) => (
            <div key={brand} className="relative h-8 w-32">
              <Image
                src={`${brand}.svg`}
                fill
                className="object-contain"
                alt={brand}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Overview;
