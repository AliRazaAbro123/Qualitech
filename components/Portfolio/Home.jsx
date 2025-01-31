import Image from "next/image";
import React from "react";
import strugbits1 from "../../public/assets/strugbits1.jpg";
import calculator1 from "../../public/assets/calculator1.jpg";
import Link from "next/link";

function Home() {
  return (
    <div className="flex items-center justify-center w-full h-auto">
      <div className="w-full h-auto flex justify-center gap-10 py-16 items-center flex-col mobile:p-4 mobile:py-24 wide:w-[90rem]">
        <div className="flex items-center justify-center w-full h-auto">
          <h1 className="text-4xl font-bold tracking-wider title tablet:text-3xl mobile:text-3xl">
            Latest <span className="text-blue-700">Projects</span>
          </h1>
        </div>
        <div className="flex flex-row py-4 items-center justify-center w-full h-auto gap-12 mobile:flex-col mobile:gap-12">
          <div className="w-[28%] mobile:w-full h-auto flex justify-center items-start flex-col gap-2">
            <Image
              src={strugbits1}
              height={300}
              alt="Strugbits"
              className="w-full rounded-xl mobile:w-full"
            />
            <h1 className="text-xl tracking-wider text-blue-700">Strugbits</h1>
            <p className="text-sm leading-tight text-gray-300">
              A modern software company website built with React and Next.js,
              styled using Tailwind CSS for responsiveness and sleek design. It
              includes real-time contact functionality powered by Nodemailer and
              polished UI components from Material UI. A seamless blend of
              functionality and aesthetics!
            </p>
            <h3 className="text-sm leading-tight text-gray-300">
              <span className="text-base text-blue-700">Tech Stack : </span>
              REACT - NEXT JS, TAILWIND CSS, MATERIAL UI and NODEMAILER
            </h3>
            <Link
              href={"https://strugbit.vercel.app/"}
              target="_blank"
              className="text-base text-blue-700 underline hover:text-white"
            >
              Visit Live! &gt;
            </Link>
          </div>
          <div className="w-[28%] mobile:w-full h-auto flex justify-center items-start flex-col gap-2">
            <Image
              src={calculator1}
              height={300}
              alt="Project"
              className="w-full rounded-xl mobile:w-full"
            />
            <h1 className="text-xl tracking-wider text-blue-700">
              Calculator App
            </h1>
            <p className="text-sm leading-tight text-gray-300">
              A sleek and intuitive calculator application built with React and
              Next.js, offering a modern and responsive interface. Styled with
              Tailwind CSS for a clean design, it ensures smooth functionality
              across devices. The app features a seamless, user-friendly
              experience, combining practicality and aesthetics in one tool!
            </p>
            <h3 className="text-sm leading-tight text-gray-300">
              <span className="text-base text-blue-700">Tech Stack :</span>
              REACT - NEXT JS, TAILWIND CSS and MATERIAL UI
            </h3>
            <Link
              href={"https://calcnow.vercel.app/"}
              target="_blank"
              className="text-base text-blue-700 underline hover:text-white"
            >
              Visit Live! &gt;
            </Link>
          </div>
          {/* <div className="w-[28%] mobile:w-full h-auto flex justify-center items-start flex-col gap-2">
              <Image
                src={strugbits1}
                height={300}
                alt="Project"
                className="w-full rounded-xl mobile:w-full"
              />
              <h1 className="text-xl tracking-wider text-blue-700">
                Blogging Site
              </h1>
              <p className="text-sm leading-tight text-gray-300">
                A feature-rich blogging platform developed with React, Node.js,
                and Express.js, backed by MongoDB and Mongoose for efficient
                data management. Styled with Material UI, Bootstrap, and ShadCN,
                it offers a sleek, responsive design. Seamlessly integrated with
                RESTful APIs, this platform ensures smooth content creation and
                management for an exceptional blogging experience.
              </p>
              <h3 className="text-sm leading-tight text-gray-300">
                <span className="text-base text-blue-700">Tech Stack :</span>
                REACT, EXPRESS JS, PASSPORT, TAILWIND CSS, NODEMAILER, MONGODB,
                BOOTSTRAP and MATERIAL UI
              </h3>
              <Link
                href={"/"}
                target="_blank"
                className="text-base text-blue-700 underline hover:text-white"
              >
                Visit Live! &gt;
              </Link>
            </div> */}
        </div>
        <div className="flex items-center justify-center w-full h-auto mt-4 mb-2">
          <Link
            href={"/portfolio"}
            className="w-auto h-auto px-8 py-2 font-semibold text-center bg-blue-700 rounded-md btn mobile:w-full mobile:py-3"
          >
            Visit More <code>&gt;</code>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
