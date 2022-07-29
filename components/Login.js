import React from 'react'
import Image from "next/image"
import { signIn } from "next-auth/react"

function Login() {
  return (
    <div className='grid place-items-center gap-14 mt-4'>
        <Image 
        src="/image/fb.png"
        width={100}
        height={100}
        object-fit="contain"
        />


        <h1 onClick={()=> signIn()} className='p-4 rounded-full text-white text-center bg-blue-500 cursor-pointer'>Login With Facebook</h1>
    </div>
  )
}

export default Login
