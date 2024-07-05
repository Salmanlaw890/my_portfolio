import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/router";
import { LinkedInIcon, GithubIcon, SunIcon, MoonIcon } from "./svgs";
import useThemeSwitch from "./Hooks/useThemeSwitch";

const CostumLinks = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`${
          router.asPath === href ? "w-full lg:w-[80%]" : "w-0"
        } h-[2px] bg-black inline-block absolute top-5 left-[-1px] group-hover:w-full transition-[width] ease-in-out duration-300 dark:bg-light sm:ml-2`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CostumMobileLinks = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`${
          router.asPath === href ? "w-full lg:w-[80%]" : "w-0"
        } h-[2px] bg-black inline-block absolute top-5 left-[-1px] group-hover:w-full transition-[width] ease-in-out duration-300 dark:bg-light sm:ml-2`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useThemeSwitch();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start({
          rotate: 270,
          scale: 1,
          y: "5",
          transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
          },
        });
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await controls.start({ rotate: 360, scale: 1, y: "5" });
      }
    };
    sequence();
  }, [controls]);
  return (
    <>
      <header className="w-full px-32 py-4 font-medium flex gap-20 justify-end items-center dark:text-light relative">
        <button
          className="flex-col justify-center items-center hidden lg:flex"
          onClick={handleOpen}
        >
          <span
            className={`bg-dark dark:bg-light block transition-all duration-200 ease-out h-0.5 w-6 rounded-sm  ${
              isOpen ? "rotate-45 translate-y-2" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-200 ease-out h-0.5 w-6 rounded-sm" ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-200 ease-out h-0.5 w-6 rounded-sm  ${
              isOpen ? "-rotate-45 translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>

        {/* laptop screen */}
        <div className="flex justify-between items-center w-full">
          <nav className="lg:hidden">
            <CostumLinks href={"/"} title="Home" className="mr-4" />
            <CostumLinks href={"/about"} title="About" className="mx-4" />
            <CostumLinks href={"/projects"} title="Projects" className="mx-4" />
          </nav>
          <div>
            <Logo />
          </div>
          <nav className="flex gap-4 lg:hidden">
            <motion.a
              whileHover={{ y: -5 }}
              initial={{ scale: 0, rotate: 360 }}
              animate={controls}
              target="_blank"
              href={"https://linkedin.com/in/salmanahmad890"}
              className="w-8 h-8"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              initial={{ scale: 0 }}
              animate={controls}
              target="_blank"
              href={"https://github.com/Salmanlaw890"}
              className="w-8 h-8"
            >
              <GithubIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className="p-1"
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </div>

        {/* mobile screen */}
        {isOpen ? (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col z-30 min-w-[70vw] justify-between items-center fixed top-1/3 left-1/2 -translate-x-[50%] -translate-y-1/2  bg-dark/40  dark:bg-light/75 dark:text-light rounded-lg backdrop-blur-md p-20"
          >
            <nav className=" flex flex-col">
              <CostumMobileLinks
                href={"/"}
                title="Home"
                className="mb-2"
                toggle={handleOpen}
              />
              <CostumMobileLinks
                href={"/about"}
                title="About"
                className="my-4"
                toggle={handleOpen}
              />
              <CostumMobileLinks
                href={"/projects"}
                title="Projects"
                className="mb-6"
                toggle={handleOpen}
              />
            </nav>
            <nav className="flex gap-4">
              <motion.a
                whileHover={{ y: -5 }}
                target="_blank"
                href={"https://linkedin.com/in/salmanahmad890"}
                className="w-8 h-8"
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a
                whileHover={{ y: -5 }}
                target="_blank"
                href={"https://github.com/Salmanlaw890"}
                className="w-8 h-8"
              >
                <GithubIcon />
              </motion.a>

              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className="p-1"
              >
                {mode === "dark" ? (
                  <SunIcon className={"fill-dark"} />
                ) : (
                  <MoonIcon className={"fill-dark"} />
                )}
              </button>
            </nav>
          </motion.div>
        ) : null}
      </header>
    </>
  );
};

export default Navbar;
