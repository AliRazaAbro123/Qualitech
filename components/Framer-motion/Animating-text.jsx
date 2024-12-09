// Important: Enable client-side rendering in Next.js
"use client";

// Explanation: Import necessary React hooks and Framer Motion for animation
import React from 'react';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Details: Define AnimatedSecondText component to display animated text
const AnimatedText = () => {
  // Explanation: Define the array of phrases for the animation
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
    "Node.js Developer"
  ];

  // Explanation: State to track the current phrase index
  const [currentText, setCurrentText] = useState(0);

  // Explanation: Effect to cycle through phrases every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // TODO: Increment the current text index with wrap-around logic
      setCurrentText((prevText) => (prevText + 1) % phrases.length);
    }, 2000); // Change text every 2 seconds

    // Explanation: Cleanup function to clear interval on component unmount
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    // Explanation: Motion div with Framer Motion animation for fade-in effect
    <motion.div
      key={currentText}
      exit={{ opacity: 0 }} // Exit state: fade out
      initial={{ opacity: 0 }} // Initial state: hidden
      animate={{ opacity: 1 }} // Animate to visible
      transition={{ duration: 2 }} // Transition duration for the animation
    >
      {/* Important: Display the current phrase */}
      <h1 className="text-3xl mobile:text-2xl">{phrases[currentText]}</h1>
    </motion.div>
  );
};

// Important: Export AnimatedSecondText component for use in other parts of the app
export default AnimatedText;
