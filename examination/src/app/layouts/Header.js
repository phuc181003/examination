'use client'
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Toggle Dark/Light Mode Change
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add('dark-mode')
    } else {
      document.documentElement.classList.remove('dark-mode')
    }
  }
  return (
    <header >
      <nav className="z-0 relative" x-data="{open:false,menu:false, lokasi:false}">
        <div className="relative z-10 bg-[#f6f6ff] shadow">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center px-2 lg:px-0">

                <div className="hidden lg:block lg:ml-2">
                  <div className="flex">
                    <Link href="/">
                      <p className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "> Home </p>
                    </Link>

                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">Search </label>
                  <form method="get" action="#" className="relative z-50">
                    <button type="submit" id="searchsubmit" className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    <input type="text" name="s" id="s" className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out" placeholder="Search" />
                  </form>
                </div>

                <label className=" mx-3 relative inline-flex items-center cursor-pointer">
                  <input onClick={toggleDarkMode} type="checkbox" value="" className="sr-only peer" />
                  <div className="group peer ring-0 bg-gradient-to-bl from-neutral-800 via-neutral-700
   to-blue-300  rounded-full outline-none duration-1000 after:duration-300 w-12 h-6 
    shadow-md  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute
     after:[background:#0D2B39] peer-checked:after:rotate-180 after:[background:conic-gradient(from_135deg,_#b2a9a9,_#b2a8a8,_#ffffff,_#d7dbd9_,_#ffffff,_#b2a8a8)] 
    after:outline-none after:h-7 after:w-7 after:top-1 after:left-[-1px]  peer-checked:after:translate-x-6 peer-hover:after:scale-95 peer-checked:bg-gradient-to-r
     peer-checked:from-yellow-400 peer-checked:to-emerald-300">

                  </div>
                </label>

                <Link href="/login">
                  <p className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "> login </p>
                </Link>


              </div>

            </div>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;