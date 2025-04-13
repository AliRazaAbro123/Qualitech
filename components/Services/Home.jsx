import Image from "next/image";
import React from "react";
import code from "../../public/assets/code.svg";
import browser from "../../public/assets/browser.svg";
import database from "../../public/assets/database.svg";
import shopping from "../../public/assets/shopping.svg";
import api from "../../public/assets/api.svg";
import wrench from "../../public/assets/wrench.svg";
import figma from "../../public/assets/figma.svg";
import react from "../../public/assets/react.svg";
import laptop from "../../public/assets/laptop.svg";
import Link from "next/link";

function Home() {
  return (
    <div className="w-full h-auto flex justify-center bg-[#05010fee] items-center">
      <div className="w-full h-auto flex justify-center gap-24 py-12 items-center flex-col  mobile:p-4 wide:w-[90rem]">
        <div className="w-full h-auto flex justify-center items-center">
          <h1 className="title font-bold text-4xl tracking-wider tablet:text-3xl mobile:text-3xl">
            My <span className="text-blue-700">Services</span>
          </h1>
        </div>
        <div className="w-full h-auto flex justify-center items-center gap-8 flex-col mobile:gap-14">
          <div className="w-full h-auto flex justify-evenly items-center flex-row mobile:flex-col mobile:justify-center mobile:gap-20">
            <div className="card w-[25%] tablet:w-[30%] hover:shadow-white/20 hover:shadow-xl hover:backdrop-blur-xl relative p-2 mobile:p-6  min-h-[16rem] mobile:min-h-[18rem] bg-white/10 backdrop-blur-lg rounded-xl shadow-lg shadow-white/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-2 mobile:items-start">
              <Image
                src={code}
                width={70}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="Code"
              />
              <h1 className="tablet:text-base text-lg font-bold tablet:font-semibold mt-6">
                Fullstack Development
              </h1>
              <p className="text-sm text-gray-300">
                I build dynamic web applications using the MERN stack (MongoDB,
                Express.js, React.js, Node.js). From front-end to back-end, I
                ensure seamless integration, scalability, and strong
                performance.
              </p>
            </div>
            <div className="card w-[25%] tablet:w-[30%] hover:shadow-white/20 hover:shadow-xl hover:backdrop-blur-xl relative p-2 mobile:p-6  min-h-[16rem] mobile:min-h-[18rem] bg-white/10 backdrop-blur-lg rounded-xl shadow-lg shadow-white/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-2 mobile:items-start">
              <Image
                src={browser}
                width={60}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="browser"
              />
              <h1 className="tablet:text-base text-lg font-bold tablet:font-semibold mt-6">
                Frontend Development
              </h1>
              <p className="text-sm text-gray-300">
                I create modern, responsive user interfaces with React.js and
                Tailwind CSS, combining visual appeal with functionality. My
                focus is on intuitive designs, smooth interactions, and
                optimized layouts for a great user experience across devices.
              </p>
            </div>
            <div className="card w-[25%] tablet:w-[30%] hover:shadow-white/20 hover:shadow-xl hover:backdrop-blur-xl relative p-2 mobile:p-6  min-h-[16rem] mobile:min-h-[18rem] bg-white/10 backdrop-blur-lg rounded-xl shadow-lg shadow-white/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-2 mobile:items-start">
              <Image
                src={database}
                width={70}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="database"
              />
              <h1 className="tablet:text-base text-lg font-bold tablet:font-semibold mt-6">
                Backend Development
              </h1>
              <p className="text-sm text-gray-300">
                I develop secure, scalable server-side solutions with Node.js
                and Express.js. From custom APIs to MongoDB integration, I
                ensure your application is fast, secure, and easy to scale as
                your business grows.
              </p>
            </div>
          </div>
          {/* <div className="w-full h-auto flex justify-evenly items-center flex-row mobile:flex-col mobile:justify-center mobile:gap-6">
          <div className="w-[25%] tablet:w-[30%] hover:shadow-white/20 hover:shadow-xl hover:backdrop-blur-xl relative p-2 mobile:p-6  min-h-[16rem] mobile:min-h-[20rem] bg-white/10 backdrop-blur-lg rounded-xl shadow-lg shadow-white/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-6 mobile:items-start">
              <Image
                src={shopping}
                width={70}
                height={50}
                className="tablet:w-16 mobile:w-14 absolute top-[-2.5rem] left-[2rem]"
                alt="shopping"
              />
              <h1 className="tablet:text-base text-lg font-bold tablet:font-semibold mt-6">
                E-commerce Development
              </h1>
              <p className="text-sm text-gray-300">
                I build custom e-commerce platforms with user-friendly features,
                secure payment gateways, and intuitive product management. From
                small shops to large marketplaces, I deliver high-performance
                stores optimized for conversions and seamless shopping.
              </p>
            </div>
            <div className="w-[25%] tablet:w-[30%] hover:shadow-white/20 hover:shadow-xl hover:backdrop-blur-xl relative p-2 mobile:p-6  min-h-[16rem] mobile:min-h-[20rem] bg-white/10 backdrop-blur-lg rounded-xl shadow-lg shadow-white/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-6 mobile:items-start">
              <Image
                src={api}
                width={90}
                height={50}
                className="tablet:w-16 mobile:w-14 absolute top-[-2.5rem] left-[2rem]"
                alt="api"
              />
              <h1 className="tablet:text-base text-lg font-bold tablet:font-semibold mt-6">
                API Development
              </h1>
              <p className="text-sm text-gray-300">
                I create custom RESTful APIs to seamlessly connect your
                front-end and back-end systems. From third-party integrations to
                custom solutions, I ensure they are secure, well-documented, and
                optimized for scalability and performance.
              </p>
            </div>
            <div className="w-[25%] tablet:w-[30%] hover:shadow-white/20 hover:shadow-xl hover:backdrop-blur-xl relative p-2 mobile:p-6  min-h-[16rem] mobile:min-h-[20rem] bg-white/10 backdrop-blur-lg rounded-xl shadow-lg shadow-white/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-6 mobile:items-start">
              <Image
                src={wrench}
                width={70}
                height={50}
                className="tablet:w-16 mobile:w-14 absolute top-[-2.5rem] left-[2rem]"
                alt="wrench"
              />
              <h1 className="tablet:text-base text-lg font-bold tablet:font-semibold mt-6">
                Website Maintenance
              </h1>
              <p className="text-sm text-gray-300">
                I provide regular maintenance to keep your website or
                application secure and up-to-date. Services include bug fixes,
                content updates, security patches, and performance monitoring to
                ensure optimal functionality and minimal downtime.
              </p>
            </div>
          </div> */}
          {/* <div className="w-full h-auto flex justify-evenly items-center flex-row mobile:flex-col mobile:justify-center mobile:gap-6">
          <div className="w-[25%] tablet:w-[30%] hover:shadow-white/20 hover:shadow-xl hover:backdrop-blur-xl relative p-2 mobile:p-6  min-h-[16rem] mobile:min-h-[20rem] bg-white/10 backdrop-blur-lg rounded-xl shadow-lg shadow-white/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-6 mobile:items-start">
              <Image
                src={figma}
                width={70}
                height={50}
                className="tablet:w-16 mobile:w-14 absolute top-[-2.5rem] left-[2rem]"
                alt="figma"
              />
              <h1 className="tablet:text-base text-lg font-bold tablet:font-semibold mt-6">
                Figma/PSD to HTML/CSS Conversion
              </h1>
              <p className="text-sm text-gray-300">
                I convert your Figma or PSD designs into pixel-perfect,
                responsive HTML and CSS. From static layouts to interactive
                features like forms and navigation, I ensure a seamless
                transition while preserving design accuracy.
              </p>
            </div>
            <div className="w-[25%] tablet:w-[30%] hover:shadow-white/20 hover:shadow-xl hover:backdrop-blur-xl relative p-2 mobile:p-6  min-h-[16rem] mobile:min-h-[20rem] bg-white/10 backdrop-blur-lg rounded-xl shadow-lg shadow-white/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-6 mobile:items-start">
              <Image
                src={react}
                width={70}
                height={50}
                className="tablet:w-16 mobile:w-14 absolute top-[-2.5rem] left-[2rem]"
                alt="react"
              />
              <h1 className="tablet:text-base text-lg font-bold tablet:font-semibold mt-6">
                Figma/PSD to React.js
              </h1>
              <p className="text-sm text-gray-300">
                I transform your Figma or PSD designs into fully functional
                React.js applications, complete with reusable components,
                dynamic data integration, and optimized performance.
              </p>
            </div>
            <div className="w-[25%] tablet:w-[30%] hover:shadow-white/20 hover:shadow-xl hover:backdrop-blur-xl relative p-2 mobile:p-6  min-h-[16rem] mobile:min-h-[20rem] bg-white/10 backdrop-blur-lg rounded-xl shadow-lg shadow-white/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-6 mobile:items-start">
              <Image
                src={laptop}
                width={70}
                height={50}
                className="tablet:w-16 mobile:w-14 absolute top-[-2.5rem] left-[2rem]"
                alt="laptop"
              />
              <h1 className="tablet:text-base text-lg font-bold tablet:font-semibold mt-6">
                Landing Page Development
              </h1>
              <p className="text-sm text-gray-300">
                I design and build responsive, high-converting landing pages
                using HTML, CSS, and JavaScript (or React) to maximize user
                engagement and turn visitors into customers.
              </p>
            </div>
          </div> */}
          <Link
            href={"/services"}
            className="btn bg-blue-700 w-auto h-auto py-2 text-center px-8 rounded-md font-semibold mt-6 mobile:w-full mobile:py-3"
          >
            More Services! <code>&gt;</code>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
