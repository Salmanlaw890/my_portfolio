import React from 'react'
import { CircularText } from './svgs'
import Link from 'next/link'

const HireMe = () => {
  return (
    <>
      <div className='fixed right-4 bottom-4 flex justify-center items-center overflow-hidden sm:hidden'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
          <CircularText className={"fill-dark animate-spin-slow z-[999] dark:text-light"}/>
          {/* <Link href={"mailto:salmanlaw890@gmail.com"} target='_blank' className='flex items-center justify-center absolute right-[45px] bottom-[60px]  bg-dark text-white shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark'>Hire Me</Link> */}
        </div>
      </div>
    </>
  )
}

export default HireMe