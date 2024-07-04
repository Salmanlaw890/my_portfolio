import React from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  //   start point (when the center of the target reaches the end of the viewport),the end point (when the center of the target reaches the center of the viewport).
  return (
    // stroke define the border of circle i.e stroke-width of border-width and so on
    <figure className="absolute left-0 stroke-dark dark:stroke-green-500"> 
      <svg className="-rotate-90" width={75} height={75} viewBox="0 0 100 100">
        <circle
          cx={75}//goes 75 to x-axis from center 
          cy={50}//goes 75 to y-axis from center 
          r={20}//make circle size 40 
          className="stroke-primary stroke-1 fill-none"
        />
        <motion.circle
          style={{ pathLength: scrollYProgress }}
          cx={75}
          cy={50}
          r={20}
          className=" stroke-[5px] fill-white"
        />
        <circle cx={75} cy={50} r={10} className="animate-pulse stroke-1 fill-primary" />
      </svg>
    </figure>
  );
};

export default LiIcon;
