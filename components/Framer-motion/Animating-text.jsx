"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedText = () => {
  const phrases = [
    "Hello! It's Me",
    "Welcome to My Portfolio",
    "FullStack Mern Engineer",
    "Passionate Coder",
    "Creative Thinker",
    "User Experience Advocate",
    "Frontend Guru",
    "Backend Architect",
    "Responsive Design Expert",
    "UI/UX Innovator",
    "Scalable App Creator",
    "Modern Web Builder",
    "React Wizard",
    "Node.js Developer",
  ];

  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % phrases.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <motion.div
      key={currentText}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
    >
      <h1 className="text-3xl mobile:text-2xl">{phrases[currentText]}</h1>
    </motion.div>
  );
};

export default AnimatedText;
