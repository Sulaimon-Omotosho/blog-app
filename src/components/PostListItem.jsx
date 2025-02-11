import React from 'react'
import Image from './Image'
import { Link } from 'react-router'

const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
      {/* image */}
      <div className='md:hidden lg:block xl:w-1/3'>
        <Image
          src='/blog/postImg.jpeg'
          classname='rounded-2xl object-cover'
          width={735}
        />
      </div>
      {/* details  */}
      <div className='flex flex-col gap-4 xl:w-2/3'>
        <Link to='test' className='text-4xl font-bold'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          rerum.
        </Link>
        <div className='flex items-center gap-2 text-gray-400 text-sm'>
          <span>Written by</span>
          <Link className='text-blue-800'>Uncle Sula</Link>
          <span>on</span>
          <Link className='text-blue-800'>Web Development</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam hic
          optio nostrum at quaerat consectetur non dignissimos omnis tenetur,
          fugit sapiente molestias sunt?
        </p>
        <Link to='test' className='underline text-blue-800 text-sm'>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default PostListItem
