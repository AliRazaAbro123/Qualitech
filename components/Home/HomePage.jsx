// Important: Enable client-side rendering in Next.js
"use client";

// Explanation: Import React library and custom CSS styles
import React, { useEffect } from "react";
import CustomCss from "@/components/CustomCss.css";
// Details: Import GSAP for animations and ScrollTrigger for scroll-based animations
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../../public/assets/logo.jpg";
import Image from "next/image";
// Explanation: Import FontAwesome components for social media icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
// Details: Import custom text animation component
import AnimatedText from "../Framer-motion/Animating-text";
import Link from "next/link";

// Important: Add FontAwesome icons to the library for easy reference
library.add(faFacebook, faInstagram, faLinkedin, faSquareTwitter);

function home() {
  // Explanation: Register the ScrollTrigger plugin with GSAP
  gsap.registerPlugin(ScrollTrigger);

  // TODO: Create GSAP timeline instance for animations
  const tl = gsap.timeline();

  // TODO: Animate paragraph text with a GSAP effect on component mount

  useEffect(() => {
    const h1 = document.querySelector("h1");
    if (h1) {
      h1.style.fontFamily = "Dancing Script";
    }
  }, []); // Empty array means this effect will run once on mount
  

  return (
    <div className="flex items-center justify-center w-full h-auto">
      {/* Important: Main container for layout */}
      <div className="w-full h-auto flex justify-center gap-12 mobile:gap-8 py-20 items-center flex-row mobile:flex-col mobile:justify-center mobile:p-4 mobile:py-20 wide:w-[90rem]">
        {/* Details: Left section containing the main content */}
        <div className="w-[60%] mobile:w-full h-auto flex justify-center gap-8 mobile:gap-10 items-start flex-col py-8 px-12 mobile:px-2 mb-8">
          {/* Explanation: Section containing animated name and intro text */}
          <div className="flex flex-col items-start justify-center w-full h-auto gap-2">
            <h1
              className="text-6xl font-bold tracking-wider mobile:text-5xl"
              style={{ fontFamily: "Dancing Script" }}
            >
              {/* Explanation: Animated display of name */}
              Ali <span className="text-blue-700">Raza</span>
            </h1>

            {/* Important: Animated subtitle component */}
            <AnimatedText />
          </div>

          {/* Explanation: Section containing description and social icons */}
          <div className="flex flex-col items-start justify-center w-full h-auto gap-2 mobile:gap-4 mobile:mt-2">
            {/* Details: Personal introduction and expertise statement */}
            <p className="text-sm leading-snug tracking-wider text-gray-300 tablet:leading-tight moile:leading-tight">
              I'm passionate about transforming ideas into powerful digital
              experiences. With expertise in the MERN stack "MongoDB,
              Express.js, React.js, and Node.js", I build responsive, scalable,
              and user-friendly web applications that bring value and innovation
              to every project. I enjoy solving complex problems, crafting clean
              and maintainable code, and staying updated with the latest trends
              in web development. Let's connect and create something amazing
              together!
            </p>

            {/* Explanation: Social media icons section */}
            <div className="flex flex-row items-center justify-center gap-8 mt-4 mobile:gap-10">
              {/* Important: Facebook icon with custom style */}
              <Link
                href={"https://www.facebook.com/profile.php?id=61552489011042"}
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  bounce
                  size="lg"
                  style={{ color: "blue" }}
                />
              </Link>

              {/* Explanation: Instagram icon with custom style */}
              <Link
                href={"https://www.instagram.com/ud.programming/"}
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  beat
                  style={{ color: "blue" }}
                  size="lg"
                />
              </Link>

              {/* Explanation: LinkedIn icon with custom style */}
              <Link
                href={"https://www.linkedin.com/in/ali-raza-8669a52b8/"}
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  bounce
                  style={{ color: "blue" }}
                  size="lg"
                />
              </Link>
            </div>
          </div>

          {/* TODO: Download CV button */}
          <a
            href="/Cv/AliRaza.pdf" // File path in the public directory
            download="AliRaza-CV.pdf"
            className="w-auto h-auto px-8 py-2 mt-1 font-semibold text-center no-underline bg-blue-700 rounded-md btn mobile:w-full mobile:py-3 mobile:mt-3"
          >
            Download CV
          </a>
        </div>

        {/* Details: Right section placeholder for additional content */}
        <div className="w-1/3 mobile:w-full">
          <Image
            src={logo}
            width={600}
            alt="contrast-125"
            className="mobile:w-full"
          />
        </div>
      </div>
    </div>
  );
}

// Important: Export the home component for use in the app
export default home;
