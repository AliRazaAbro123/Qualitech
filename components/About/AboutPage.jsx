import React from "react";
import CustomCss from "@/components/CustomCss.css";
import Link from "next/link";
import logo from "../../public/assets/logo.jpg";
import Image from "next/image";

function AboutPage() {
  return (
    <div className="flex items-center justify-center w-full h-auto">
      <div className="w-full h-auto py-16 wide:h-screen flex justify-evenly items-center flex-row mobile:p-4 mobile:flex-col mobile:justify-center mobile:gap-2 wide:w-[90rem]">
        <div className="w-1/3 h-auto mobile:w-full">
          <Image src={logo} width={550} alt="Home page icon" />
        </div>
        <div className="w-[60%] mobile:w-full h-auto flex justify-center gap-8 items-start flex-col py-8 px-6">
          <div className="flex flex-col items-start justify-center w-full h-auto gap-1">
            <h1 className="text-4xl font-bold tracking-wider title tablet:text-3xl mobile:text-3xl">
              About <span className="text-blue-700">Me</span>
            </h1>
            <h2 className="text-2xl font-bold tracking-wide tablet:text-xl mobile:text-lg">
              Fullstack Mern Web Developer!
            </h2>
          </div>
          <div className="flex flex-col items-start justify-center w-full h-auto gap-2">
            <p className="text-sm leading-tight">
              Hello, I'm Ali Raza, a passionate fullstack web developer
              specializing in the MERN stack—MongoDB, Express.js, React.js, and
              Node.js. I thrive on creating scalable, high-performance, and
              user-friendly web applications that bring ideas to life. From
              crafting dynamic frontends to building robust backends, I turn
              challenges into solutions. Always eager to learn and innovate, I’m
              dedicated to delivering impactful digital experiences that exceed
              expectations.
              <br /> <br />
              <span>
                Let’s collaborate and create something extraordinary. Ready to
                transform your vision into reality? I’m just a message away!
              </span>
            </p>
            <div className="flex items-start justify-center w-full h-auto mt-4 mb-2">
              <Link
                href={"/contact"}
                className="w-auto h-auto px-8 py-2 font-semibold text-center bg-blue-700 rounded-md btn mobile:w-full mobile:py-3"
              >
                Contact Me <code>&gt;</code>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
