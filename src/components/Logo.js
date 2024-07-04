import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);



const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
      href={"/"}
        whileHover={{ scale: 1.3, }}
        className="p-[6px] bg-gradient-to-r from-[#2c17a5] to-[#05e152] flex items-center justify-center font-extrabold text-2xl text-transparent bg-clip-text lg:text-xl whitespace-nowrap"
      >
        Salman Ahmad
      </MotionLink>
    </div>
  );
};

export default Logo;
