"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: "/origin/html5.svg" },
      { name: "CSS3", icon: "/origin/css.svg" },
      { name: "React", icon: "/origin/react.svg" },
      { name: "Next.js", icon: "/origin/next.svg" },
      { name: "Vue.js", icon: "/origin/vue.svg" },
      { name: "Tailwind CSS", icon: "/origin/tailwind.svg" },
      { name: "Bootstrap", icon: "/origin/bootstrap.svg" },
      { name: "Ionic", icon: "/origin/ionic.svg" },
      { name: "TypeScript", icon: "/origin/typescript.png" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Flask", icon: "/origin/flask.svg" },
      { name: "Elysia", icon: "/origin/elysia.svg" },
      { name: "tRPC", icon: "/origin/trpc.svg" },
      { name: "Nginx", icon: "/origin/nginx.svg" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: "/origin/postgres.svg" },
      { name: "MySQL", icon: "/origin/mysql.svg" },
      { name: "Redis", icon: "/origin/redis.svg" },
      { name: "Prisma", icon: "/origin/prisma.svg" },
      { name: "Drizzle", icon: "/origin/drizzle.svg" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: "/origin/docker.svg" },
      { name: "Git", icon: "/origin/git.svg" },
      { name: "GitHub", icon: "/origin/github.svg" },
      { name: "Vercel", icon: "/origin/vercel.svg" },
      { name: "PM2", icon: "/origin/pm2.svg" },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Skill = () => {
  return (
    <section id="skill" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-20">
        <div className="flex flex-col items-center mb-16 space-y-4 text-center">
          <div className="p-3 rounded-2xl bg-primary/10 w-fit">
            <Image
              src="/skill.svg"
              width={40}
              height={40}
              alt="Skill Icon"
              className="w-10 h-10"
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Tech Stack <span className="text-primary">& Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Technologies I use to build scalable and performant applications.
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-8">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-semibold text-center md:text-left pl-4 border-l-4 border-primary"
              >
                {category.title}
              </motion.h3>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    variants={item}
                    key={skill.name}
                    className="group flex flex-col items-center justify-center p-6 rounded-xl glass-dark hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-primary/50"
                  >
                    <div className="relative w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={skill.icon}
                        fill
                        alt={skill.name}
                        className="object-contain rounded-lg"
                      />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground capitalize">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;

