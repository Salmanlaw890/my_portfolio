import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const RightIn = {
  initial: {
    x: +50,
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

const Institute = ({ name, location, date, position }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-full ml-24 flex flex-col items-start justify-between"
    >
      <div>
        <LiIcon reference={ref} />
        <motion.div variants={RightIn} initial="initial" whileInView="animate">
          <h1 className="text-3xl sm:text-2xl font-bold dark:text-light">{name}</h1>
          <h2 className="text-gray-600 text-2xl dark:text-light">{location}</h2>
          <h3 className="text-gray-800 text-2xl dark:text-light">{date}</h3>
          <h3 className="text-gray-600 text-2xl dark:text-light">{position}</h3>
        </motion.div>
      </div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });
  return (
    <main className="my-64">
      <h2 className="font-bold text-6xl sm:text-4xl text-center mb-40 sm:mb-20 dark:text-light">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto sm:mx-0 relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="flex flex-col items-center justify-between w-full ml-4">
          <Institute
            name={"University of Haripur "}
            location={"Haripur | KPK | Pakistan"}
            date={"2019 - 2023"}
            position={"Bachelors in SOftware Engineering"}
          />
        </ul>
      </div>
    </main>
  );
};

export default Education;
