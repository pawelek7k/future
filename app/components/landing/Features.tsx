"use client";

import "@/app/styles/animations.css";
import { features } from "@/lib/arrays/features";
import { motion } from "framer-motion";
import { Heading } from "./Heading";

export const Features: React.FC = () => {
  return (
    <section className="py-20 px-20 flex flex-col items-center gap-16">
      <div className="text-center">
        <Heading>How Future Works?</Heading>
      </div>
      <ul className="flex gap-12 flex-wrap items-center justify-center">
        {features.map((feature) => (
          <motion.li
            className="p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg bg-hero-bg shadow-lg w-full sm:w-80 md:w-96"
            key={feature.id}
            initial={{ opacity: 0, y: 30 }}
            whileHover={{ scale: 1.05 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div>
              <h3 className="text-neutral-200 font-semibold text-xl sm:text-2xl">
                {feature.heading}
              </h3>
              <div className="flex items-center justify-center p-4 w-12 h-12 sm:w-18 sm:h-18">
                {feature.icon}
              </div>
              <p className="text-neutral-300 text-sm sm:text-base">
                {feature.p}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
