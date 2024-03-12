import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import SortingVisualizer from "@/public/Sorting-visualizer.png";
import portfolioPreview from "@/public/portfolio-preview.png";
import ecommApp from "@/public/Ecom-app.png";
import grooveTube from "@/public/grooveTube.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Btech (Information Technology)",
    location: "Manipal, IN",
    description:
      "I graduated from Manipal Institute of Technology completing my degree in engineering (Information Technology). Was a part of the photography club where I served as the Head of Human resources. I was also a part of the organising committee of two major fests of our college",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
  {
    title: "Project Trainee",
    location: "Greater Noida, IN",
    description:
      "Worked as an intern for Tech Mahindra. During my time there I had the oppurtunity to work on developing the official website for Greater Noida Industrial Development Authority",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2021 - Aug-2021",
  },
  {
    title: "Associate Software Developer",
    location: "Gurgaon, IN",
    description:
      "I worked as a front-end developer for a gurgaon based ecommerce startup called Peppertap. Developed a lot of key features for their flagship products like their Ecommerce Application and POS application. Helped in building a warehouse management system and a content management system.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2021 - Aug-2022",
  },
  {
    title: "Software Developer",
    location: "Noida, IN",
    description:
      "Currently working as fullstack developer for a Noida based company. During my time here, I have worked on multiple projects, focusing on multiple tech stacks. Worked on developing key modules for a web based network simulator and a satellite viewer for a US based aerospace and defense giant",
    icon: React.createElement(CgWorkAlt),
    date: "Aug-2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Sorting Visualizer",
    link: "https://sorting-visualizer-anirudh.netlify.app/",
    description:
      "Developed a dynamic web application to visually demonstrate various sorting algorithms such as Quick Sort, Merge Sort, Bubble Sort, and Selection Sort",
    tags: ["React", "CSS", "Javascript", "HTML"],
    imageUrl: SortingVisualizer,
  },
  {
    title: "Portfolio Website",
    link: "",
    description:
      "Developed a sleek and responsive portfolio website, showcasing a creative and professional presentation of personal projects and skills",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer"],
    imageUrl: portfolioPreview,
  },
  {
    title: "Furnify",
    description:
      "Created a React Native e-commerce app for seamless and user-friendly mobile shopping experiences.",
    link: "https://github.com/anirudhmitra25/Ecommerce-App",
    tags: ["React Native", "MobX"],
    imageUrl: ecommApp,
  },
  {
    title: "GrooveTube",
    description:
      "A react-based video app that allows you to seamlessly enjoy and control your favorite videos.",
    link: "https://groove-tube.vercel.app/",
    tags: ["React", "Redux", "Framer", "Tailwind"],
    imageUrl: grooveTube,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Electron.js",
  "MongoDB",
  "Redux",
  "Node",
  "Express",
  "Postman",
  "Python",
] as const;
