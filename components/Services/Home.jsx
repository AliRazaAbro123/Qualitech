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
    <div className="w-full h-auto flex justify-center bg-white items-center">
      <div className="w-full h-auto flex justify-center gap-24 py-12 items-center flex-col mobile:mb-8  mobile:p-4 wide:w-[90rem]">
        <div className="w-full h-auto flex justify-center items-center">
          <h1 className="title font-bold text-4xl tracking-wider tablet:text-3xl mobile:text-3xl">
            Our <span className="text-blue-700">Services</span>
          </h1>
        </div>
        <div className="w-full h-auto flex justify-center items-center gap-16 flex-col mobile:gap-14">
          <div className="w-full h-auto flex justify-evenly items-center flex-row mobile:flex-col mobile:justify-center mobile:gap-20">
            <div className="card w-[20%] tablet:w-[30%] hover:shadow-black/20 hover:shadow-xl hover:backdrop-blur-xl relative p-3 mobile:p-6  min-h-[16rem] mobile:min-h-[18rem] bg-black/10 backdrop-blur-lg rounded-xl shadow-lg shadow-black/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-2 mobile:items-start">
              <Image
                src={code}
                width={70}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="Code"
              />
              <h1 className="tablet:text-base text-lg font-bold tablet:font-semibold mt-6 text-blue-700">
                Fullstack Development
              </h1>
              <p className="text-sm text-zinc-600">
                I build dynamic web applications using the MERN stack (MongoDB,
                Express.js, React.js, Node.js). From front-end to back-end, I
                ensure seamless integration, scalability, and strong
                performance.
              </p>
            </div>
            <div className="card w-[20%] tablet:w-[30%] hover:shadow-black/20 hover:shadow-xl hover:backdrop-blur-xl relative p-3 mobile:p-6  min-h-[16rem] mobile:min-h-[18rem] bg-black/10 backdrop-blur-lg rounded-xl shadow-lg shadow-black/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-2 mobile:items-start">
              <Image
                src={code}
                width={70}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="Code"
              />
              <h1 className="tablet:text-base text-lg font-bold tablet:font-semibold mt-6 text-blue-700">
                Fullstack Development
              </h1>
              <p className="text-sm text-zinc-600">
                I build dynamic web applications using the MERN stack (MongoDB,
                Express.js, React.js, Node.js). From front-end to back-end, I
                ensure seamless integration, scalability, and strong
                performance.
              </p>
            </div>
            <div className="card w-[20%] tablet:w-[30%] hover:shadow-black/20 hover:shadow-xl hover:backdrop-blur-xl relative p-3 mobile:p-6  min-h-[16rem] mobile:min-h-[18rem] bg-black/10 backdrop-blur-lg rounded-xl shadow-lg shadow-black/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-2 mobile:items-start">
              <Image
                src={browser}
                width={60}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="browser"
              />
              <h1 className="tablet:text-base text-lg font-bold tablet:font-semibold mt-6 text-blue-700">
                SQA Engineering
              </h1>
              <p className="text-sm text-zinc-600">
                We ensure software quality through testing and validation.
                Combining manual and automated techniques, I identify bugs,
                verify functionality, and maintain standards. My focus is
                delivering stable, user-friendly applications that meet
                expectations.
              </p>
            </div>
            <div className="card w-[20%] tablet:w-[30%] hover:shadow-black/20 hover:shadow-xl hover:backdrop-blur-xl relative p-3 mobile:p-6  min-h-[16rem] mobile:min-h-[18rem] bg-black/10 backdrop-blur-lg rounded-xl shadow-lg shadow-black/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-2 mobile:items-start">
              <Image
                src={database}
                width={70}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="database"
              />
              <h1 className="tablet:text-base text-lg font-bold tablet:font-semibold mt-6 text-blue-700">
                Software Testing
              </h1>
              <p className="text-sm text-zinc-600">
                We validate software through structured testing. Using manual
                and automated methods, I detect issues early for a smooth user
                experience. My goal is reliable software delivery.
              </p>
            </div>
          </div>
          <div className="w-full h-auto flex justify-evenly items-center flex-row mobile:flex-col mobile:justify-center mobile:gap-20">
            <div className="card w-[20%] tablet:w-[30%] hover:shadow-black/20 hover:shadow-xl hover:backdrop-blur-xl relative p-3 mobile:p-6  min-h-[16rem] mobile:min-h-[18rem] bg-black/10 backdrop-blur-lg rounded-xl shadow-lg shadow-black/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-2 mobile:items-start">
              <Image
                src={code}
                width={70}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="Code"
              />
              <h1 className="tablet:text-base text-lg font-bold tablet:font-semibold mt-6 text-blue-700">
                Fullstack Development
              </h1>
              <p className="text-sm text-zinc-600">
                I build dynamic web applications using the MERN stack (MongoDB,
                Express.js, React.js, Node.js). From front-end to back-end, I
                ensure seamless integration, scalability, and strong
                performance.
              </p>
            </div>
            <div className="card w-[20%] tablet:w-[30%] hover:shadow-black/20 hover:shadow-xl hover:backdrop-blur-xl relative p-3 mobile:p-6  min-h-[16rem] mobile:min-h-[18rem] bg-black/10 backdrop-blur-lg rounded-xl shadow-lg shadow-black/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-2 mobile:items-start">
              <Image
                src={code}
                width={70}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="Code"
              />
              <h1 className="tablet:text-base text-lg font-bold tablet:font-semibold mt-6 text-blue-700">
                Fullstack Development
              </h1>
              <p className="text-sm text-zinc-600">
                I build dynamic web applications using the MERN stack (MongoDB,
                Express.js, React.js, Node.js). From front-end to back-end, I
                ensure seamless integration, scalability, and strong
                performance.
              </p>
            </div>
            <div className="card w-[20%] tablet:w-[30%] hover:shadow-black/20 hover:shadow-xl hover:backdrop-blur-xl relative p-3 mobile:p-6  min-h-[16rem] mobile:min-h-[18rem] bg-black/10 backdrop-blur-lg rounded-xl shadow-lg shadow-black/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-2 mobile:items-start">
              <Image
                src={browser}
                width={60}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="browser"
              />
              <h1 className="tablet:text-base text-lg font-bold tablet:font-semibold mt-6 text-blue-700">
                SQA Engineering
              </h1>
              <p className="text-sm text-zinc-600">
                We ensure software quality through testing and validation.
                Combining manual and automated techniques, I identify bugs,
                verify functionality, and maintain standards. My focus is
                delivering stable, user-friendly applications that meet
                expectations.
              </p>
            </div>
            <div className="card w-[20%] tablet:w-[30%] hover:shadow-black/20 hover:shadow-xl hover:backdrop-blur-xl relative p-3 mobile:p-6  min-h-[16rem] mobile:min-h-[18rem] bg-black/10 backdrop-blur-lg rounded-xl shadow-lg shadow-black/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-2 mobile:items-start">
              <Image
                src={database}
                width={70}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="database"
              />
              <h1 className="tablet:text-base text-lg font-bold tablet:font-semibold mt-6 text-blue-700">
                Software Testing
              </h1>
              <p className="text-sm text-zinc-600">
                We validate software through structured testing. Using manual
                and automated methods, I detect issues early for a smooth user
                experience. My goal is reliable software delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
