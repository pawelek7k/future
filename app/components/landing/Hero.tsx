"use client";

import { motion } from "framer-motion";
import "../../styles/card.css";
import { MarketingNavigation } from "../navigations/MarketingNav";
import { Cards } from "./Cards";
import { Quotes } from "./Quotes";

export const Hero: React.FC = () => {
  return (
    <motion.section
      className="p-28 h-screen bg-black relative bg-center bg-cover bg-fixed"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Quotes />
    </motion.section>
  );
};
