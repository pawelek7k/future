"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
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
            className="text-neutral-100 text-3xl sm:text-6xl lg:text-8xl w-1/2 text-center md:text-start leading-loose font-sans"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            Create your way with Future!
          </motion.h1>
          <motion.div
            className="text-neutral-100 rounded-full w-96 shadow-lg backdrop-blur-lg shadow-sky-950 mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileHover={{ scale: 1.05 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <ul className="flex justify-between px-8 py-4">
              <li>
                <button className="flex items-center gap-4">
                  Read More <FaArrowDown className="arrow-animation" />
                </button>
              </li>
              <li>
                <span className="font-semibold">&</span>
              </li>
              <li>
                <Link
                  href="/login"
                  className="py-2 px-8 border border-sky-800 rounded-full hover:bg-sky-800 transition ease-in-out"
                >
                  Join us!
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
        <Cards />
      </motion.div>
    </motion.section>
  );
};
