"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-0" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-dark rounded-3xl p-8 md:p-16 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="space-y-8 max-w-2xl text-center md:text-left">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                Let&apos;s work together
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Have a project in mind or just want to say hi? I&apos;m always open to new opportunities and interesting conversations.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:fikriilhamarifin27@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <div className="p-3 rounded-full bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                </div>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Email me at</div>
                  <div className="text-lg font-semibold">fikriilhamarifin27@gmail.com</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/fikri-ilham-arifin-27e/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <div className="p-3 rounded-full bg-[#0077b5]/20 text-[#0077b5] group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </div>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Connect on</div>
                  <div className="text-lg font-semibold">LinkedIn</div>
                </div>
              </a>

              <a
                href="/file/Fikri Ilham Arifin-CV.pdf"
                download
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <div className="p-3 rounded-full bg-green-500/20 text-green-500 group-hover:scale-110 transition-transform">
                  <Download size={24} />
                </div>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Download</div>
                  <div className="text-lg font-semibold">My CV</div>
                </div>
              </a>
            </div>
          </div>

          <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <Image
              src="memoji.svg"
              fill
              alt="Me"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

        <div className="mt-12 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Fikri Ilham Arifin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
