import React from 'react'
import Search from '../components/Search'
import { Link } from 'react-router'

const SideMenu = () => {
  return (
    <div className='px-4 h-max sticky top-8'>
      <h1 className='mb-4 text-sm font-medium'>Search</h1>
      <Search />
      <h1 className='mb-4 mt-8 text-sm font-medium'>Filters</h1>
      <div className='flex flex-col text-sm gap-2'>
        <label htmlFor='' className='flex items-center gap-2 cursor-pointer'>
          <input
            type='radio'
            name='sort'
            value='latest'
            className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800'
          />
          Latest
        </label>
        <label htmlFor='' className='flex items-center gap-2 cursor-pointer'>
          <input
            type='radio'
            name='sort'
            value='oldest'
            className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800'
          />
          Oldest
        </label>
        <label htmlFor='' className='flex items-center gap-2 cursor-pointer'>
          <input
            type='radio'
            name='sort'
            value='trending'
            className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800'
          />
          Trending
        </label>
        <label htmlFor='' className='flex items-center gap-2 cursor-pointer'>
          <input
            type='radio'
            name='sort'
            value='popular'
            className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800'
          />
          Most Popular
        </label>
      </div>
      <h1 className='mt-8 mb-4 text-sm font-medium'>Categories</h1>
      <div className='flex flex-col gap-2 text-sm'>
        <Link className='underline' to='/posts'>
          All
        </Link>
        <Link className='underline' to='/posts?cat=web-design'>
          Web Design
        </Link>
        <Link className='underline' to='/posts?cat=web-dev'>
          Web Development
        </Link>
        <Link className='underline' to='/posts?cat=cloud'>
          Cloud Engineering
        </Link>
        <Link className='underline' to='/posts?cat=seo'>
          Search Engines
        </Link>
        <Link className='underline' to='/posts?cat=data'>
          Data Management
        </Link>
      </div>
    </div>
  )
}

export default SideMenu
