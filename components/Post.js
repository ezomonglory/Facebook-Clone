import React from "react";
import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";


function Post({ image, message, email, time, imageUrl, name }) {
	return (
		<div className='flex flex-col'>
			<div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
				<div className='flex items-center space-x-2'>
					<img
						className='rounded-full'
						src={image}
						width={40}
						height={40}
						alt=''
					/>
					<div>
						<p className='font-medium'>{name}</p>
						<p className="text-xs"> {time ? <span>  {new Date(time.toDate()).toDateString()}  at <span> {new Date(time.toDate()).toLocaleTimeString()} </span> </span> : <p> yo</p> } </p>
					</div>
				</div>

				<p className='pt-4'>{message}</p>
			</div>

			{imageUrl && <div className='relative h-56 md:96 bg-white'>
				<Image src={imageUrl} objectFit='cover' layout='fill' />
			</div>
}
			{/* footer of post */}

			<div className='flex justify-between items-center bg-white shadow-md text-gray-400 border-t rounded-b-2xl'>
				<div className='inputIcon rounded-none rounded-bl-2xl'>
					<ThumbUpIcon className='h-4' />
					<p className='text-xs sm:text-base'>Like</p>
				</div>
				<div className='inputIcon rounded-none '>
					<ChatAltIcon className='h-4' />
					<p className='text-xs sm:text-base'>Comment</p>
				</div>
				<div className='inputIcon rounded-none rounded-br-2xl'>
					<ShareIcon className='h-4' />
					<p className='text-xs sm:text-base'>Share</p>
				</div>
			</div>
		</div>
	);
}

export default Post;
