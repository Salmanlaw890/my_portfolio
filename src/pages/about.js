import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/my_image_2.png"
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Layout from "@/components/Layout";
import AgainSkills from "@/components/AgainSkills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";



const AnimateNumbers = ({value})=>{
    const numberRef = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue , {duration : 3000})
    const isInView = useInView(numberRef , {once : true})

    useEffect(()=>{
        if(isInView){
            motionValue.set(value)
        }
    },[isInView , value , motionValue])

    useEffect(() => {
        //latest.toFixed(0) converts the latest number to a string with no digits after the decimal point (no digit after decimal i.e 123.123 toFixed(decimal) is used for value after decimal).
        // if it comes into view and value >= latest then take it to latest
     springValue.on("change", (latest)=>{
        if(numberRef.current && latest.toFixed(0) <= value){
            numberRef.current.textContent = latest.toFixed(0)
        }
     })
    }, [springValue , value])
    

    return <span ref={numberRef}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title> About Page</title>
        <meta name="description" content="this is my about page" />
      </Head>
      <Layout>
      <main className="flex sm:-ml-10 sm:w-[70vw] w-full items-center justify-center flex-col sm:-mt-16">
        <AnimatedText
          text={"Passion Fuels Purpose!"}
          className="text-6xl sm:text-3xl justify-center items-center text-center mb-16 sm:mb-10"
        />
        <div className="grid w-full grid-cols-8 gap-16 sm:flex sm:flex-col">
          <div className="col-span-3 flex items-start sm:text-justify indent-1 justify-start flex-col ">
            <h2 className="mb-4 text-amber-500 text-lg font-bold uppercase text-dark/75">
              Biography
            </h2>
            <p className="font-medium dark:text-light">
              Hi, I'm{" "}
              <span className=" bg-gradient-to-r from-[#2c17a5] to-[#05e152] font-bold text-xl text-transparent bg-clip-text">
                Salman Ahmad
              </span>
              , a <span className=" font-bold text-xl text-red-600">React</span>{" "}
              developer with a passion for creating beautiful, functional, and
              user-centered digital experiences. With 1 years of experience in
              the field. I am always looking for new and innovative ways to
              bring my clients' visions to life.
            </p>
            <p className="my-6 font-medium dark:text-light">
              I believe that design is about more than just making things look
              pretty - it's about solving problems and creating intuitive,
              enjoyable experiences for users.{" "}
            </p>
            <p className="font-medium dark:text-light">
              {" "}
              I bring my commitment to design excellence and user-centered
              thinking to every project I work on. I look forward to the
              opportunity to bring my skills and passion to increase your
              organization ongoing progress.
            </p>
          </div>
          <div className="shadow-custom col-span-3 h-max relative rounded-2xl bg-light">
          <div className="absolute top-0 -right-3 -z-10 W-[102%] h-[103%] rounded-[2rem] bg-dark"/>
            <Image src={profilePic} alt="my_img"  className="w-full h-auto rounded-2xl"
               priority
                  sizes="(max-width:768px)100vw,
                  (max-width:1200px)50vw,
                  33vw,"
            />
          </div>

          <div className="col-span-2 h-[80%] flex items-start justify-between flex-col sm:flex-row sm:gap-5">

          <div className="flex items-start justify-center flex-col">
            <span className="inline-block text-7xl sm:text-3xl font-bold dark:text-light">
                <AnimateNumbers value={20}/>+
            </span>
            <h2 className="text-xl sm:text-sm font-medium capitalize text-dark/75 dark:text-light">Completed Projects</h2>
          </div>

          <div className="flex items-start justify-center flex-col">
            <span className="inline-block text-7xl sm:text-3xl  font-bold dark:text-light">
                <AnimateNumbers value={2}/>+
            </span>
            <h2 className="text-xl sm:text-sm  font-medium capitalize text-dark/7 dark:text-light">Companies Worked In</h2>
          </div>

          <div className="flex items-start justify-center flex-col">
            <span className="inline-block text-7xl sm:text-3xl  font-bold dark:text-light">
                <AnimateNumbers value={12}/>+
            </span>
            <h2 className="text-xl sm:text-sm font-medium capitalize text-dark/75 dark:text-light">Months of Experience</h2>
          </div>
          </div>
        </div>
      </main>
      </Layout>
      <AgainSkills/>
      <div className="flex justify-around items-start w-full sm:flex-col">
      <Experience  />
      <Education />
      </div>
    </>
  );
};

export default about;
