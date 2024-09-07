"use client";

import { descriptions } from "@/lib/arrays/description";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const Description = () => {
  const [selectedTab, setSelectedTab] = useState(descriptions[0]);
  return (
    <section className="flex items-center justify-center">
      <div className="border border-rose-950 h-[20rem] w-[40rem] rounded-lg">
        <nav>
          <ul className="text-neutral-100 flex justify-between py-2 px-6 ">
            {descriptions.map((description) => (
              <li
                key={description.label}
                onClick={() => setSelectedTab(description)}
              >
                {`${description.icon} ${description.label}`}
                {description === selectedTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-center items-center flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? selectedTab.icon : "😋"}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
