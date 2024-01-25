import React from 'react'

const Navbar = () => {
  return (
    <div className="">
        <nav
            className="relative flex w-full flex-wrap items-center justify-between bg-[#2EA97D] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
            <div className="container ml-2">
                <a className="text-xl text-neutral-800 dark:text-neutral-200" href="/"
                >Navbar</a
                >
            </div>
            </div>
        </nav>
        </div>
  )
}

export default Navbar