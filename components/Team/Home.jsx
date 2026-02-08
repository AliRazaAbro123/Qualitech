import Image from "next/image";
import React from "react";
import ali from "../../public/assets/ali.png";
import yasir from "../../public/assets/yasir.jpg";
import papu from "../../public/assets/papu.jpg";
import aqib from "../../public/assets/aqib.jpg";
import sami from "../../public/assets/sami.jpg";

function Home() {
  return (
    <div className="flex items-center justify-center w-full h-auto">
      <div className="w-full h-auto flex justify-center flex-col gap-12 mobile:gap-8 py-20 items-center mobile:p-4 mobile:py-16 wide:w-[90rem]">
        <h1 className="text-4xl font-semibold mobile:mb-8">
          Meet Our <span className="text-blue-700">Team</span> ✨
        </h1>
        <div className="w-full h-auto flex justify-around flex-row mobile:flex-col">
          <div
            className="w-[25%] min-h-32 flex flex-row items-center justify-evenly gap-1
             mobile:justify-center mobile:w-full
             group relative overflow-hidden ml-14"
          >
            {/* Left Side */}
            <div
              className="w-1/2 h-full flex flex-col items-center justify-center
                  mobile:justify-center mobile:w-full z-10"
            >
              <Image
                src={yasir}
                alt="CEO & Founder"
                width={130}
                height={140}
                className="mobile:w-3/4 border-4 border-blue-800 rounded-xl p-1"
              />
              <h3 className="text-gray-700 text-sm mobile:text-lg group-hover:opacity-0">
                CEO & Founder
              </h3>
              <h1 className="text-xl group-hover:opacity-0">Shakir Solangi</h1>
            </div>

            {/* Right Side (Animated Text Div) */}
            <div
              className="w-1/2 h-full bg-blue-gray-200 shadow-lg shadow-blue-gray-700
               rounded-md flex flex-col justify-start py-4 px-2
               transform scale-x-0 origin-left
               group-hover:scale-x-100
               transition-transform duration-700 ease-in-out"
            >
              <h1 className="text-blue-900 font-bold text-base">
                Shakir Solangi
              </h1>
              <h1 className="text-blue-900 font-semibold text-[12px] mb-3">
                CEO & FOUNDER
              </h1>
              <p className="text-gray-900 text-[10px]">
                He is a visionary leader and the backbone of the team, with 7+
                years of freelancing experience as a Senior SQA Engineer. He
                leads, mentors, and ensures quality excellence across all
                projects — <b>truly the boss behind our success.</b>
              </p>
            </div>
          </div>

          <div
            className="w-[25%] min-h-32 flex flex-row items-center justify-evenly gap-1
             mobile:justify-center mobile:w-full
             group relative overflow-hidden"
          >
            {/* Left Side */}
            <div
              className="w-1/2 h-full flex flex-col items-center justify-center
                  mobile:justify-center mobile:w-full z-10"
            >
              <Image
                src={ali}
                alt="Ali Raza"
                width={110}
                height={100}
                className="mobile:w-3/4 border-4 border-blue-800 rounded-xl p-1"
              />
              <h3 className="text-gray-700 text-[12px] mobile:text-lg group-hover:opacity-0 leading-[14px]">
                FullStack MERN Web<br />
                 Developer, SQA Engineer
              </h3>
              <h1 className="text-xl group-hover:opacity-0">Ali Raza</h1>
            </div>

            {/* Right Side (Animated Text Div) */}
            <div
              className="w-1/2 h-full bg-blue-gray-200 shadow-lg shadow-blue-gray-700
               rounded-md flex flex-col justify-start py-4 px-2
               transform scale-x-0 origin-left
               group-hover:scale-x-100
               transition-transform duration-700 ease-in-out"
            >
              <h1 className="text-blue-900 font-bold text-base">Ali Raza</h1>
              <h1 className="text-blue-900 font-semibold text-[12px] mb-3 leading-[14px]">
                FullStack MERN Web Developer, <br />
                SQA Engineer & Graphics Designer
              </h1>
              <p className="text-gray-900 text-[10px]">
                He is a multi-skilled professional who builds scalable MERN
                applications, ensures software quality, and designs visually
                appealing graphics, delivering complete and reliable digital
                solutions.
              </p>
            </div>
          </div>
          <div
            className="w-[25%] min-h-32 flex flex-row items-center justify-evenly gap-1
             mobile:justify-center mobile:w-full
             group relative overflow-hidden"
          >
            {/* Left Side */}
            <div
              className="w-1/2 h-full flex flex-col items-center justify-center
                  mobile:justify-center mobile:w-full z-10"
            >
              <Image
                src={sami}
                alt="Samiullah Solangi"
                width={120}
                height={140}
                className="mobile:w-3/4 border-4 border-blue-800 rounded-xl p-1"
              />
              <h3 className="text-gray-700 text-[12px] mobile:text-lg group-hover:opacity-0 leading-[14px]">
                Frontend Web Developer <br />& SQA Engineer
              </h3>
              <h1 className="text-xl group-hover:opacity-0">Shakir Solangi</h1>
            </div>

            {/* Right Side (Animated Text Div) */}
            <div
              className="w-1/2 h-full bg-blue-gray-200 shadow-lg shadow-blue-gray-700
               rounded-md flex flex-col justify-start py-4 px-2
               transform scale-x-0 origin-left
               group-hover:scale-x-100
               transition-transform duration-700 ease-in-out"
            >
              <h1 className="text-blue-900 font-bold text-base">
                Samiullah Solangi
              </h1>
              <h1 className="text-blue-900 font-semibold text-[12px] mb-3 leading-[14px]">
                Frontend Web Developer <br />& SQA Engineer
              </h1>
              <p className="text-gray-900 text-[10px]">
                He is a detail-oriented frontend developer and experienced QA
                tester who focuses on clean UI, smooth user experience, and
                bug-free applications.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex justify-evenly flex-row mobile:flex-col">
          <div
            className="w-[25%] min-h-32 flex flex-row items-center justify-evenly gap-1
             mobile:justify-center mobile:w-full
             group relative overflow-hidden"
          >
            {/* Left Side */}
            <div
              className="w-1/2 h-full flex flex-col items-center justify-center
                  mobile:justify-center mobile:w-full z-10"
            >
              <Image
                src={papu}
                alt="Yasir Solangi"
                width={120}
                height={140}
                className="mobile:w-3/4 border-4 border-blue-800 rounded-xl p-1"
              />
              <h3 className="text-gray-700 text-sm mobile:text-lg group-hover:opacity-0">
                Senior SQA Engineer
              </h3>
              <h1 className="text-xl group-hover:opacity-0">Yasir Solangi</h1>
            </div>

            {/* Right Side (Animated Text Div) */}
            <div
              className="w-1/2 h-full bg-blue-gray-200 shadow-lg shadow-blue-gray-700
               rounded-md flex flex-col justify-start py-4 px-2
               transform scale-x-0 origin-left
               group-hover:scale-x-100
               transition-transform duration-700 ease-in-out"
            >
              <h1 className="text-blue-900 font-bold text-base">
                Yasir Solangi
              </h1>
              <h1 className="text-blue-900 font-semibold text-[12px] mb-3">
                Senior SQA Engineer
              </h1>
              <p className="text-gray-900 text-[10px]">
                He is an experienced Senior SQA Engineer dedicated to delivering
                reliable, well-tested, and high-quality software solutions.
              </p>
            </div>
          </div>
          <div
            className="w-[25%] min-h-32 flex flex-row items-center justify-evenly gap-1
             mobile:justify-center mobile:w-full
             group relative overflow-hidden"
          >
            {/* Left Side */}
            <div
              className="w-1/2 h-full flex flex-col items-center justify-center
                  mobile:justify-center mobile:w-full z-10"
            >
              <Image
                src={aqib}
                alt="Aaqib Ali"
                width={120}
                height={120}
                className="mobile:w-3/4 border-4 border-blue-800 rounded-xl p-1"
              />
              <h3 className="text-gray-700 text-[12px] mobile:text-lg group-hover:opacity-0 leading-[14px]">
                Senior SQA Engineer
              </h3>
              <h1 className="text-xl group-hover:opacity-0">Aaqib Ali</h1>
            </div>

            {/* Right Side (Animated Text Div) */}
            <div
              className="w-1/2 h-full bg-blue-gray-200 shadow-lg shadow-blue-gray-700
               rounded-md flex flex-col justify-start py-4 px-2
               transform scale-x-0 origin-left
               group-hover:scale-x-100
               transition-transform duration-700 ease-in-out"
            >
              <h1 className="text-blue-900 font-bold text-base">Aaqib Ali</h1>
              <h1 className="text-blue-900 font-semibold text-[12px] mb-3">
                Senior SQA Engineer
              </h1>
              <p className="text-gray-900 text-[10px]">
                He is a highly skilled Senior SQA Engineer with a strong eye for
                detail, ensuring product stability, performance, and
                high-quality standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
