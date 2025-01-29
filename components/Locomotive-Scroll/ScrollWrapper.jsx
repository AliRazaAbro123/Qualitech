"use client"; // Ensure this component runs only on the client side

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// Dynamically import LocomotiveScroll without SSR
const LocomotiveScroll = dynamic(() => import("locomotive-scroll"), {
  ssr: false,
});

const ScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let scroll;
    // Initialize LocomotiveScroll only on the client side
    if (typeof window !== "undefined" && LocomotiveScroll) {
      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true, // Enables smooth scrolling
        smoothMobile: true, // Smooth scrolling on mobile
        multiplier: 1.7, // Adjust multiplier for smoother scrolling
        inertia: 0.8, // Higher inertia for a more fluid feel
        class: "is-scroll", // Custom class for scroll elements (optional)
        lerp: 0.1, // Linear interpolation for smooth scrolling transitions
        getDirection: true, // Detect scroll direction for adding scroll animations
        smartphone: {
          smooth: true, // Smooth scrolling for smartphone
        },
        tablet: {
          smooth: true, // Smooth scrolling for tablets
        },
        // Custom scrollbar container (optional)
        scrollbarContainer: "#scrollbar-container", 
        resetNativeScroll: true, // Reset native scroll to enhance custom scrolling
      });
    }

    // Clean up the LocomotiveScroll instance on component unmount
    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children} {/* Render children passed to the component */}
    </div>
  );
};

export default ScrollWrapper;
