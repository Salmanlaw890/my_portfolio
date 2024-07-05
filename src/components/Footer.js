import React from "react";
import { motion } from "framer-motion";
import { LinkedInIcon, GithubIcon } from "./svgs";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const bottomUp = {};

const Footer = () => {
  return (
    <main className="w-full h-[35vh]">
      <div className="w-full h-1 bg-dark">&nbsp;</div>
      <div className="flex justify-around items-center bg-gray-500 w-full h-full sm:flex-col">
        <div className=" flex flex-col items-center justify-center gap-5">
          <h1 className="text-3xl font-extrabold text-amber-400">
            Get in Touch
          </h1>
          <div>
            <ul className="flex gap-5">
              <li className="p-3 border-white rounded-full bg-amber-400">
                <motion.a
                  whileHover={{ y: -5 }}
                  target="_blank"
                  href={"https://linkedin.com/in/salmanahmad890"}
                >
                  <LinkedInIcon className={"w-[25px] h-[25px]"} />
                </motion.a>
              </li>

              <li className="p-3 border-white rounded-full bg-amber-400">
                <motion.a
                  whileHover={{ y: -5 }}
                  target="_blank"
                  href={"https://github.com/Salmanlaw890"}
                >
                  <GithubIcon className={"w-[25px] h-[25px]"} />
                </motion.a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-3xl sm:text-center font-extrabold text-amber-400 mb-5">Contact</h1>
          <div className="w-full">
            <ul className="flex sm:justify-center sm:items-center flex-col gap-3 sm:my-10">
              <li className="flex">
                <p className="w-[30px] h-[30px] text-amber-400 text-2xl sm:text-xl font-bold" >
                  <FaPhoneAlt />
                </p>
                <h1 className="text-dark text-xl sm:text-sm font-bold">+92 341 8792957</h1>
              </li>
              <li className="flex gap-3">
                <p className="w-[20px] h-[20px] text-amber-400 text-2xl sm:text-xl font-bold">
                  <BiLogoGmail />
                </p>
                <h1 className="text-blue-500 text-xl sm:text-lg font-bold">salmanlaw890@gmail.com</h1>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
