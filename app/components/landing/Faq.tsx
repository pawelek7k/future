"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-rose-950">
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
  const accordionData = [
    {
      title: "Is the writing app free?",
      content:
        "Yes, the app offers a free plan that allows you to write and manage a few books. There are also paid plans that provide additional features such as advanced editing, collaboration, and more storage space.",
    },
    {
      title: "How does the writing app work?",
      content:
        "The writing app allows users to create books, chapters, and notes in an organized manner. You can write your content, format text, add notes, and collaborate with other writers in real time.",
    },
    {
      title: "Can I export my books?",
      content:
        "Yes, the app allows you to export your books in various formats such as PDF or Word. This makes it easy to publish your content on different platforms or print your books.",
    },
  ];

  return (
    <section className="max-w-2xl mx-auto mt-10 py-20 px-12 flex flex-col items-center gap-16">
      <h2 className="text-neutral-100 font-semibold text-4xl text-center">
        FAQ
      </h2>
      <div>
        {accordionData.map((item, index) => (
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
