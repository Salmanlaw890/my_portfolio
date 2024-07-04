import React from 'react'
import { useTypewriter,cursor } from 'react-simple-typewriter'
import {  motion } from 'framer-motion'

const SKills = () => {


    const quote = {
        initial:{
            opacity:0,
            y:20
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                delay:0.5
            }
        }
    }


    
    const [text] = useTypewriter({
        words: ['HTML', 'CSS', 'JAVA SCRIPT', 'REACT' , "TAILWIND CSS" , "BOOTSTRAP" , "FRAMER MOTION"],
        loop: true,
    })
  return (
    <motion.div variants={quote} initial="initial" animate="animate" className='flex justify-start items-start w-full flex-col'>
        <h1 className='text-3xl sm:text-xl'>Hi There</h1>
        <h2 className='text-3xl sm:text-xl'>I am <span className='bg-gradient-to-r from-[#2c17a5] to-[#05e152] font-extrabold text-3xl sm:text-xl text-transparent bg-clip-text sm:block'>Salman Ahmad</span></h2>
        <h3 className='text-3xl sm:text-xl'>& my expertise are <span className='bg-gradient-to-r  font-extrabold text-2xl sm:text-lg text-red-700 sm:block sm:whitespace-nowrap h-3'>{text}</span></h3>
    </motion.div>
  )
}

export default SKills