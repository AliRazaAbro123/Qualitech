"use client";

import React, { useEffect } from "react";
import CustomCss from "@/components/CustomCss.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../../public/assets/logo.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import AnimatedText from "../Framer-motion/Animating-text";
import Link from "next/link";
import { faLink } from "@fortawesome/free-solid-svg-icons";
library.add(faFacebook, faInstagram, faLinkedin, faSquareTwitter);

function home() {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();

  useEffect(() => {
    const h1 = document.querySelector("h1");
    if (h1) {
      h1.style.fontFamily = "Dancing Script";
    }
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-auto">
      <div className="w-full h-auto flex justify-center gap-12 mobile:gap-8 py-20 items-center flex-row mobile:flex-col mobile:justify-center mobile:p-4 mobile:py-20 wide:w-[90rem]">
        <div className="w-[60%] mobile:w-full h-auto flex justify-center gap-8 mobile:gap-10 items-start flex-col py-8 px-12 mobile:px-2 mb-8">
          <div className="flex flex-col items-start justify-center w-full h-auto gap-2">
            <h1
              className="text-6xl font-bold tracking-wider mobile:text-5xl"
              style={{ fontFamily: "Dancing Script" }}
            >
              Ali <span className="text-blue-700">Stacker</span>
            </h1>

            <AnimatedText />
          </div>

          <div className="flex flex-col items-start justify-center w-full h-auto gap-2 mobile:gap-4 mobile:mt-2">
            <p className="text-sm leading-snug tracking-wider text-gray-300 tablet:leading-tight moile:leading-tight">
              With over{" "}
              <span className="bg-gradient-to-r from-blue-800 to-blue-800 bg-[length:0%_100%] bg-no-repeat animate-bgFill text-white px-2">
                4+ years of hands-on experience in learning and building
                real-world projects,
              </span>
              I'm passionate about turning ideas into impactful digital
              experiences. Specializing in the MERN stack—MongoDB, Express.js,
              React.js, and Node.js—I develop responsive, scalable, and
              user-centric web applications that drive value and innovation. I
              love tackling complex challenges, writing clean and maintainable
              code, and continuously evolving with the latest trends in web
              development. Let’s connect and build something amazing together!
            </p>

            <div className="flex flex-row items-center justify-center gap-8 mt-4 mobile:gap-10">
              <Link
                href={"https://www.facebook.com/profile.php?id=61552489011042"}
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  title="Goto Facebook"
                  bounce
                  size="xl"
                  style={{ color: "blue" }}
                />
              </Link>

              <Link href={"https://www.fiverr.com/s/xX51gkl"} target="_blank">
                <FontAwesomeIcon
                  icon={faLink}
                  beat
                  title="Goto Fiverr"
                  style={{ color: "Green" }}
                  size="xl"
                />
              </Link>

              <Link
                href={"https://www.linkedin.com/in/ali-raza-8669a52b8/"}
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  bounce
                  title="Goto Linkedin"
                  style={{ color: "skyblue" }}
                  size="xl"
                />
              </Link>
            </div>
          </div>

          <a
            href="/Cv/Ali's Resume.pdf"
            download="Ali's Resume.pdf"
            title="Download My Resume"
            className="w-auto h-auto px-8 py-2 mt-1 font-semibold text-center no-underline bg-blue-700 rounded-md btn mobile:w-full mobile:py-3 mobile:mt-3"
          >
            Download Resume
          </a>
        </div>

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

export default home;
