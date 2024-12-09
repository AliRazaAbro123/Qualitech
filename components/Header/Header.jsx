// Important: Enable client-side rendering in Next.js
"use client";

// Explanation: Import React library and custom CSS styles
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  const pathname = usePathname();
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li">
        <Link
          href={"/"}
          className={`${
            pathname === "/" ? "text-blue-700 " : ""
          } font-semibold no-underline text-base tracking-wider`}
        >
          Home
        </Link>
      </Typography>
      <Typography as="li">
        <Link
          href={"/services"}
          className={`${
            pathname === "/services" ? "text-blue-700" : ""
          } text-base tracking-wider font-semibold no-underline`}
        >
          Services
        </Link>
      </Typography>
      <Typography as="li">
        <Link
          href={"/portfolio"}
          className={`${
            pathname === "/portfolio" ? "text-blue-700" : ""
          } text-base tracking-wider font-semibold no-underline`}
        >
          Portfolio
        </Link>
      </Typography>
      <Typography as="li">
        <Link
          href={"/about"}
          className={`${
            pathname === "/about" ? "text-blue-700" : ""
          } text-base tracking-wider font-semibold no-underline`}
        >
          About
        </Link>
      </Typography>
      <Typography as="li">
        <Link
          href={"/contact"}
          className={`${
            pathname === "/contact" ? "text-blue-700" : ""
          } text-base tracking-wider font-semibold no-underline`}
        >
          Contact
        </Link>
      </Typography>
    </ul>
  );
}

function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <Navbar className="w-full sticky top-0 left-0 right-0 mx-auto wide:w-[90rem] rounded-none px-6 py-3 z-50 bg-[#030108] border-none">
      <div className="flex items-center justify-between text-gray-300">
        <Typography
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 text-4xl font-bold tracking-wider"
          style={{ fontFamily: "Dancing Script" }}
        >
          <Link href={"/"}>
            Ali <span className="text-blue-700 font-bold">Raza.</span>
          </Link>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

export default Header;
