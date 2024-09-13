"use client";
import accordionData from "@/lib/arrays/json/faq.json";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Heading } from "./Heading";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-rose-950 shadow-md shadow-rose-950">
      <button
        className="w-full text-left py-4 px-5 flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg text-neutral-100 font-semibold">{title}</span>
        <span className="text-rose-950">{isOpen ? "-" : "+"}</span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? contentRef.current?.scrollHeight : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div ref={contentRef} className="px-5 py-4 text-neutral-200">
          {content}
        </div>
      </motion.div>
    </div>
  );
};

export const Accordion: React.FC = () => {
  return (
    <section className="max-w-2xl mx-auto py-20 px-20 flex flex-col items-center gap-16">
      <Heading>FAQ</Heading>
      <div>
        {accordionData.accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </section>
  );
};
