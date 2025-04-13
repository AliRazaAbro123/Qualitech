import Image from "next/image";
import React from "react";
import strugbits1 from "../../public/assets/strugbits1.jpg";
import calculator1 from "../../public/assets/calculator1.jpg";
import bgClick1 from "../../public/assets/bgClick1.jpg";
import I2p1 from "../../public/assets/I2p1.jpg";
import Arabical1 from "../../public/assets/Arabical1.jpg";
import jotnow1 from "../../public/assets/jotnow1.jpg";
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
              A modern software company website's "CLONE" built with React and
              Next.js, styled using Tailwind CSS for responsiveness and sleek
              design. It includes real-time contact functionality powered by
              Nodemailer and polished UI components from Material UI. A seamless
              blend of functionality and aesthetics!
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
              alt="Calculator"
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
          <div className="w-[28%] mobile:w-full h-auto flex justify-center items-start flex-col gap-2">
            <Image
              src={bgClick1}
              height={300}
              alt="BgClick"
              className="w-full rounded-xl mobile:w-full"
            />
            <h1 className="text-xl tracking-wider text-blue-700">
              Dynamic Color Learning Tool
            </h1>
            <p className="text-sm leading-tight text-gray-300">
              This interactive educational tool helps students learn color names
              by changing the background color. Users can select from predefined
              colors or input their own, with the background updating instantly
              to match their choice. A fun and engaging way to explore colors!
            </p>
            <h3 className="text-sm leading-tight text-gray-300">
              <span className="text-base text-blue-700">Tech Stack :</span>
              REACT - NEXT JS, STATE MANAGMENT PROCCES and TAILWIND CSS
            </h3>
            <Link
              href={"https://bgclick.vercel.app/"}
              target="_blank"
              className="text-base text-blue-700 underline hover:text-white"
            >
              Visit Live! &gt;
            </Link>
          </div>
        </div>
        <div className="flex flex-row py-4 items-center justify-center w-full h-auto gap-12 mobile:flex-col mobile:gap-12">
          <div className="w-[28%] mobile:w-full h-auto flex justify-center items-start flex-col gap-2">
            <Image
              src={jotnow1}
              height={300}
              alt="JotNow"
              className="w-full rounded-xl mobile:w-full"
            />
            <h1 className="text-xl tracking-wider text-blue-700">
              JotNow – Note Taking App
            </h1>
            <p className="text-sm leading-tight text-gray-300">
              JotNow is a clean and elegant note-taking app designed for
              simplicity and speed. With a beautiful UI, smooth UX, and
              responsive design, it helps users capture thoughts instantly, stay
              organized, manage ideas efficiently, and boost daily productivity
              — anytime, anywhere, on any device.
            </p>
            <h3 className="text-sm leading-tight text-gray-300">
              <span className="text-base text-blue-700">Tech Stack : </span>
              EXPRESS JS, EJS, MONGOOSE, MONGODB, CSS, BCRYPT and JWT
            </h3>
            <Link
              href={"https://jotnow.vercel.app/"}
              target="_blank"
              className="text-base text-blue-700 underline hover:text-white"
            >
              Visit Live! &gt;
            </Link>
          </div>
          <div className="w-[28%] mobile:w-full h-auto flex justify-center items-start flex-col gap-2">
            <Image
              src={Arabical1}
              height={300}
              alt="Arabical"
              className="w-full rounded-xl mobile:w-full"
            />
            <h1 className="text-xl tracking-wider text-blue-700">
              Arabical Calculator App
            </h1>
            <p className="text-sm leading-tight text-gray-300">
              This modern calculator app is built with React and Next.js,
              designed for Arabic users with right-to-left (RTL) support. It
              features a clean, responsive layout styled with Tailwind CSS,
              ensuring seamless use across devices. Focused on simplicity and
              precision, it provides an intuitive experience in a beautifully
              crafted interface.
            </p>
            <h3 className="text-sm leading-tight text-gray-300">
              <span className="text-base text-blue-700">Tech Stack :</span>
              REACT - NEXT JS, TAILWIND CSS and MATERIAL UI
            </h3>
            <Link
              href={"https://arabical.vercel.app/"}
              target="_blank"
              className="text-base text-blue-700 underline hover:text-white"
            >
              Visit Live! &gt;
            </Link>
          </div>
          <div className="w-[28%] mobile:w-full h-auto flex justify-center items-start flex-col gap-2">
            <Image
              src={I2p1}
              height={300}
              alt="I2p"
              className="w-full rounded-xl mobile:w-full"
            />
            <h1 className="text-xl tracking-wider text-blue-700">
              I2p (Idea To Poduct)
            </h1>
            <p className="text-sm leading-tight text-gray-300">
              This is a fully responsive clone of a professional software house
              website, built with React and Next.js. Featuring a sleek design
              with sections for services, portfolio, and contact, it offers a
              seamless user experience across devices. Styled with Tailwind CSS,
              this project showcases a modern, user-friendly interface.
            </p>
            <h3 className="text-sm leading-tight text-gray-300">
              <span className="text-base text-blue-700">Tech Stack :</span>
              EXPRESS JS, EJS, CSS and GSAP FOR ANIMATIONS
            </h3>
            <Link
              href={"https://i2product.vercel.app/"}
              target="_blank"
              className="text-base text-blue-700 underline hover:text-white"
            >
              Visit Live! &gt;
            </Link>
          </div>
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
