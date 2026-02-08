import Image from "next/image";
import React from "react";
import code from "../../public/assets/code.png";
import browser from "../../public/assets/browser.svg";
import database from "../../public/assets/database.png";
import manual from "../../public/assets/manual.png";
import game from "../../public/assets/game.png";
import responsive from "../../public/assets/responsive.png";
import front from "../../public/assets/front.png";
import app from "../../public/assets/app.png";
import backend from "../../public/assets/backend.png";
import Link from "next/link";

function Home() {
  return (
    <div className="w-full h-auto flex justify-center bg-white items-center">
      <div className="w-full h-auto flex justify-center gap-24 py-12 items-center flex-col mobile:mb-8  mobile:p-4 wide:w-[90rem]">
        <div className="w-full h-auto flex justify-center items-center">
          <h1 className="title font-bold text-4xl tracking-wider tablet:text-3xl mobile:text-3xl">
            Services <span className="text-blue-700">We Offer!!</span>
          </h1>
        </div>
        <div className="w-full h-auto flex justify-evenly items-center flex-row mobile:flex-col mobile:justify-center mobile:gap-20">
            <div className="card w-[20%] tablet:w-[30%] hover:shadow-black/20 hover:shadow-xl hover:backdrop-blur-xl relative p-3 mobile:p-6  min-h-[14rem] mobile:min-h-[18rem] bg-black/10 backdrop-blur-lg rounded-xl shadow-lg shadow-black/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-2 mobile:items-start">
              <Image
                src={manual}
                width={70}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="Code"
              />
              <h1 className="tablet:text-base text-base font-bold tablet:font-semibold mt-6 text-blue-700">
                Manual Software Testing (SQA)
              </h1>
              <p className="text-[12px] text-zinc-600">
                We manually test your software to find bugs, usability issues,
                and performance problems—ensuring a smooth and reliable user
                experience.
              </p>
            </div>
            <div className="card w-[20%] tablet:w-[30%] hover:shadow-black/20 hover:shadow-xl hover:backdrop-blur-xl relative p-3 mobile:p-6  min-h-[14rem] mobile:min-h-[18rem] bg-black/10 backdrop-blur-lg rounded-xl shadow-lg shadow-black/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-2 mobile:items-start">
              <Image
                src={game}
                width={70}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="Code"
              />
              <h1 className="tablet:text-base text-base font-bold tablet:font-semibold mt-6 text-blue-700">
                Game Testing
              </h1>
              <p className="text-[12px] text-zinc-600">
                We test games for functionality, usability, and performance to
                ensure a bug-free and enjoyable gaming experience across
                platforms.
              </p>
            </div>
            <div className="card w-[20%] tablet:w-[30%] hover:shadow-black/20 hover:shadow-xl hover:backdrop-blur-xl relative p-3 mobile:p-6  min-h-[14rem] mobile:min-h-[18rem] bg-black/10 backdrop-blur-lg rounded-xl shadow-lg shadow-black/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-2 mobile:items-start">
              <Image
                src={app}
                width={60}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="browser"
              />
              <h1 className="tablet:text-base text-base font-bold tablet:font-semibold mt-6 text-blue-700">
                Application Testing
              </h1>
              <p className="text-[12px] text-zinc-600">
                We perform detailed testing of web and mobile applications to
                ensure features work correctly and meet quality standards before
                release.
              </p>
            </div>
            <div className="card w-[20%] tablet:w-[30%] hover:shadow-black/20 hover:shadow-xl hover:backdrop-blur-xl relative p-3 mobile:p-6  min-h-[14rem] mobile:min-h-[18rem] bg-black/10 backdrop-blur-lg rounded-xl shadow-lg shadow-black/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-2 mobile:items-start">
              <Image
                src={database}
                width={70}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="database"
              />
              <h1 className="tablet:text-base text-base font-bold tablet:font-semibold mt-6 text-blue-700">
                SQA Engineering
              </h1>
              <p className="text-[12px] text-zinc-600">
                We ensure software quality through structured testing, clear
                test cases, and detailed bug reporting. Our SQA engineering
                process helps deliver stable, secure, and reliable products
                ready for real-world use.
              </p>
            </div>
          </div>
        <div className="w-full h-auto flex justify-center items-center gap-16 flex-col mobile:gap-14">
          <div className="w-full h-auto flex justify-evenly items-center flex-row mobile:flex-col mobile:justify-center mobile:gap-20">
            <div className="card w-[20%] tablet:w-[30%] hover:shadow-black/20 hover:shadow-xl hover:backdrop-blur-xl relative p-3 mobile:p-6  min-h-[14rem] mobile:min-h-[18rem] bg-black/10 backdrop-blur-lg rounded-xl shadow-lg shadow-black/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-2 mobile:items-start">
              <Image
                src={code}
                width={50}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.2rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="Code"
              />
              <h1 className="tablet:text-base text-base font-bold tablet:font-semibold mt-6 text-blue-700">
                Full-Stack Web Development
              </h1>
              <p className="text-[12px] text-zinc-600">
                We build complete, scalable web applications from frontend to
                backend using modern technologies. From UI to databases and
                APIs, we deliver fast, secure, and production-ready solutions.
              </p>
            </div>
            <div className="card w-[20%] tablet:w-[30%] hover:shadow-black/20 hover:shadow-xl hover:backdrop-blur-xl relative p-3 mobile:p-6  min-h-[14rem] mobile:min-h-[18rem] bg-black/10 backdrop-blur-lg rounded-xl shadow-lg shadow-black/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-2 mobile:items-start">
              <Image
                src={front}
                width={50}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.2rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="Code"
              />
              <h1 className="tablet:text-base text-base font-bold tablet:font-semibold mt-6 text-blue-700">
                Frontend Web Development
              </h1>
              <p className="text-[12px] text-zinc-600">
                We create responsive, pixel-perfect, and user-friendly
                interfaces that work smoothly on all devices. Our focus is clean
                UI, great UX, and high performance.
              </p>
            </div>
            <div className="card w-[20%] tablet:w-[30%] hover:shadow-black/20 hover:shadow-xl hover:backdrop-blur-xl relative p-3 mobile:p-6  min-h-[14rem] mobile:min-h-[18rem] bg-black/10 backdrop-blur-lg rounded-xl shadow-lg shadow-black/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-2 mobile:items-start">
              <Image
                src={backend}
                width={50}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.2rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="browser"
              />
              <h1 className="tablet:text-base text-base font-bold tablet:font-semibold mt-6 text-blue-700">
                Backend Web Development
              </h1>
              <p className="text-[12px] text-zinc-600">
                We develop powerful and secure backend systems, APIs, and
                databases to handle your application’s logic, performance, and
                scalability.
              </p>
            </div>
            <div className="card w-[20%] tablet:w-[30%] hover:shadow-black/20 hover:shadow-xl hover:backdrop-blur-xl relative p-3 mobile:p-6  min-h-[14rem] mobile:min-h-[18rem] bg-black/10 backdrop-blur-lg rounded-xl shadow-lg shadow-black/10 flex justify-center gap-4 items-start flex-col mobile:w-full mobile:gap-2 mobile:items-start">
              <Image
                src={responsive}
                width={70}
                height={50}
                className="tablet:w-20 mobile:w-16 absolute top-[-2.5rem] mobile:top-[-2.3rem] left-[2rem]"
                alt="database"
              />
              <h1 className="tablet:text-base text-base font-bold tablet:font-semibold mt-6 text-blue-700">
                UI/UX to Responsive Website
              </h1>
              <p className="text-[12px] text-zinc-600">
                We convert Figma, Adobe XD, and PSD designs into fully
                responsive, high-quality websites with clean code and modern
                standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
