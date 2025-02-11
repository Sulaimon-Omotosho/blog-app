import React, { useState } from 'react'
import Image from './Image'
import { Link } from 'react-router'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='w-full h-16 md:h20 flex items-center justify-between'>
      {/* LOGO  */}
      <Link to='/' className='flex items-center gap-4 text-2xl font-bold'>
        <Image
          src='/blog/UncleSula-logo.png'
          alt='logo'
          width={32}
          height={32}
          classname='h-8 w-8'
        />
        <span className=''>Uncle Sula</span>
      </Link>
      {/* MOBILE MENU  */}
      <div className='md:hidden '>
        <div
          className='cursor-pointer text-2xl transition-all ease-in-out'
          onClick={() => setOpen(!open)}
        >
          {open ? 'X' : '|||'}{' '}
        </div>
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 bg-[#e6e6ff] transition-all ease-in-out ${
            open ? '-right-0' : '-right-[100%]'
          }`}
        >
          <Link to='/'>Home</Link>
          <Link to='#'>Trending</Link>
          <Link to='#'>Most Popular</Link>
          <Link to='#'>About</Link>
          <SignedOut>
            <Link to='login'>
              <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>
                Login
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      {/* DESKTOP MENU  */}
      <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
        <Link to='/'>Home</Link>
        <Link to='#'>Trending</Link>
        <Link to='#'>Most Popular</Link>
        <Link to='#'>About</Link>
        <SignedOut>
          <Link to='login'>
            <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>
              Login
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}

export default Navbar
