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

function ServicesPage() {
  return (
    <div className="flex items-center justify-center w-full h-auto">
      <div className="w-full h-auto wide:min-h-screen flex justify-center gap-20 py-16 mobile:py-20 items-center flex-col mobile:p-4 wide:w-[90rem]">
        <div className="flex items-center justify-center w-full h-auto">
          <h1 className="text-4xl font-bold tracking-wider title tablet:text-3xl mobile:text-3xl">
            My <span className="text-blue-700">Services</span>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-auto gap-16 mobile:gap-6">
          <div className="flex flex-row items-center w-full h-auto justify-evenly mobile:flex-col mobile:justify-center mobile:gap-20">
            <div className="w-[25%] tablet:w-[30%] hover:shadow-white/20 hover:shadow-xl hover:backdrop-blur-xl relative p-2 mobile:p-6  min-h-[18rem] mobile:min-h-[20rem] bg-white/10 backdrop-blur-lg rounded-xl shadow-lg shadow-white/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-2 mobile:items-start">
              <Image
                src={code}
                width={70}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="Code"
              />
              <h1 className="mt-6 text-lg font-bold tablet:text-base tablet:font-semibold">
                Fullstack Development
              </h1>
              <p className="text-sm leading-tight text-gray-300">
                I specialize in creating complete, dynamic web applications
                using the MERN stack (MongoDB, Express.js, React.js, and
                Node.js). Whether it's building a custom solution or enhancing
                an existing one, I handle everything from the front end to the
                back end, ensuring seamless integration, scalability, and robust
                performance.
              </p>
            </div>
            <div className="w-[25%] tablet:w-[30%] hover:shadow-white/20 hover:shadow-xl hover:backdrop-blur-xl relative p-2 mobile:p-6 min-h-[18rem] mobile:min-h-[20rem] bg-white/10 backdrop-blur-lg rounded-xl shadow-lg shadow-white/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-6 mobile:items-start">
              <Image
                src={browser}
                width={60}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="browser"
              />
              <h1 className="mt-6 text-lg font-bold tablet:text-base tablet:font-semibold">
                Frontend Development
              </h1>
              <p className="text-sm leading-tight text-gray-300">
                I design and develop modern, responsive user interfaces with
                React.js and Tailwind CSS, ensuring your website or application
                is both visually appealing and functional. I focus on creating
                intuitive designs, smooth interactions, and optimized layouts
                that deliver an exceptional user experience across devices.
              </p>
            </div>
            <div className="w-[25%] tablet:w-[30%] hover:shadow-white/20 hover:shadow-xl hover:backdrop-blur-xl relative p-2 mobile:p-6 min-h-[18rem] mobile:min-h-[20rem] bg-white/10 backdrop-blur-lg rounded-xl shadow-lg shadow-white/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-6 mobile:items-start">
              <Image
                src={database}
                width={70}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="database"
              />
              <h1 className="mt-6 text-lg font-bold tablet:text-base tablet:font-semibold">
                Backend Development
              </h1>
              <p className="text-sm leading-tight text-gray-300">
                I develop secure and scalable server-side solutions using
                Node.js and Express.js. From building custom APIs to integrating
                databases (like MongoDB), I ensure your application is fast,
                secure, and well-structured, making it easy to scale and
                maintain as your business grows.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center w-full h-auto justify-evenly mobile:flex-col mobile:justify-center mobile:gap-20">
            <div className="w-[25%] tablet:w-[30%] hover:shadow-white/20 hover:shadow-xl hover:backdrop-blur-xl relative p-2 mobile:p-6 min-h-[18rem] mobile:min-h-[20rem] bg-white/10 backdrop-blur-lg rounded-xl shadow-lg shadow-white/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-6 mobile:items-start">
              <Image
                src={shopping}
                width={70}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="shopping"
              />
              <h1 className="mt-6 text-lg font-bold tablet:text-base tablet:font-semibold">
                E-commerce Development
              </h1>
              <p className="text-sm leading-tight text-gray-300">
                Transform your business with a custom-built e-commerce platform.
                I create online stores with user-friendly features, secure
                payment gateway integrations, and intuitive product management
                systems. Whether it’s a small shop or a large-scale marketplace,
                I deliver high-performance stores optimized for conversions and
                seamless shopping experiences.
              </p>
            </div>
            <div className="w-[25%] tablet:w-[30%] hover:shadow-white/20 hover:shadow-xl hover:backdrop-blur-xl relative p-2 mobile:p-6 min-h-[18rem] mobile:min-h-[20rem] bg-white/10 backdrop-blur-lg rounded-xl shadow-lg shadow-white/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-6 mobile:items-start">
              <Image
                src={api}
                width={90}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="api"
              />
              <h1 className="mt-6 text-lg font-bold tablet:text-base tablet:font-semibold">
                API Development
              </h1>
              <p className="text-sm leading-tight text-gray-300">
                I build custom, RESTful APIs to connect your front-end and
                back-end systems. Whether you need third-party API integrations
                or a full custom API to handle specific business logic, I ensure
                they are well-documented, secure, and optimized for performance,
                making it easy to scale and integrate into your ecosystem.
              </p>
            </div>
            <div className="w-[25%] tablet:w-[30%] hover:shadow-white/20 hover:shadow-xl hover:backdrop-blur-xl relative p-2 mobile:p-6 min-h-[18rem] mobile:min-h-[20rem] bg-white/10 backdrop-blur-lg rounded-xl shadow-lg shadow-white/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-6 mobile:items-start">
              <Image
                src={wrench}
                width={70}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="wrench"
              />
              <h1 className="mt-6 text-lg font-bold tablet:text-base tablet:font-semibold">
                Website Maintenance
              </h1>
              <p className="text-sm leading-tight text-gray-300">
                Keep your website or application up-to-date and secure with
                regular maintenance. I offer ongoing support, including bug
                fixes, content updates, security patches, and performance
                monitoring. This service ensures your site stays optimized and
                secure, with minimal downtime or issues.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center w-full h-auto justify-evenly mobile:flex-col mobile:justify-center mobile:gap-20">
            <div className="w-[25%] tablet:w-[30%] hover:shadow-white/20 hover:shadow-xl hover:backdrop-blur-xl relative p-2 mobile:p-6 min-h-[18rem] mobile:min-h-[20rem] bg-white/10 backdrop-blur-lg rounded-xl shadow-lg shadow-white/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-6 mobile:items-start">
              <Image
                src={figma}
                width={70}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="figma"
              />
              <h1 className="mt-6 text-lg font-bold tablet:text-base tablet:font-semibold">
                Figma/PSD to HTML/CSS Conversion
              </h1>
              <p className="text-sm leading-tight text-gray-300">
                I can convert your Figma or PSD design files into pixel-perfect,
                responsive HTML and CSS code. Whether you're working with a
                static design or need specific features like forms, buttons, or
                navigation, I ensure a smooth transition from design to code
                while maintaining design integrity.
              </p>
            </div>
            <div className="w-[25%] tablet:w-[30%] hover:shadow-white/20 hover:shadow-xl hover:backdrop-blur-xl relative p-2 mobile:p-6 min-h-[18rem] mobile:min-h-[20rem] bg-white/10 backdrop-blur-lg rounded-xl shadow-lg shadow-white/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-6 mobile:items-start">
              <Image
                src={react}
                width={70}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="react"
              />
              <h1 className="mt-6 text-lg font-bold tablet:text-base tablet:font-semibold">
                Figma/PSD to React.js
              </h1>
              <p className="text-sm leading-tight text-gray-300">
                If you have a Figma or PSD design, I can bring it to life by
                converting it into a fully functional React.js application. This
                includes creating reusable components, optimizing for
                performance, and integrating your designs with dynamic data or
                state management.
              </p>
            </div>
            <div className="w-[25%] tablet:w-[30%] hover:shadow-white/20 hover:shadow-xl hover:backdrop-blur-xl relative p-2 mobile:p-6 min-h-[18rem] mobile:min-h-[20rem] bg-white/10 backdrop-blur-lg rounded-xl shadow-lg shadow-white/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-6 mobile:items-start">
              <Image
                src={laptop}
                width={70}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="laptop"
              />
              <h1 className="mt-6 text-lg font-bold tablet:text-base tablet:font-semibold">
                Landing Page Development
              </h1>
              <p className="text-sm leading-tight text-gray-300">
                Create high-converting, beautiful landing pages that turn
                visitors into customers. I will design and build optimized,
                responsive landing pages using HTML, CSS, and JavaScript (or
                React) to maximize user engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;