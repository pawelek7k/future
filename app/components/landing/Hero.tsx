"use client";

import { motion } from "framer-motion";
import "../../styles/card.css";
import { MarketingNavigation } from "../navigations/MarketingNav";
import { Cards } from "./Cards";
import { Quotes } from "./Quotes";

export const Hero: React.FC = () => {
  return (
    <motion.section
      className="p-28 h-screen bg-black relative bg-hero-img bg-center bg-cover bg-fixed"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Quotes />
      <MarketingNavigation />
      <motion.div
        className="flex md:justify-between justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="flex flex-col gap-8 justify-center items-center md:items-start">
          <motion.h1
            className="text-neutral-100 font-semibold text-3xl sm:text-6xl lg:text-8xl sm:w-1/2 text-center md:text-start leading-loose font-sans"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            Create your way with Future!
          </motion.h1>
        </div>
        <Cards />
      </motion.div>
    </motion.section>
  );
};
