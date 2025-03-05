import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import SortingVisualizer from "@/public/Sorting-visualizer.png";
import videoEditorPreview from "@/public/video-editor.png";
import ecommApp from "@/public/Ecom-app.png";
import grooveTube from "@/public/grooveTube.png";
import dashboard from "@/public/dashboard.png";
import movieApp from "@/public/movieApp.jpeg";

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
    title: "Video Editor",
    link: "https://video-editor-dun.vercel.app/",
    description:
      "Developed a feature-rich video editor using React, TypeScript, Fabric.js, and Redux, enabling users to create and edit videos with a timeline-based interface.",
    tags: ["React", "TypeScript", "Fabric", "Tailwind", "Redux"],
    imageUrl: videoEditorPreview,
  },
  {
    title: "Sorting Visualizer",
    link: "https://sorting-visualizer-anirudh.netlify.app/",
    description:
      "Developed a dynamic web application to visually demonstrate various sorting algorithms such as Quick Sort, Merge Sort, Bubble Sort, and Selection Sort",
    tags: ["React", "CSS", "Javascript", "HTML"],
    imageUrl: SortingVisualizer,
  },
  {
    title: "Dashboard",
    description:
      "A dynamic dashboard application which provides users with a comprehensive visualization of data with interactive charts, maps, and widgets.",
    link: "https://bcg-dashboard.vercel.app/",
    tags: ["React", "Redux", "Framer", "Tailwind", "Leaflet", "Apex charts"],
    imageUrl: dashboard,
  },
  {
    title: "GrooveTube",
    description:
      "A react-based video app that allows you to seamlessly enjoy and control your favorite videos.",
    link: "https://groove-tube.vercel.app/",
    tags: ["React", "Redux", "Framer", "Tailwind"],
    imageUrl: grooveTube,
  },
  {
    title: "Movieflix",
    link: "https://github.com/anirudhmitra25/MovieFlix",
    description:
      "This is a mobile application developed using React Native and Redux, powered by the TMDb API. The app allows users to browse movies, view details, search for movies, and filter by genre.",
    tags: ["React Native", "TypeScript"],
    imageUrl: movieApp,
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
