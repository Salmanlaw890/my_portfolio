import React from 'react'

const Layout = ({children , className}) => {
  return (
    <>
        <div className={`${className} w-full sm:w-[100vw] h-full inline-block bg-light dark:bg-dark p-32 xl:p-24 lg:p-16 md:p-8 sm:p-0`}>
        {children}
        </div>
    </>
  )
}

export default Layout