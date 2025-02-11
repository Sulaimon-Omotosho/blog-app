import { useUser } from '@clerk/clerk-react'
import React from 'react'
import 'react-quill-new/dist/quill.snow.css'
import ReactQuill from 'react-quill-new'

const CreatePostPage = () => {
  const { isLoaded, isSignedIn } = useUser()

  if (!isLoaded) {
    return <div className=''>Loading...</div>
  }

  if (isLoaded && !isSignedIn) {
    return <div className=''>You should login</div>
  }

  return (
    <div className='flex flex-col gap-6 h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] '>
      <h1 className='text-xl font-light'>New Post</h1>
      <form action='' className='flex flex-col gap-6 flex-1 mb-6'>
        <button className='p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white w-max'>
          Add Cover Image
        </button>
        <input
          type='text'
          placeholder='My Story'
          className='text-4xl font-semibold bg-transparent outline-none'
        />
        <div className='flex items-center gap-4'>
          <label htmlFor='' className='text-sm'>
            Choose Category:
          </label>
          <select
            name='cat'
            id=''
            className='p-2 rounded-xl bg-white shadow-md outline-none'
          >
            <option value='general'>General</option>
            <option value='web-design'>Web Design</option>
            <option value='web-dev'>Web Development</option>
            <option value='cloud'>Cloud Engineering</option>
            <option value='seo'>Search Engines</option>
            <option value='data-management'>Data Management</option>
          </select>
        </div>
        <textarea
          name='desc'
          id=''
          placeholder='Description'
          className='p-2 rounded-xl bg-white shadow-md outline-none'
        />
        <ReactQuill
          theme='snow'
          className='flex-1 rounded-xl bg-white shadow-md'
        />
        <button className='bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36'>
          Send
        </button>
      </form>
    </div>
  )
}

export default CreatePostPage
