import React, { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='w-full h-16 md:h20 flex items-center justify-between'>
      {/* LOGO  */}
      <div className='flex items-center gap-4'>
        <img
          src='/logo.png'
          alt='logo'
          className='w-8 h-8 text-2xl font-bold'
        />
        <span className=''>Uncle Sula</span>
      </div>
      {/* MOBILE MENU  */}
      <div className='md:hidden '>
        <div
          className='cursor-pointer text-2xl transition-all ease-in-out'
          onClick={() => setOpen(!open)}
        >
          {open ? 'X' : '|||'}{' '}
        </div>
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 bg-slate-500 bg-opacity-20 transition-all ease-in-out ${
            open ? '-right-0' : '-right-[100%]'
          }`}
        >
          <a href='#'>Home</a>
          <a href='#'>Trending</a>
          <a href='#'>Most Popular</a>
          <a href='#'>About</a>
          <a href='#'>
            <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>
              Login
            </button>
          </a>
        </div>
      </div>
      {/* DESKTOP MENU  */}
      <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
        <a href='#'>Home</a>
        <a href='#'>Trending</a>
        <a href='#'>Most Popular</a>
        <a href='#'>About</a>
        <a href='#'>
          <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>
            Login
          </button>
        </a>
      </div>
    </div>
  )
}

export default Navbar
