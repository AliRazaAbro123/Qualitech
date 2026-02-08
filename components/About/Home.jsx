import React from "react";
import CustomCss from "@/components/CustomCss.css";
import Link from "next/link";
import bg from "../../public/assets/bg2.jpg";
import Image from "next/image";

function AboutHome() {
  return (
    <div className="w-full h-auto flex bg-white justify-center items-center">
      <div className="w-full h-auto py-24 mobile:mb-8 flex justify-evenly items-center flex-row mobile:p-4 mobile:flex-col-reverse mobile:justify-center mobile:gap-6 wide:w-[90rem]">
        <div className="w-1/3 h-auto mobile:w-full">
          <Image src={bg} width={550} alt="Home page icon" />
        </div>
        <div className="w-[60%] mobile:w-full h-auto flex justify-center gap-4 items-start flex-col py-5 px-12 mobile:px-2 mobile:items-center">
          <div className="w-full h-auto flex justify-center items-start flex-col gap-2 mobile:items-center">
            <h1 className="title font-bold text-4xl tracking-wider mb-4 tablet:text-3xl mobile:text-3xl">
              About <span className="text-blue-700">Us</span> ✨
            </h1>
            <h2 className="font-semibold text-xl tracking-wide tablet:text-xl mobile:text-lg mobile:text-center">
              We Offer Web Development & SQA Services
            </h2>
          </div>
          <div className="w-full h-auto flex justify-center items-start flex-col gap-3 mobile:items-center">
            <p className="text-zinc-700 text-sm leading-normal tracking-wide">
              "Your Partner in Web Development and Quality Assurance
              Excellence", {""}
              Let me know if anything more you need from our side
            </p>
            <div className="w-full h-auto flex justify-between bg-white py-4 shadow-lg items-start flex-row mobile:items-center mt-8 mobile:justify-center mobile:flex-col mobile:gap-8 mobile:py-8">
              <div className="w-[20%] mobile:w-full h-auto flex justify-center items-center flex-col gap-1 mobile:gap-2">
                <h3>Team Members</h3>
                <h1 className="text-xl text-blue-900 font-bold">5</h1>
              </div>
              <div className="w-[20%] mobile:w-full h-auto flex justify-center items-center flex-col gap-1 mobile:gap-2">
                <h3>Happy Clients</h3>
                <h1 className="text-xl text-blue-900 font-bold">100%</h1>
              </div>
              <div className="w-[25%] mobile:w-full h-auto flex justify-center items-center flex-col gap-1 mobile:gap-2">
                <h3>SQA Projects Done</h3>
                <h1 className="text-xl text-blue-900 font-bold">52+</h1>
              </div>
              <div className="w-[35%] mobile:w-full h-auto flex justify-center items-center flex-col gap-1 mobile:gap-2">
                <h3>Development Projects Done</h3>
                <h1 className="text-xl text-blue-900 font-bold">20+</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHome;
