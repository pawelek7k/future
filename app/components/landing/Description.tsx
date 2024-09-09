"use client";

import { descriptions } from "@/lib/arrays/description";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/legacy/image";
import { useState } from "react";

export const Description = () => {
  const [selectedTab, setSelectedTab] = useState(descriptions[0]);
  return (
    <section className="items-center justify-center pb-20 relative hidden md:flex">
      <div className="border border-rose-950 h-[20rem] w-[40rem] rounded-lg shadow-lg shadow-rose-950 overflow-hidden">
        <nav className="border border-rose-950">
          <ul className="text-neutral-100 flex justify-between py-2 px-6 ">
            {descriptions.map((description) => (
              <li
                key={description.label}
                onClick={() => setSelectedTab(description)}
                className="cursor-pointer"
              >
                <div className="flex items-center">
                  <span className="mr-2">{description.icon}</span>
                  {description.label}
                </div>
                {description === selectedTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-center items-center flex-1 bg-hero-bg">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? (
                <>
                  <div className="w-[20rem] h-[20rem] relative overflow-hidden flex items-start justify-start">
                    <Image
                      src={selectedTab.img}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      alt={selectedTab.label}
                    />
                  </div>
                  <div className="bg-neutral-100 absolute  z-20 top-20 left-96 shadow-lg rounded-xl shadow-sky-950 text-zinc-950 p-2">
                    <p>{selectedTab.description}</p>
                  </div>
                </>
              ) : (
                "😋"
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
