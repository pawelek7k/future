"use client";

import Link from "next/link";
import { PrimaryButton } from "../global/Buttons";
import { LightLogo } from "../global/Logo";
import { motion } from "framer-motion";

export const MarketingNavigation: React.FC = () => {
  return (
    <motion.header
      className="flex justify-between p-4 fixed top-0 w-full backdrop-blur-md left-0 right-0 z-40"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
    >
      <LightLogo />
      <div className="w-20">
        <Link href="/login" aria-label="login">
          <PrimaryButton>Log in!</PrimaryButton>
        </Link>
      </div>
    </motion.header>
  );
};
