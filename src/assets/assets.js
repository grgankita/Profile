import figma from "./figma.svg";
import vite from "./vite.svg";
import firebase from "./firebase.svg";
import web from "./webview.png";
import contact from "./contact.png";
import ticTacToe from "./tttss.png";
import wapi from "./wapi.png";
import profile from "./profile.jpg";

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaLinkedin,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import {
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
  SiFirebase,
} from "react-icons/si";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
// const techIcons = {

// };

export const assets = {
  figma,
  vite,
  profile,
  firebase,
  link: FiExternalLink,
  React: FaReact,
  "Node.js": FaNodeJs,
  github: FaGithub,
  Express: SiExpress,
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  JavaScript: FaJs,
  Tailwind: SiTailwindcss,
  TypeScript: SiTypescript,
  MongoDB: SiMongodb,
  NextJS: SiNextdotjs,
  mail: HiOutlineMail,
  phone: HiOutlinePhone,
  location: HiOutlineLocationMarker,
};
export const projects = [
  {
    id: 1,
    title: "contact manangement webapp",
    description:
      "A web application for easy contact management, featuring adding, viewing, searching, and sorting.",
    image: contact,
    liveUrl: null,
    githubUrl: "https://github.com/grgankita/Contacts.git",
    techStack: [
      "React",
      "Tailwind",
      "TypeScript",
      "Firebase",
      "Express",
      "JavaScript",
    ],
  },
  {
    id: 2,
    title: "Tic Tac Toe Game",
    description:
      "Developed an interactive browser-based Tic-Tac-Toe game with a responsive UI. Implemented game state management with React hooks, dynamic winner detection logic, and a reset feature. Designed a clean, minimal interface ensuring intuitive gameplay for two players.",
    image: ticTacToe,
    liveUrl: null,
    githubUrl: "https://github.com/grgankita/Tic-Tac-Toe.git",
    techStack: ["React", "Tailwind"],
  },
  {
    id: 3,
    title: "Weather Webapp",
    description:
      "Built a responsive web application that fetches real-time weather data based on user input using the WeatherAPI. Features include current temperature, humidity, wind speed, and weather condition display.",
    image: wapi,
    liveUrl: null,
    githubUrl: "https://github.com/grgankita/weather-.git",
    techStack: ["HTML5", "CSS3", "JavaScript"],
  },
];
export const social = {
  linkedin: FaLinkedin,
  github: FaGithub,
};
export const workData = [
  {
    id: 1,
    company: "Digital Pathshala",
    location: "Itahari, Sunsari",
    position: "MERN Stack Developer Intern",
    date: "March 2025 – May 2025",
    type: "Full-time",
    summary:
      "A full-featured salon appointment scheduling web app built using the MERN stack which allows users to book salon services",
    achievements: [
      "Led design of dashboard UI, improving usability by 35%",
      "Includes secure authentication, payment integration(eSewa), and admin controls.",
    ],
    tech: ["React", "Node.js", "TailwindCSS", "Express", "MongoDB"],
  },
];
