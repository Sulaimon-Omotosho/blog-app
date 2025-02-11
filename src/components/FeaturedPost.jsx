import React from 'react'
import Image from './Image'
import { Link } from 'react-router'

const FeaturedPost = () => {
  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8'>
      {/* LEFT  */}
      <div className='w-full lg:w-1/2 gap-4'>
        {/* image */}
        <Image
          src='blog/featured1.jpeg'
          classname='rounded-3xl object-cover'
          width='895'
        />
        {/* details */}
        <div className='flex items-center gap-4'>
          <h1 className='font-semibold lg:text-lg'>01.</h1>
          <Link className='text-blue-800 lg:text-lg'>Web Design</Link>
          <span className='text-gray-500'>2 days ago</span>
        </div>
        {/* title */}
        <Link
          to='/test'
          className='text-xl lg:text-3xl font-semibold lg:font-bold'
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
      </div>
      {/* RIGHT  */}
      <div className='flex w-full lg:w-1/2 flex-col gap-4 '>
        <div className='flex justify-between gap-4 lg:h-1/3'>
          <div className='w-1/3 aspect-video'>
            <Image
              src='blog/featured2.jpeg'
              classname='rounded-3xl object-cover w-full h-full'
              width='298'
            />
          </div>
          <div className='w-2/3'>
            {/* details */}
            <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
              <h1 className='font-semibold'>02.</h1>
              <Link className='text-blue-800'>Web Design</Link>
              <span className='text-gray-500 text-sm'>3 days ago</span>
            </div>
            {/* title */}
            <Link
              to='/test'
              className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium lg:font-bold'
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        <div className='flex justify-between gap-4 lg:h-1/3'>
          <div className='w-1/3 aspect-video'>
            <Image
              src='blog/featured3.jpeg'
              classname='rounded-3xl object-cover w-full h-full'
              width='298'
            />
          </div>
          <div className='w-2/3'>
            {/* details */}
            <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
              <h1 className='font-semibold'>03.</h1>
              <Link className='text-blue-800'>Web Design</Link>
              <span className='text-gray-500 text-sm'>3 days ago</span>
            </div>
            {/* title */}
            <Link
              to='/test'
              className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium lg:font-bold'
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        <div className='flex justify-between gap-4 lg:h-1/3'>
          <div className='w-1/3 aspect-video'>
            <Image
              src='blog/featured4.jpeg'
              classname='rounded-3xl object-cover w-full h-full'
              width='298'
            />
          </div>
          <div className='w-2/3'>
            {/* details */}
            <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
              <h1 className='font-semibold'>04.</h1>
              <Link className='text-blue-800'>Web Design</Link>
              <span className='text-gray-500 text-sm'>3 days ago</span>
            </div>
            {/* title */}
            <Link
              to='/test'
              className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium lg:font-bold'
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPost
