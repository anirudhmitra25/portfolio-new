"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="flex justify-center mb-28 py-28 w-screen text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="max-w-[45rem]">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Engineering</span>, I decided to pursue my
        passion for programming. Since then, I've had the oppurtunity to work
        with Startups as well as MNCs, collaborated with lots of smart people
        <span className="font-medium">
          {" "}
        </span>
        .{" "}
        <span className="italic">
          I'm quietly confident, naturally curious, and perpetually working on
          improving my chops one problem at a time.
        </span>
      </p>

      <p></p>
      <p className="mb-3"></p>
      </div>
    </motion.section>
  );
}
