"use client"; // Ensure this component runs only on the client side

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// Dynamically import LocomotiveScroll without SSR
const LocomotiveScroll = dynamic(() => import("locomotive-scroll"), {
  ssr: false,
});

const ScrollWrapper = ({ children }) => {
  // Destructure children from props
  const scrollRef = useRef(null);

  useEffect(() => {
    let scroll;
    // Initialize LocomotiveScroll only on the client side
    if (typeof window !== "undefined" && LocomotiveScroll) {
      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: true,
        multiplier: 1.5, // Adjust multiplier for smoother effect
        inertia: 0.7, // Higher inertia for a more natural, fluid feel
        class: "is-scroll",
        lerp: 0.1, // Linear interpolation for smooth scrolling
        scrollbarContainer: "#scrollbar-container", // Custom scrollbar container (optional)
        getDirection: true, // Enable scroll direction change effect
        smartphone: {
          smooth: true, // Smooth scrolling on mobile devices
        },
        tablet: {
          smooth: true, // Smooth scrolling on tablet devices
        },
      });
    }

    return () => {
      scroll && scroll.destroy(); // Clean up LocomotiveScroll instance on unmount
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children} {/* Render children passed to the component */}
    </div>
  );
};

export default ScrollWrapper;
