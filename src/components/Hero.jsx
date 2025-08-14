// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets.js"; // Replace with your image path

const Hero = () => {
  return (
    <section
      id="hero"
      // className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen p-6 gap-10 transition-colors duration-300 dark:bg-gray-900 dark:text-white bg-gray-100 text-gray-900"
      className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen bg-white/30 backdrop-blur-lg rounded-xl border border-white/50  p-6 gap-10 transition-colors duration-300 dark:bg-gray-900 dark:text-white"
    >
      {/* Left: Intro Text */}
      <div className="flex flex-1 flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Web Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-xl"
        >
          A Web Developer with a deep interest for clean code and thoughtful
          design. I enjoy turning ideas into reliable, user-friendly digital
          solutions using modern technologies..
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-4">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300 dark:bg-blue-500 dark:hover:bg-blue-800 bg-sky-300 hover:bg-sky-500"
          >
            Hire Me
          </motion.a>

          <motion.a
            href="#projects"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300 dark:bg-blue-500 dark:hover:bg-blue-800 bg-sky-300 hover:bg-sky-500"
          >
            View My Work
          </motion.a>
        </div>
      </div>

      {/* Right: Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex justify-center pt-16"
      >
        <img
          src={assets.profile}
          alt="Ankita Gurung"
          className="w-40 h-40 sm:w-96 sm:h-96 object-cover rounded-2xl shadow-xl border-4 border-white dark:border-gray-800 
          transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 hover:rotate-1"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
