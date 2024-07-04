import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { GithubIcon } from "@/components/svgs";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const FeaturedProject = ({ title, description }) => {
  return (
    <article className="shadow-custom py-2 px-12 sm:px-3 flex-col rounded-xl flex sm:flex-col items-center justify-center transition-transform hover:-translate-y-5 duration-300">
      <h2 className="text-3xl sm:text-xl font-bold dark:text-light">{title}</h2>
      <p className="text-xl text-gray-600 dark:text-light">{description}</p>
      <Link
        href={"https://github.com/Salmanlaw890/"}
        target="_blank"
        className="py-2 px-12 border border-black bg-gray-700 rounded-xl flex items-center justify-center w-[50%] dark:text-light dark:bg-black dark:border-light"
      >
        <GithubIcon className={"!w-[25px] !h-[25px] text-white"} />
      </Link>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects page</title>
        <meta name="description" content="this is my projects page" />
      </Head>
      <main className="sm:w-[70vw] w-full sm mb-16 flex flex-col justify-center items-center sm:-mt-16">
        <Layout className={"pt-16"}>
          <AnimatedText
            text={"Imagination Trumps Knowledge!"}
            className="text-5xl sm:text-3xl flex text-center sm:flex-wrap sm:ml-20"
          />
          <div className="grid grid-cols-12 gap-16 sm:flex sm:flex-col">
            <div className="col-span-12 flex mt-10 text-2xl font-bold items-start justify-start dark:text-light sm:whitespace-nowrap">
              Featured Project
            </div>
            <div className="col-span-6 sm:w-[80vw]">
              <FeaturedProject
                title={"Netflix Clone"}
                description={
                  "A netflix clone website using React js and firebase and movies api"
                }
              />
            </div>
            <div className="col-span-6 sm:w-[80vw] ">
              <FeaturedProject
                title={"Youtube Clone"}
                description={
                  "A youtube clone using React, node, express, mongodb and youtube api"
                }
              />
            </div>
            <div className="col-span-6 sm:col-span-5 sm:w-[80vw]">
              <FeaturedProject
                title={"Tic Tic Game"}
                description={"A Tik Tic game created only using React js."}
              />
            </div>
            <div className="col-span-6 sm:col-span-5 sm:w-[80vw]">
              <FeaturedProject
                title={"Project Metaverse"}
                description={
                  "A metaverse created using React js, framer motion & tailwind"
                }
              />
            </div>
            <div className="col-span-6 sm:col-span-5 sm:w-[80vw]">
              <FeaturedProject
                title={"Ecommerce Shop"}
                description={
                  "A Ecommerce Tech products shop website created using React js"
                }
              />
            </div>
            <div className="col-span-6 sm:col-span-5 sm:w-[80vw]">
              <FeaturedProject
                title={"Weather App"}
                description={"A Weather app website created using React js"}
              />
            </div>
            <div className="col-span-6 sm:col-span-5 sm:w-[80vw]">
              <FeaturedProject
                title={"Landing Page"}
                description={
                  "A Software House Landing page created using React js"
                }
              />
            </div>
            <div className="col-span-6 sm:col-span-5 sm:w-[80vw]">
              <FeaturedProject
                title={"Chating Website"}
                description={"A Chating website created using MERN Stack"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
