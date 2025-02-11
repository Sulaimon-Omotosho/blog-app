import React from 'react'
import { Link } from 'react-router'

const MainCategories = () => {
  return (
    <div className='hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8'>
      {/* links  */}
      <div className='flex-1 flex items-center justify-between flex-wrap'>
        <Link
          to='/posts'
          className='bg-blue-800 text-white rounded-full px-4 py-2'
        >
          All Posts
        </Link>
        <Link
          to='/posts?cat=web-design'
          className='hover:bg-blue-50 rounded-full px-4 py-2'
        >
          Web Design
        </Link>
        <Link
          to='/posts?cat=web-dev'
          className='hover:bg-blue-50 rounded-full px-4 py-2'
        >
          Web Development
        </Link>
        <Link
          to='/posts?cat=cloud'
          className='hover:bg-blue-50 rounded-full px-4 py-2'
        >
          Cloud Engineering
        </Link>
        <Link
          to='/posts?cat=seo'
          className='hover:bg-blue-50 rounded-full px-4 py-2'
        >
          Search Engines
        </Link>
        <Link
          to='/posts?cat=data-man'
          className='hover:bg-blue-50 rounded-full px-4 py-2'
        >
          Data Management
        </Link>
      </div>
      <span className='text-xl font-medium'>|</span>
      {/* search */}
      <div className='bg-gray-100 p-2 rounded-full flex items-center gap-2'>
        <svg
          class='w-6 h-6 text-gray-800 dark:text-white'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            stroke='currentColor'
            stroke-linecap='round'
            stroke-width='2'
            d='m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z'
          />
        </svg>

        <input
          type='text'
          placeholder='search posts...'
          className='bg-transparent outline-none'
        />
      </div>
    </div>
  )
}

export default MainCategories
