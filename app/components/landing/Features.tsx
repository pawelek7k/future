"use client";

import "@/app/styles/animations.css";
import { features } from "@/lib/arrays/features";
import { motion } from "framer-motion";

export const Features: React.FC = () => {
  return (
    <section className="py-20 px-20 flex flex-col items-center gap-16">
      <div className="text-center">
        <h2 className="text-neutral-100 font-semibold text-4xl">
          How Future Works?
        </h2>
      </div>
      <ul className="flex gap-12 flex-wrap items-center justify-center">
        {features.map((feature) => (
          <motion.li
            className=" p-12 rounded-lg bg-hero-bg shadow-l w-96"
            key={feature.id}
            initial={{ opacity: 0, y: 30 }}
            whileHover={{ scale: 1.05 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div>
              <h3 className="text-neutral-200 font-semibold text-2xl">
                {feature.heading}
              </h3>
              <div className="flex items-center justify-center p-4 w-18 h-18">
                {feature.icon}
              </div>
              <p className="text-neutral-300">{feature.p}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
