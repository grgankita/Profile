import React from "react";

import { assets } from "../assets/assets.js";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";

const About = () => {
  const skills = [
    { name: "HTML5", icon: FaHtml5, color: "#E34F26", type: "icon" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", type: "icon" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E", type: "icon" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", type: "icon" },
    { name: "React", icon: FaReact, color: "#61DAFB", type: "icon" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", type: "icon" },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
      type: "icon",
    },
    { name: "Node.js", icon: FaNodeJs, color: "#339933", type: "icon" },
    { name: "Express.js", icon: SiExpress, color: "#000000", type: "icon" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", type: "icon" },

    // { name: "Vite", img: vite, type: "image" },
    // { name: "Firebase", img: firebase, type: "image" },
    // { name: "Figma", img: figma, type: "image" },
    { name: "Vite", img: assets.vite, type: "image" },
    { name: "Firebase", img: assets.firebase, type: "image" },
    { name: "Figma", img: assets.figma, type: "image" },
  ];

  return (
    <div
      id="about"
      className="py-20 transition-colors duration-300 dark:bg-gray-800 dark:text-white bg-white text-gray-900"
    >
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto text-lg space-y-6 text-center">
          <p className="dark:text-gray-300 text-gray-600">
            I’m a recent graduate with a Bachelor's degree in Computer Science
            and Information Technology (BSc.CSIT). I discovered a deep passion
            for building interactive web experiences. I enjoy bringing ideas to
            life through clean design, thoughtful user interactions, and
            continuous iteration. I'm an active learner who thrives on exploring
            new concepts, contributing to meaningful projects, and collaborating
            with others to solve real-world problems. Outside of coding, I stay
            engaged in tech communities and value opportunities to grow both
            personally and professionally.
          </p>
          {/* <p className="dark:text-gray-300 text-gray-600">
            When I'm not coding, you can find me [Your Hobby, e.g., reading tech
            blogs, hiking, or playing video games].
          </p> */}
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            {" "}
            Technical skills and expertise areas
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 rounded-lg transition-colors duration-300 dark:hover:bg-gray-700 hover:bg-gray-200"
              >
                {skill.type === "icon" ? (
                  <skill.icon
                    style={skill.color ? { fill: skill.color } : {}}
                    className="text-5xl"
                    aria-label={skill.name}
                  />
                ) : (
                  <img src={skill.img} alt={skill.name} className="w-12 h-12" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
