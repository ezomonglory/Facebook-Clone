import React, { useState } from "react";
import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

function Post({ image, message, email, time, imageUrl, name }) {
	const [like, isLike] = useState(false);

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
						<p className='text-xs'>
							{" "}
							{time ? (
								<span>
									{" "}
									{new Date(time.toDate()).toDateString()} at{" "}
									<span> {new Date(time.toDate()).toLocaleTimeString()} </span>{" "}
								</span>
							) : (
								<p> loading...</p>
							)}{" "}
						</p>
					</div>
				</div>

				<p className='pt-4'>{message}</p>
			</div>

			{imageUrl && (
				<div className='relative h-56 md:96 bg-white'>
					<Image src={imageUrl} objectFit='cover' layout='fill' />
				</div>
			)}
			{/* footer of post */}

			<div className='flex justify-between items-center bg-white shadow-md text-gray-400 border-t rounded-b-2xl'>
				<div
					className='inputIcon rounded-none rounded-bl-2xl'
					onClick={() => isLike(!like)}
				>
					{like ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5 text-blue-700'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' />
						</svg>
					) : (
						<ThumbUpIcon className='h-4' />
					)}
					{like ? (
						<p className='text-xs sm:text-base text-blue-700'>Like</p>
					) : (
						<p className='text-xs sm:text-base'>Like</p>
					)}
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
