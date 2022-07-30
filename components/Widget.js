import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
	{ src: "/image/glo.jpg", name: "E.G" },
	{ src: "https://links.papareact.com/f0p", name: "Jeff Bezos" },
	{ src: "https://links.papareact.com/4zn", name: "Elon Musk" },
	{ src: "https://links.papareact.com/zvy", name: "Bill Gates" },
	{ src: "https://links.papareact.com/snf", name: "Mark Zuckerberg" },
	{ src: "https://links.papareact.com/d0c", name: "Harry Porter" },
	{ src: "https://links.papareact.com/r57", name: "James Bond" },
];

function Widget() {
	return (
		<div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
			<div className='flex justify-between items-center text-gray-500 mb-5 '>
				<h2 className='text-xl'>Contacts</h2>
				<div className='flex space-x-2'>
					<VideoCameraIcon className='h-6' />
					<DotsHorizontalIcon className='h-6' />
					<SearchIcon className='h-6' />
				</div>
			</div>

      {contacts.map((ele)=> (
        <Contact key={ele.index} src={ele.src} name={ele.name} />
      ))}
		</div>
	);
}

export default Widget;
