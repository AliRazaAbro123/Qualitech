import Image from "next/image";
import React from "react";
import strugbits1 from "../../public/assets/strugbits1.jpg";
import strugbits2 from "../../public/assets/strugbits2.jpg";
import CareerCoreValue from "../../public/assets/CareerCoreValue.jpg";
import calculator1 from "../../public/assets/calculator1.jpg";
import calculator2 from "../../public/assets/calculator2.jpg";
import calculator3 from "../../public/assets/calculator3.jpg";
import ContactForm from "../../public/assets/ContactForm.jpg";
import bgClick1 from "../../public/assets/bgClick1.jpg";
import bgClick2 from "../../public/assets/bgClick2.jpg";
import bgClick3 from "../../public/assets/bgClick3.jpg";
import bgClick4 from "../../public/assets/bgClick4.jpg";
import I2p1 from "../../public/assets/I2p1.jpg";
import I2p2 from "../../public/assets/I2p2.jpg";
import I2p3 from "../../public/assets/I2p3.jpg";
import I2p4 from "../../public/assets/I2p4.jpg";
import Arabical1 from "../../public/assets/Arabical1.jpg";
import Arabical2 from "../../public/assets/Arabical2.jpg";
import Arabical3 from "../../public/assets/Arabical3.jpg";
import Arabical4 from "../../public/assets/Arabical4.jpg";
import jotnow1 from "../../public/assets/jotnow1.jpg";
import jotnow2 from "../../public/assets/jotnow2.jpg";
import jotnow3 from "../../public/assets/jotnow3.jpg";
import jotnow4 from "../../public/assets/jotnow4.jpg";
import Link from "next/link";
import CustomCss from "@/components/CustomCss.css";

function PortfolioPage() {
  return (
    <div className="flex items-center justify-center w-full h-auto">
      <div className="w-full h-auto wide:h-screen flex justify-center gap-12 py-16 items-center flex-col mobile:p-4 mobile:py-20 wide:w-[90rem]">
        <div className="flex items-center justify-center w-full h-auto">
          <h1 className="text-4xl font-bold tracking-wider title tablet:text-3xl mobile:text-3xl">
            Latest <span className="text-blue-700">Projects</span>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-auto gap-10 mobile:gap-12">
          <div className="flex flex-row items-center justify-center w-full h-auto gap-12 rounded-lg mobile:flex-col">
            <div className="w-1/3 h-auto overflow-hidden mobile:w-full">
              <Image
                src={strugbits1}
                height={400}
                alt="Strugbits"
                className="w-full rounded-xl mobile:w-full"
              />
            </div>
            <div className="flex flex-col items-start justify-center w-1/2 mobile:w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-blue-700 mobile:text-lg">
                Strugbits
              </h1>
              <p className="text-sm text-gray-300">
                A modern software company website built with React and Next.js,
                designed using Tailwind CSS for a responsive, sleek look. It
                includes real-time contact functionality powered by Nodemailer
                and features polished UI components from Material UI. This
                project combines practical functionality with elegant design for
                a seamless user experience.
              </p>
              <h3 className="text-sm text-gray-300">
                <span className="text-lg text-blue-700">Tech Stack : </span>
                REACT - NEXT JS, TAILWIND CSS and NODEMAILER
              </h3>
              <Link
                href={"https://strugbit.vercel.app/"}
                target="_blank"
                className="w-auto h-auto px-8 py-2 mt-8 mb-8 font-semibold text-center bg-blue-700 rounded-md btn mobile:w-full mobile:py-3"
              >
                Visit Live! &gt;
              </Link>
            </div>
          </div>
          <div className="w-full h-auto flex justify-evenly items-center flex-row py-8 mb-8 border-b-2 border-gray-700 bg-[#05010fee] mobile:justify-center mobile:gap-4 mobile:flex-col">
            <Image
              src={CareerCoreValue}
              alt="Strugbits"
              height={300}
              width={400}
              className="rounded-lg mobile:rounded-sm"
            />
            <Image
              src={strugbits2}
              alt="Strugbits"
              height={300}
              width={400}
              className="rounded-lg mobile:rounded-sm"
            />
            <Image
              src={ContactForm}
              alt="Strugbits"
              height={300}
              width={400}
              className="rounded-lg mobile:rounded-sm"
            />
          </div>
          <div className="flex flex-row items-center justify-center w-full h-auto gap-8 rounded-lg mobile:flex-col">
            <div className="w-1/3 h-auto overflow-hidden mobile:w-full">
              <Image
                src={calculator1}
                height={300}
                alt="Calculator"
                className="w-full rounded-xl mobile:w-full"
              />
            </div>
            <div className="flex flex-col items-start justify-center w-1/2 mobile:w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-blue-700 mobile:text-lg">
                Calculator App
              </h1>
              <p className="text-sm text-gray-300">
                A sleek and intuitive calculator application built with React
                and Next.js, featuring a modern, responsive interface. Styled
                with Tailwind CSS for a clean, minimalist design, it ensures
                smooth functionality across all devices. The app delivers a
                seamless, user-friendly experience, blending practicality with
                aesthetics in a single, powerful tool.
              </p>
              <h3 className="text-sm text-gray-300">
                <span className="text-lg text-blue-700">Tech Stack : </span>
                REACT - NEXT JS, TAILWIND CSS and MATERIAL UI
              </h3>
              <Link
                href={"https://calcnow.vercel.app/"}
                target="_blank"
                className="w-auto h-auto px-8 py-2 mt-8 mb-8 font-semibold text-center bg-blue-700 rounded-md btn mobile:w-full mobile:py-3"
              >
                Visit Live! &gt;
              </Link>
            </div>
          </div>
          <div className="w-full h-auto flex justify-evenly items-center flex-row py-8 mb-8 border-b-2 border-gray-700 bg-[#05010fee] mobile:justify-center mobile:gap-4 mobile:flex-col">
            <Image
              src={calculator2}
              alt="Calculator"
              height={300}
              width={400}
              className="rounded-lg mobile:rounded-sm"
            />
            <Image
              src={calculator3}
              alt="Calculator"
              height={300}
              width={300}
              className="mobile:w-full rounded-lg mobile:rounded-sm"
            />
            <Image
              src={calculator1}
              alt="Calculator"
              height={300}
              width={400}
              className="rounded-lg mobile:rounded-sm"
            />
          </div>
          <div className="flex flex-row items-center justify-center w-full h-auto gap-8 rounded-lg mobile:flex-col">
            <div className="w-1/3 h-auto overflow-hidden mobile:w-full">
              <Image
                src={bgClick1}
                height={300}
                alt="BgClick"
                className="w-full rounded-xl mobile:w-full"
              />
            </div>
            <div className="flex flex-col items-start justify-center w-1/2 mobile:w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-blue-700 mobile:text-lg">
                Background Changing
              </h1>
              <p className="text-sm text-gray-300">
                A sleek and intuitive calculator application built with React
                and Next.js, featuring a modern, responsive interface. Styled
                with Tailwind CSS for a clean, minimalist design, it ensures
                smooth functionality across all devices. The app delivers a
                seamless, user-friendly experience, blending practicality with
                aesthetics in a single, powerful tool.
              </p>
              <h3 className="text-sm text-gray-300">
                <span className="text-lg text-blue-700">Tech Stack : </span>
                REACT - NEXT JS, TAILWIND CSS and MATERIAL UI
              </h3>
              <Link
                href={"https://bgclick.vercel.app/"}
                target="_blank"
                className="w-auto h-auto px-8 py-2 mt-8 mb-8 font-semibold text-center bg-blue-700 rounded-md btn mobile:w-full mobile:py-3"
              >
                Visit Live! &gt;
              </Link>
            </div>
          </div>
          <div className="w-full h-auto flex justify-evenly items-center flex-row py-8 mb-8 border-b-2 border-gray-700 bg-[#05010fee] mobile:justify-center mobile:gap-4 mobile:flex-col">
            <Image
              src={bgClick2}
              alt="BgClick"
              height={300}
              width={400}
              className="rounded-lg mobile:rounded-sm"
            />
            <Image
              src={bgClick3}
              alt="BgClick"
              height={300}
              width={400}
              className="mobile:w-full rounded-lg mobile:rounded-sm"
            />
            <Image
              src={bgClick4}
              alt="BgClick"
              height={300}
              width={400}
              className="rounded-lg mobile:rounded-sm"
            />
          </div>
          <div className="flex flex-row items-center justify-center w-full h-auto gap-8 rounded-lg mobile:flex-col">
            <div className="w-1/3 h-auto overflow-hidden mobile:w-full">
              <Image
                src={jotnow1}
                height={300}
                alt="JotNow"
                className="w-full rounded-xl mobile:w-full"
              />
            </div>
            <div className="flex flex-col items-start justify-center w-1/2 mobile:w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-blue-700 mobile:text-lg">
                JotNow - Note Taking App
              </h1>
              <p className="text-sm text-gray-300">
                A sleek and intuitive calculator application built with React
                and Next.js, featuring a modern, responsive interface. Styled
                with Tailwind CSS for a clean, minimalist design, it ensures
                smooth functionality across all devices. The app delivers a
                seamless, user-friendly experience, blending practicality with
                aesthetics in a single, powerful tool.
              </p>
              <h3 className="text-sm text-gray-300">
                <span className="text-lg text-blue-700">Tech Stack : </span>
                REACT - NEXT JS, TAILWIND CSS and MATERIAL UI
              </h3>
              <Link
                href={"https://jotnow.vercel.app/"}
                target="_blank"
                className="w-auto h-auto px-8 py-2 mt-8 mb-8 font-semibold text-center bg-blue-700 rounded-md btn mobile:w-full mobile:py-3"
              >
                Visit Live! &gt;
              </Link>
            </div>
          </div>
          <div className="w-full h-auto flex justify-evenly items-center flex-row py-8 mb-8 border-b-2 border-gray-700 bg-[#05010fee] mobile:justify-center mobile:gap-4 mobile:flex-col">
            <Image
              src={jotnow2}
              alt="JotNow"
              height={300}
              width={400}
              className="rounded-lg mobile:rounded-sm"
            />
            <Image
              src={jotnow3}
              alt="JotNow"
              height={300}
              width={400}
              className="mobile:w-full rounded-lg mobile:rounded-sm"
            />
            <Image
              src={jotnow4}
              alt="JotNow"
              height={300}
              width={400}
              className="rounded-lg mobile:rounded-sm"
            />
          </div>
          <div className="flex flex-row items-center justify-center w-full h-auto gap-8 rounded-lg mobile:flex-col">
            <div className="w-1/3 h-auto overflow-hidden mobile:w-full">
              <Image
                src={Arabical1}
                height={300}
                alt="Arabical"
                className="w-full rounded-xl mobile:w-full"
              />
            </div>
            <div className="flex flex-col items-start justify-center w-1/2 mobile:w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-blue-700 mobile:text-lg">
                Background Changing
              </h1>
              <p className="text-sm text-gray-300">
                A sleek and intuitive calculator application built with React
                and Next.js, featuring a modern, responsive interface. Styled
                with Tailwind CSS for a clean, minimalist design, it ensures
                smooth functionality across all devices. The app delivers a
                seamless, user-friendly experience, blending practicality with
                aesthetics in a single, powerful tool.
              </p>
              <h3 className="text-sm text-gray-300">
                <span className="text-lg text-blue-700">Tech Stack : </span>
                REACT - NEXT JS, TAILWIND CSS and MATERIAL UI
              </h3>
              <Link
                href={"https://arabical.vercel.app/"}
                target="_blank"
                className="w-auto h-auto px-8 py-2 mt-8 mb-8 font-semibold text-center bg-blue-700 rounded-md btn mobile:w-full mobile:py-3"
              >
                Visit Live! &gt;
              </Link>
            </div>
          </div>
          <div className="w-full h-auto flex justify-evenly items-center flex-row py-8 mb-8 border-b-2 border-gray-700 bg-[#05010fee] mobile:justify-center mobile:gap-4 mobile:flex-col">
            <Image
              src={Arabical2}
              alt="Arabical"
              height={300}
              width={400}
              className="rounded-lg mobile:rounded-sm"
            />
            <Image
              src={Arabical3}
              alt="Arabical"
              height={300}
              width={400}
              className="mobile:w-full rounded-lg mobile:rounded-sm"
            />
            <Image
              src={Arabical4}
              alt="Arabical"
              height={300}
              width={400}
              className="rounded-lg mobile:rounded-sm"
            />
          </div>
          <div className="flex flex-row items-center justify-center w-full h-auto gap-8 rounded-lg mobile:flex-col">
            <div className="w-1/3 h-auto overflow-hidden mobile:w-full">
              <Image
                src={I2p1}
                height={300}
                alt="I2p"
                className="w-full rounded-xl mobile:w-full"
              />
            </div>
            <div className="flex flex-col items-start justify-center w-1/2 mobile:w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-blue-700 mobile:text-lg">
                Background Changing
              </h1>
              <p className="text-sm text-gray-300">
                A sleek and intuitive calculator application built with React
                and Next.js, featuring a modern, responsive interface. Styled
                with Tailwind CSS for a clean, minimalist design, it ensures
                smooth functionality across all devices. The app delivers a
                seamless, user-friendly experience, blending practicality with
                aesthetics in a single, powerful tool.
              </p>
              <h3 className="text-sm text-gray-300">
                <span className="text-lg text-blue-700">Tech Stack : </span>
                REACT - NEXT JS, TAILWIND CSS and MATERIAL UI
              </h3>
              <Link
                href={"https://i2product.vercel.app/"}
                target="_blank"
                className="w-auto h-auto px-8 py-2 mt-8 mb-8 font-semibold text-center bg-blue-700 rounded-md btn mobile:w-full mobile:py-3"
              >
                Visit Live! &gt;
              </Link>
            </div>
          </div>
          <div className="w-full h-auto flex justify-evenly items-center flex-row py-8 mb-8 border-b-2 border-gray-700 bg-[#05010fee] mobile:justify-center mobile:gap-4 mobile:flex-col">
            <Image
              src={I2p2}
              alt="I2p"
              height={300}
              width={400}
              className="rounded-lg mobile:rounded-sm"
            />
            <Image
              src={I2p3}
              alt="I2p"
              height={300}
              width={400}
              className="mobile:w-full rounded-lg mobile:rounded-sm"
            />
            <Image
              src={I2p4}
              alt="I2p"
              height={300}
              width={400}
              className="rounded-lg mobile:rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
