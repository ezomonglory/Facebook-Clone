import React from 'react'
import Image from "next/image"

function StoryCard({ name, src, profile }) {
  return (
    <div className='relative h-14 w-14 md:w-20 md:h-20 lg:w-32 lg:h-56  cursor-pointer overflox-x p-3 group lg:rounded-3xl rounded-full hover:scale-110'>
        <Image
        className='opacity-0 lg:opacity-100 absolute rounded-full z-30 top-10 '
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit='cover'
        />

        <Image 
        className='object-cover filter brightness-100 lg:brightness-50  lg:rounded-3xl rounded-full group-hover:brightness-75 '
        src={src}
        width={100}
        height={100}
        layout='fill'
        />    

        <p className='absolute bottom-2 text-white font-md truncate overflow-hidden opacity-0 lg:opacity-100'>{name}</p>
    </div>
    
  )
}

export default StoryCard
