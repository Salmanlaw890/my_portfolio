
import React from 'react'
import {  delay, motion } from 'framer-motion'

const quote = {
    initial:{
        opacity:0
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
            staggerChildren:0.2
        }
    }
}
const singleWord = {
    initial:{
        opacity:0,
        y:20
    },
    animate:{
        y:0,
        opacity:1
        
    }
}

const AnimatedText = ({text ,className= ""}) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center'>
        <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
         className={`inline-block w-full text-dark font-bold capitalize ${className} dark:text-light`}>
            {
                text.split(" ").map((word , index)=>{
                    return (<motion.span variants={singleWord} key={word+"-"+index} className='inline-block'>
                        {word}&nbsp;
                    </motion.span>)
                })
            }
        </motion.h1>
    </div>
  )
}

export default AnimatedText