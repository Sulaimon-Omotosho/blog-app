import React from 'react'
import Image from './Image'

const Comment = () => {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
      <div className='flex items-center gap-4'>
        <Image
          src='/blog/userImg.jpeg'
          classname='w-10 h-10 rounded-full object-cover'
          width={40}
        />
        <span className='font-medium'>John Doe</span>
        <span className='text-sm text-gray-500'>2 days ago</span>
      </div>
    </div>
  )
}

export default Comment
