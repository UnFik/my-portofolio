"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const sections = [
    { id: "home", label: "Home" },
    { id: "skill", label: "Skills" },
    { id: "project", label: "Projects" },
    { id: "contact", label: "Contact" },
];

const ScrollSpy = () => {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-50% 0px -50% 0px",
            }
        );

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6 p-4 rounded-full glass-dark border border-white/10">
            {sections.map((section) => (
                <div
                    key={section.id}
                    className="group flex items-center gap-4 flex-row-reverse relative"
                >
                    {/* Label Tooltip */}
                    <AnimatePresence>
                        {activeSection === section.id && (
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="absolute right-12 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-bold whitespace-nowrap shadow-lg shadow-primary/20"
                            >
                                {section.label}
                            </motion.span>
                        )}
                    </AnimatePresence>

                    {/* Dot */}
                    <button
                        onClick={() => scrollToSection(section.id)}
                        className={cn(
                            "relative w-4 h-4 rounded-full transition-all duration-500",
                            activeSection === section.id
                                ? "bg-primary scale-125 shadow-[0_0_20px_rgba(var(--primary),0.6)]"
                                : "bg-white/20 hover:bg-white/50 hover:scale-110"
                        )}
                        aria-label={`Scroll to ${section.label}`}
                    >
                        {activeSection === section.id && (
                            <motion.div
                                layoutId="activeGlow"
                                className="absolute inset-0 rounded-full bg-primary blur-md"
                                transition={{ duration: 0.5 }}
                            />
                        )}
                    </button>
                </div>
            ))}

            {/* Connecting Line */}
            <div className="absolute top-8 bottom-8 right-[23px] w-[2px] bg-white/5 -z-10 rounded-full overflow-hidden">
                <motion.div
                    className="w-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-50"
                    animate={{
                        y: ["-100%", "100%"]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "linear"
                    }}
                    style={{ height: "50%" }}
                />
            </div>
        </div>
    );
};

export default ScrollSpy;
