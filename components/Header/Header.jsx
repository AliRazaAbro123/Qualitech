"use client";
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
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black">
      <Typography as="li">
        <Link
          href={"/"}
          className={`${
            pathname === "/" ? "text-blue-700 " : ""
          } font-semibold no-underline text-base tracking-wider hover:text-blue-700`}
        >
          Home
        </Link>
      </Typography>
      <Typography as="li">
        <Link
          href={"/services"}
          className={`${
            pathname === "/services" ? "text-blue-700" : ""
          } text-base tracking-wider font-semibold no-underline hover:text-blue-700`}
        >
          Our Services
        </Link>
      </Typography>
      <Typography as="li">
        <Link
          href={"/about"}
          className={`${
            pathname === "/about" ? "text-blue-700" : ""
          } text-base tracking-wider font-semibold no-underline hover:text-blue-700`}
        >
          About Us
        </Link>
      </Typography>
      <Typography as="li">
        <Link
          href={"/team"}
          className={`${
            pathname === "/team" ? "text-blue-700" : ""
          } text-base tracking-wider font-semibold no-underline hover:text-blue-700`}
        >
          Our Team
        </Link>
      </Typography>
      <Typography as="li">
        <Link
          href={"/contact"}
          className={`${
            pathname === "/contact" ? "text-blue-700" : ""
          } text-base tracking-wider font-semibold no-underline hover:text-blue-700`}
        >
          Contact Us
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
    <Navbar className="w-full sticky top-0 left-0 right-0 mx-auto wide:w-[92rem] rounded-none px-4 py-3 z-50 bg-white/30 backdrop-blur-md backdrop-saturate-150 border-none">
      <div className="flex items-center justify-between text-black">
        <Typography
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 text-3xl font-bold tracking-wider"
        >
          <Link href={"/"}>
            Qualitech
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
