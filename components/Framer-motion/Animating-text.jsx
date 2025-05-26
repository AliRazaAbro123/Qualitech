"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedText = () => {
  const phrases = [
    "Quality Assurance Services",
    "Manual Testing Specialist",
    "Automation Testing Expert",
    "Quality Assurance",
    "Test Automation",
    "Software Testing",
    "Development Services",
    "Web App Development",
    "Website Maintenance",
    "Front-end Development",
    "Back-end Development",
    "Node.js Engineer",
    "React.js Engineer",
    "Next.js Engineer",
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
      <h1 className="text-2xl mobile:text-2xl">{phrases[currentText]}</h1>
    </motion.div>
  );
};

export default AnimatedText;
