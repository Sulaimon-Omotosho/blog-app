import React from 'react'
import { Link } from 'react-router'
import Image from '../components/Image'
import PostMenuActions from '../components/PostMenuActions'
import Search from '../components/Search'
import Comments from '../components/Comments'

const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      {/* detail  */}
      <div className='flex gap-8'>
        <div className='lg:w-3/5 flex flex-col gap-8'>
          <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <span>Written by</span>
            <Link className='text-blue-800'>John Doe</Link>
            <span>on</span>
            <Link className='text-blue-800'>Web Development</Link>
            <span>2 days ago</span>
          </div>
          <p className='text-gray-500 font-medium'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            tempore laborum ipsum nostrum incidunt mollitia, hic quod aperiam
            ipsa rem?
          </p>
        </div>
        <div className='hidden lg:block w-2/5'>
          <Image src='blog/postImg.jpeg' width='600' classname='rounded-2xl' />
        </div>
      </div>
      {/* content  */}
      <div className='flex flex-col md:flex-row gap-12'>
        {/* text  */}
        <div className='lg:text-lg flex flex-col gap-6 text-justify'>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            dolores, libero illo labore, consequatur quidem odio possimus
            repellendus aliquid recusandae sint ipsa blanditiis expedita minima
            soluta corporis commodi illum praesentium nobis velit, est itaque
            eaque. Ad error, repellat minus maiores ratione eum enim, aliquid
            hic magnam recusandae iusto nihil soluta inventore quae, tempora
            iure dolorum optio. Omnis dolores quasi, aut facilis exercitationem
            a. Nam, porro quia? Sunt laudantium modi quas illo voluptas
            repellat, dolorum asperiores non, magni qui atque perferendis ut
            dolorem itaque, facere dolor. Iste voluptates officiis dignissimos?
            Fugit, at similique aliquid doloremque odit magnam tempora suscipit.
            Nesciunt, necessitatibus?
          </p>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            dolores, libero illo labore, consequatur quidem odio possimus
            repellendus aliquid recusandae sint ipsa blanditiis expedita minima
            soluta corporis commodi illum praesentium nobis velit, est itaque
            eaque. Ad error, repellat minus maiores ratione eum enim, aliquid
            hic magnam recusandae iusto nihil soluta inventore quae, tempora
            iure dolorum optio. Omnis dolores quasi, aut facilis exercitationem
            a. Nam, porro quia? Sunt laudantium modi quas illo voluptas
            repellat, dolorum asperiores non, magni qui atque perferendis ut
            dolorem itaque, facere dolor. Iste voluptates officiis dignissimos?
            Fugit, at similique aliquid doloremque odit magnam tempora suscipit.
            Nesciunt, necessitatibus?
          </p>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            dolores, libero illo labore, consequatur quidem odio possimus
            repellendus aliquid recusandae sint ipsa blanditiis expedita minima
            soluta corporis commodi illum praesentium nobis velit, est itaque
            eaque. Ad error, repellat minus maiores ratione eum enim, aliquid
            hic magnam recusandae iusto nihil soluta inventore quae, tempora
            iure dolorum optio. Omnis dolores quasi, aut facilis exercitationem
            a. Nam, porro quia? Sunt laudantium modi quas illo voluptas
            repellat, dolorum asperiores non, magni qui atque perferendis ut
            dolorem itaque, facere dolor. Iste voluptates officiis dignissimos?
            Fugit, at similique aliquid doloremque odit magnam tempora suscipit.
            Nesciunt, necessitatibus?
          </p>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            dolores, libero illo labore, consequatur quidem odio possimus
            repellendus aliquid recusandae sint ipsa blanditiis expedita minima
            soluta corporis commodi illum praesentium nobis velit, est itaque
            eaque. Ad error, repellat minus maiores ratione eum enim, aliquid
            hic magnam recusandae iusto nihil soluta inventore quae, tempora
            iure dolorum optio. Omnis dolores quasi, aut facilis exercitationem
            a. Nam, porro quia? Sunt laudantium modi quas illo voluptas
            repellat, dolorum asperiores non, magni qui atque perferendis ut
            dolorem itaque, facere dolor. Iste voluptates officiis dignissimos?
            Fugit, at similique aliquid doloremque odit magnam tempora suscipit.
            Nesciunt, necessitatibus?
          </p>
        </div>
        {/* menu  */}
        <div className='px-4 h-max sticky top-8'>
          <h1 className='mb-4 text-sm font-medium'>Author</h1>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-8'>
              <Image
                src='blog/userImg.jpeg'
                classname='w-12 h-12 rounded-full object-cover '
                width={48}
                height={48}
              />
              <Link className='text-blue-800'>John Doe</Link>
            </div>
            <p className='text-sm text-gray-500'>
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className='flex gap-2'>
              {/* <link> */}
              <Image src='blog/facebook.svg' />
              {/* </link> */}
              {/* <link> */}
              <Image src='blog/instagram.svg' />
              {/* </link> */}
            </div>
          </div>
          <PostMenuActions />
          <h1 className='mt-8 mb-4 text-sm font-medium'>Categories</h1>
          <div className='flex flex-col gap-2 text-sm '>
            <Link className='underline' to='/'>
              All
            </Link>
            <Link className='underline' to='/'>
              Web Design
            </Link>
            <Link className='underline' to='/'>
              Web Development
            </Link>
            <Link className='underline' to='/'>
              Cloud Engineering
            </Link>
            <Link className='underline' to='/'>
              Search Engines
            </Link>
            <Link className='underline' to='/'>
              Data Management
            </Link>
          </div>
          <h1 className='mt-8 mb-4 text-sm font-medium'>Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  )
}

export default SinglePostPage
