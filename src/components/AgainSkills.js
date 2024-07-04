import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Skills = ({name , x , y })=>{
    return (
      <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 sm:py-2 sm:px-3 absolute dark:bg-light dark:text-dark whitespace-nowrap"
      whileHover={{scale:1.5}} 
      initial={{x:0,y:0}}
      whileInView={{x:x , y:y}}
      transition={{duration:1.5}} >
        {name}
      </motion.div>
    )
}

const AgainSkills = () => { 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if(typeof window !== "undefined"){
      setIsMobile(window.innerWidth < 768)
    }
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <main>
      <h2 className="font-bold text-8xl sm:text-6xl w-full text-center dark:text-light">Skills</h2>
      <div className="w-full h-screen sm:h-[70vh] relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark sm:bg-circularLightMobile dark:sm:bg-circularDarkMobile">
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light dark:text-dark text-light p-6 sm:p-3 "
        whileHover={{scale:1.5}}  >
          Web
        </motion.div>

      
    {!isMobile ?   <div className="-translate-x-16">
      <Skills name={'HTML'} x={'-5vw'} y={'-10vw'}/>
        <Skills name={'CSS'} x={'-22vw'} y={'2vw'}/>
        <Skills name={'JAVA SCRIPT'} x={'20vw'} y={'6vw'}/>
        <Skills name={'REACT'} x={'0vw'} y={'12vw'}/>
        <Skills name={'BOOTSTRAP'} x={'-20vw'} y={'-15vw'}/>
        <Skills name={'TAILWIND'} x={'15vw'} y={'-12vw'}/>
        <Skills name={'NEXT JS'} x={'32vw'} y={'-5vw'}/>
      </div> : 
      <div className="-translate-x-16">
      <Skills name={'HTML'} x={'-10vw'} y={'-50vw'}/>
        <Skills name={'CSS'} x={'-30vw'} y={'6vw'}/>
        <Skills name={'JAVA SCRIPT'} x={'10vw'} y={'40vw'}/>
        <Skills name={'REACT'} x={'0vw'} y={'22vw'}/>
        <Skills name={'BOOTSTRAP'} x={'-30vw'} y={'-25vw'}/>
        <Skills name={'TAILWIND'} x={'20vw'} y={'-35vw'}/>
        <Skills name={'NEXT JS'} x={'28vw'} y={'-5vw'}/>
      </div>}
      
      </div>
    </main>
  );
};

export default AgainSkills;
