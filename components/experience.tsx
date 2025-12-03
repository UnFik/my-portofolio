"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const experiences = [
    {
        company: "Nusapala Berkah Autonomous",
        role: "Website Developer",
        period: "Sep 2025 - Present",
        type: "Contract",
        location: "Jakarta Timur, Jakarta Raya, Indonesia",
        description: "Specializing in React.js and Web Development.",
        skills: ["React.js", "Wails", "Golang", "Docker"],
    },
    {
        company: "UPT TIK UNJ",
        role: "Fullstack Developer",
        period: "Dec 2024 - Aug 2025",
        type: "Internship",
        location: "Jakarta, Indonesia",
        description: "Developed SAKU-PTNBH (Financial Administration System), PPG Filing & Transcript System, and SKPI UNJ System.",
        skills: ["React.js", "Next.js", "DrizzleORM", "PostgreSQL", "Elysia", "Redis", "Docker", "BullMQ", "tRPC"],
    },
    {
        company: "PT Bank Rakyat Indonesia (Persero) Tbk",
        role: "Fullstack Developer",
        period: "Sep 2024 - Dec 2024",
        type: "Internship",
        location: "Jakarta Pusat, Jakarta Raya, Indonesia",
        description: "Developed SAP Compare for historical data comparison and TDC Dashboard for tracking and management.",
        skills: ["Laravel", "WebSocket", "PostgreSQL", "Pusher"],
    },
    {
        company: "Smart Sinergy World",
        role: "Web Developer",
        period: "Sep 2023 - Sep 2023",
        type: "Freelance",
        location: "Bekasi, Indonesia",
        description: "Built the company profile website to enhance transparency, improve business communication, and facilitate knowledge sharing.",
        skills: ["Next.js", "Web Development", "React.js"],
    },
    {
        company: "Kidsera Kindegarten",
        role: "Frontend Developer",
        period: "Jul 2022 - Dec 2022",
        type: "Contract",
        location: "Jakarta Timur, Indonesia",
        description: "Designed mockups and developed the Kidsera Dashboard using Vue.js and Ionic Framework.",
        skills: ["Vue.js", "Figma", "Ionic Framework", "Bootstrap", "TypeScript"],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-4 sm:px-8 lg:px-20">
                <div className="flex flex-col items-center mb-16 space-y-4 text-center">
                    <div className="p-3 rounded-2xl bg-primary/10 w-fit">
                        <Image
                            src="/assets/handshake.svg"
                            width={40}
                            height={40}
                            alt="Experience Icon"
                            className="w-10 h-10"
                        />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Work <span className="text-primary">Experience</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl">
                        My professional journey and the organizations I&apos;ve had the privilege to work with.
                    </p>
                </div>

                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={index}
                            className={cn(
                                "relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active",
                            )}
                        >
                            {/* Icon/Dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <div className="w-3 h-3 bg-primary rounded-full" />
                            </div>

                            {/* Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl glass-dark border border-white/5 hover:border-primary/30 transition-all duration-300">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                                    <div>
                                        <h3 className="font-bold text-xl text-foreground">{exp.role}</h3>
                                        <p className="text-primary font-medium">{exp.company}</p>
                                    </div>
                                    <div className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/5 whitespace-nowrap">
                                        {exp.period}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                                    <span className="px-2 py-0.5 rounded bg-white/5">{exp.type}</span>
                                    <span>•</span>
                                    <span>{exp.location}</span>
                                </div>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
