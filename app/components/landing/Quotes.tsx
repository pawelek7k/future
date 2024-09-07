"use client";

import { quotes } from "@/lib/arrays/quotes";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect/dist/core";

export const Quotes = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [position, setPosition] = useState({ x: "50%", y: "50%" });
  const [fadeIn, setFadeIn] = useState(true);

  const getRandomPosition = () => {
    const x = Math.floor(Math.random() * 90);
    const y = Math.floor(Math.random() * 90);
    return { x: `${x}%`, y: `${y}%` };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);

      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setPosition(getRandomPosition());
        setFadeIn(true);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const typewriter = new Typewriter("#typewriter", {
      strings: [quotes[currentQuoteIndex]],
      autoStart: true,
      loop: false,
    });

    return () => {
      typewriter.stop();
    };
  }, [currentQuoteIndex]);

  return (
    <div
      id="typewriter"
      className="text-neutral-100 absolute transition ease-in-out"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        borderRadius: "5px",
        opacity: fadeIn ? 1 : 0,
      }}
    />
  );
};
