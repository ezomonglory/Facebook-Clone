import React from 'react'
import InputBox from './InputBox'
import Post from './Post'
import Stories from './Stories'

function Feed() {
  return (
    <div className='flex-grow flex h-screen pb-44  pt-6 mr-4 xl:mr-40 overflow-y-auto overflow-x-none' >
        <div className='mx-auto max-w-full md:max-w-lg lg:max-w-2xl min-w-full'>
            {/* stories */}
            <Stories />
            {/* input box */}
            {/* <InputBox /> */}
            {/* Posts */}
            {/* <Post /> */}
        </div>
    </div>
  )
}

export default Feed