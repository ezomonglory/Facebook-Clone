import React from "react";
import Image from "next/image";
 
function SideBarRow({ src, Icon, title }) {
	return (
		<div className="flex items-center space-x-2 space-y-6 sm:space-y-4 cursor-pointer hover:bg-gray-200 py-1 sm:px-4 px-1 rounded-xl">
			{src && (
				<Image
					className='rounded-full'
					width={30}
					src={src}
					height={30}
					Layout='fixed'
				/>
			)}

			{Icon && <Icon className='h-8 w-8 text-blue-500' />}
			<p className='hidden sm:inline-flex font-medium'>{title}</p>
		</div>
	);
}

export default SideBarRow;
