'use client';

import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Hi, I&apos;m <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-base md:text-lg text-text-light max-w-2xl mx-auto mb-8">
            A passionate developer focused on creating beautiful and user-friendly applications
            that solve real-world problems.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#about"
              className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <a href="#about" className="flex flex-col items-center text-text-light hover:text-primary transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDownIcon className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
} 