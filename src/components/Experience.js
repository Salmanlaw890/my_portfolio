import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const leftIn = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 5,
    },
  },
};

const Company = ({ name, location, date, position }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-full flex flex-col ml-24 items-start justify-between"
    >
      <div>
        <LiIcon reference={ref} />
        <motion.div variants={leftIn} initial="initial" whileInView="animate">
          <h1 className="text-3xl sm:text-2xl font-bold dark:text-light">{name}</h1>
          <h2 className="text-gray-600 text-2xl dark:text-light">{location}</h2>
          <h3 className="text-gray-800 text-2xl dark:text-light">{date}</h3>
          <h3 className="text-gray-600 text-2xl dark:text-light">{position}</h3>
        </motion.div>
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });
  return (
    <main className="my-64 sm:mb-0">
      <h2 className="font-bold text-6xl sm:text-4xl text-center mb-40 sm:mb-20 dark:text-light">Experience</h2>

      <div ref={ref} className="w-[75%] mx-auto sm:mx-0 relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="flex flex-col items-center justify-between w-full ml-4">
          <Company
            name={"CodeCue Solutions "}
            location={"Haripur |  The University of Haripur"}
            date={"2nd June 2022 - 20 December 2022"}
            position={"React js"}
          />

          <Company
            name={"Rutech Solution"}
            location={"Phase, 7, Bahria Town, Rawalpind"}
            date={"1st may 2024 - 30 july 2024"}
            position={"React js"}
          />
        </ul>
      </div>
    </main>
  );
};

export default Experience;
