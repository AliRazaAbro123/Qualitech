"use client";

import React from "react";
import CustomCss from "@/components/CustomCss.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import upworkLogo from "../../public/assets/upwork.png";
import bg from "../../public/assets/bg.jpg";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import AnimatedText from "../Framer-motion/Animating-text";
import Link from "next/link";
library.add(faLinkedin);

function home() {
  return (
    <div className="flex items-center justify-center w-full h-auto">
      <div className="w-full h-auto flex justify-center gap-12 mobile:gap-8 py-20 items-center flex-row mobile:flex-col mobile:justify-center mobile:p-4 mobile:py-20 wide:w-[90rem]">
        <div className="w-[60%] mobile:w-full h-auto flex justify-center gap-8 mobile:gap-10 items-start flex-col py-8 px-12 mobile:px-2 mb-8">
          <div className="flex flex-col items-start justify-center w-full h-auto gap-2">
            <h1 className="text-5xl font-bold mobile:text-4xl">
              Qualitech <span className="text-blue-700">Solutions.</span>
            </h1>

            <AnimatedText />
          </div>

          <div className="flex flex-col items-start justify-center w-full h-auto gap-2 mobile:gap-4 mobile:mt-2">
            <p className="text-sm leading-snug tracking-wider text-zinc-700 tablet:leading-tight moile:leading-tight">
              <span className="bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_100%] bg-no-repeat animate-bgFill text-black font-bold">
                "End-to-End Web Development & Quality Assurance Services", {""}
              </span>
              From responsive web applications to detailed manual testing, we
              ensure your product is fast, secure, and error-free. We don’t just
              build software — we make sure it works perfectly
            </p>

            <div className="flex flex-row items-center justify-center gap-8 mt-4 mobile:gap-10">
              <Link
                href={"https://www.linkedin.com/in/shakir-ali-767270219/"}
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "blue" }}
                  size="2xl"
                  className="rounded-full"
                />
              </Link>
              <Link
                href={
                  "https://www.upwork.com/freelancers/~0113c6a538f16fbe28?mp_source=share"
                }
                target="_blank"
              >
                <Image
                  src={upworkLogo}
                  alt="Upwork"
                  width={35}
                  className="bg-center bg-cover bg-no-repeat"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-1/3 mobile:w-full">
          <Image
            src={bg}
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
