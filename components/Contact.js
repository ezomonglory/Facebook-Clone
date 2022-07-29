import React from "react";
import Image from "next/image";

function Contact({ src, name }) {
	return (
		<div className='flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer rounded-xl '>
			<Image
				className='rounded-full'
				objectFit='cover'
				width={50}
				height={50}
				src={src}
				layout='fixed'
			/>
			<p>{name}</p>
			<div className='absolute h-3 w-3 rounded-full bottom-2 left-7 bg-green-400'></div>
		</div>
	);
}

export default Contact;
