import Image from "next/image";
import React from "react";
import strugbits1 from "../../public/assets/strugbits1.jpg";
import strugbits2 from "../../public/assets/strugbits2.jpg";
import Link from "next/link";
import CustomCss from "@/components/CustomCss.css";

function PortfolioPage() {
  return (
    <div className="flex items-center justify-center w-full h-auto">
      <div className="w-full h-auto wide:h-screen flex justify-center gap-12 py-16 items-center flex-col mobile:p-4 mobile:py-24 wide:w-[90rem]">
        <div className="flex items-center justify-center w-full h-auto">
          <h1 className="text-4xl font-bold tracking-wider title tablet:text-3xl mobile:text-3xl">
            Latest <span className="text-blue-700">Projects</span>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-auto gap-10 mobile:gap-12">
            <div className="flex flex-row items-center justify-center w-full h-auto gap-8 rounded-lg mobile:flex-col">
              <div className="w-1/3 h-auto overflow-hidden mobile:w-full">
                <Image
                  src={strugbits1}
                  height={400}
                  alt="Project"
                  className="w-full rounded-xl mobile:w-full"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-1/2 mobile:w-full">
                <h1 className="text-2xl font-semibold tracking-wider text-blue-700 mobile:text-lg">
                  Strugbits
                </h1>
                <p className="text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus sequi corrupti atque eius optio rem veritatis
                  laudantium, officiis, sit repellat harum tempore? Ut laborum
                  error porro sunt cumque vero odio.
                </p>
                <h3 className="text-sm text-gray-300">
                  <span className="text-lg text-blue-700">Tech Stack : </span>
                  REACT - NEXT JS, TAILWIND CSS and NODEMAILER
                </h3>
                <Link
                  href={"/"}
                  target="_blank"
                  className="w-auto h-auto px-8 py-2 mt-8 mb-8 font-semibold text-center bg-blue-700 rounded-md btn mobile:w-full mobile:py-3"
                >
                  Visit Live! &gt;
                </Link>
              </div>
            </div>
            <div  className="w-full h-auto flex justify-evenly items-center flex-row py-6 border-b-2 border-gray-700 bg-[#05010fee] mobile:justify-center mobile:gap-4 mobile:flex-col">
              <Image src={strugbits2} alt="strugbits2" height={300} width={400} className="rounded-lg mobile:rounded-sm"/>
              <Image src={strugbits1} alt="Example" height={300} width={400} className="rounded-lg mobile:rounded-sm"/>
              <Image src={strugbits1} alt="Example" height={300} width={400} className="rounded-lg mobile:rounded-sm"/>
            </div>
            {/* <div className="flex flex-row items-center justify-center w-full h-auto gap-8 rounded-lg">
              <div className="w-1/3 h-auto overflow-hidden">
                <Image
                  src={strugbits2}
                  height={300}
                  alt="Project"
                  className="w-full rounded-xl mobile:w-full"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-1/2">
                <h1 className="text-2xl font-semibold tracking-wider text-blue-700 mobile:text-lg">
                  Daraz App
                </h1>
                <p className="text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus sequi corrupti atque eius optio rem veritatis
                  laudantium, officiis, sit repellat harum tempore? Ut laborum
                  error porro sunt cumque vero odio.
                </p>
                <h3 className="text-sm text-gray-300">
                  <span className="text-lg text-blue-700">Tech Stack : </span>
                  REACT - NEXT JS, TAILWIND CSS, NODEMAILER, MONGODB, BOOTSTRAP
                  and MATERIAL UI
                </h3>
                <Link
                  href={"/"}
                  target="_blank"
                  className="w-auto h-auto px-8 py-2 mt-8 mb-8 font-semibold text-center bg-blue-700 rounded-md btn mobile:w-full mobile:py-3"
                >
                  Visit Live! &gt;
                </Link>
              </div>
            </div>
            <div  className="w-full h-auto flex justify-evenly items-center flex-row py-6 border-b-2 border-gray-700 bg-[#05010fee]">
              <Image src={strugbits1} alt="Example" height={300} width={400} className="rounded-lg"/>
              <Image src={strugbits1} alt="Example" height={300} width={400} className="rounded-lg"/>
              <Image src={strugbits1} alt="Example" height={300} width={400} className="rounded-lg"/>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-auto gap-8 rounded-lg">
              <div className="w-1/3 h-auto overflow-hidden">
                <Image
                  src={strugbits1}
                  height={300}
                  alt="Project"
                  className="w-full rounded-xl mobile:w-full"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-1/2">
                <h1 className="text-2xl font-semibold tracking-wider text-blue-700 mobile:text-lg">
                  Blogging Site
                </h1>
                <p className="text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus sequi corrupti atque eius optio rem veritatis
                  laudantium, officiis, sit repellat harum tempore? Ut laborum
                  error porro sunt cumque vero odio.
                </p>
                <h3 className="text-sm text-gray-300">
                  <span className="text-lg text-blue-700">Tech Stack : </span>
                  REACT, EXPRESS JS, PASSPORT, TAILWIND CSS, NODEMAILER,
                  MONGODB, BOOTSTRAP and MATERIAL UI
                </h3>
                <Link
                  href={"/"}
                  target="_blank"
                  className="w-auto h-auto px-8 py-2 mt-8 mb-8 font-semibold text-center bg-blue-700 rounded-md btn mobile:w-full mobile:py-3"
                >
                  Visit Live! &gt;
                </Link>
              </div>
            </div>
            <div  className="w-full h-auto flex justify-evenly items-center flex-row py-6 border-b-2 border-gray-700 bg-[#05010fee]">
              <Image src={strugbits1} alt="Example" height={300} width={400} className="rounded-lg"/>
              <Image src={strugbits1} alt="Example" height={300} width={400} className="rounded-lg"/>
              <Image src={strugbits1} alt="Example" height={300} width={400} className="rounded-lg"/>
            </div> */}
          </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
