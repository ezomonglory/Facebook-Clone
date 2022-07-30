import React from 'react'
import InputBox from './InputBox'

import Posts from './Posts'
import Stories from './Stories'

function Feed( ) {
  return (
    <div className='flex-grow flex h-screen pb-44  pt-6 sm:mr-4 xl:mr-40 overflow-y-auto scrollbar-hide overflow-x-none'>
        <div className='mx-auto max-w-full md:max-w-lg lg:max-w-2xl min-w-full>
            {/* stories */}
            <Stories />
            {/* input box */}
            <InputBox />
            {/* Posts */}
            <Posts />
        </div>
    </div>
  )
}

export default Feed
