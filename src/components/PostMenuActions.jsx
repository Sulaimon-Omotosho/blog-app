import React from 'react'
import Image from './Image'

const PostMenuActions = () => {
  return (
    <div>
      <h1 className='mt-8 mb-4 text-sm font-medium'>Actions</h1>
      <div className='flex items-center gap-2 py-2 text-sm cursor-pointer'>
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
            stroke-linejoin='round'
            stroke-width='2'
            d='m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z'
          />
        </svg>
        <span>Save this Post</span>
      </div>
      <div className='flex items-center gap-2 py-2 text-sm cursor-pointer'>
        <Image src='blog/delete.svg' />
        <span>Delete this Post</span>
      </div>
    </div>
  )
}

export default PostMenuActions
