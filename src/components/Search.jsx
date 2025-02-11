import React from 'react'

const Search = () => {
  return (
    <div className='bg-gray-100 rounded-full flex items-center gap-2'>
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
        placeholder='search a post...'
        className='bg-transparent outline-none'
      />
    </div>
  )
}

export default Search
