import React from "react";
import CustomCss from "@/components/CustomCss.css";
import Link from "next/link";
import logo from "../../public/assets/logo.jpg";
import Image from "next/image";

function AboutHome() {
  return (
    <div className="w-full h-auto flex bg-[#05010fee] justify-center items-center">
      <div className="w-full h-auto py-24 flex justify-evenly items-center flex-row mobile:p-4 mobile:flex-col mobile:justify-center mobile:gap-6 wide:w-[90rem]">
        <div className="w-1/3 h-auto mobile:w-full">
          <Image src={logo} width={550} alt="Home page icon" />
        </div>
        <div className="w-[60%] mobile:w-full h-auto flex justify-center gap-4 items-start flex-col py-5 px-12 mobile:px-2 mobile:items-center">
          <div className="w-full h-auto flex justify-center items-start flex-col gap-1 mobile:items-center">
            <h1 className="title font-bold text-4xl tracking-wider tablet:text-3xl mobile:text-3xl">
              About <span className="text-blue-700">Me</span>
            </h1>
            <h2 className="font-bold text-2xl tracking-wide tablet:text-xl mobile:text-lg">
              FullStack Mern Web Developer!
            </h2>
          </div>
          <div className="w-full h-auto flex justify-center items-start flex-col gap-3 mobile:items-center">
            <p className="text-gray-300 text-sm leading-normal tracking-wide">
              <span className="bg-gradient-to-r from-blue-800 to-blue-800 bg-[length:0%_100%] bg-no-repeat animate-bgFill text-white px-2">
                With 4+ years of experience, I specialize in the MERN stack
                (MongoDB, Express.js, React.js, Node.js)
              </span>
              to build responsive and scalable web applications. Passionate
              about solving challenges, writing clean code, and staying
              up-to-date with web development trends, I create user-centric
              digital experiences. Let’s connect and build something amazing!
            </p>
            <Link
              href={"/about"}
              className="btn bg-blue-700 w-auto h-auto py-2 text-center px-8 rounded-md font-semibold mt-6 mb-8 mobile:w-full mobile:py-3"
            >
              Read More <code>&gt;</code>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHome;
