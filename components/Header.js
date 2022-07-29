import React from "react";
import Image from "next/image";
import {
	BellIcon,
	ChatIcon,
	ChevronDownIcon,
	HomeIcon,
	UserGroupIcon,
	ViewGridIcon,
} from "@heroicons/react/solid";

import {
	FlagIcon,
	PlayIcon,
	SearchIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderICon from "./HeaderICon";
import { useSession, signOut } from "next-auth/react"

function Header() {
    const { data: session } = useSession()
	return (
		<div className="flex items-center p-2 lg:px-5 shadow-md justify-between">
			{/* left  */}
			<div>
				<div className='flex items-center'>
					<Image src='/image/fb.png' width={40} height={40}  layout='fixed'/>
					<div className='sm:flex gap-2 ml-2 items-center rounded-full bg-gray-100 p-2 hidden '>
						<SearchIcon className='h-6  text-gray-600' />
						<input placeholder='search facebook' type='text' className="bg-transparent outline-none placeholder-gray-500 flex-shrink hidden md:inline-flex"/>
					</div>
				</div>
			</div>
			{/* center */}
            <div className="md:flex items-center justify-center flex-grow hidden">
                <div className="flex items-center space-x-6 md:space-x-2">
                    <HeaderICon active="true" Icon={HomeIcon}/>
                    <HeaderICon Icon={FlagIcon}/>
                    <HeaderICon Icon={PlayIcon}/>
                    <HeaderICon Icon={ShoppingCartIcon}/>
                    <HeaderICon Icon={UserGroupIcon}/>
                </div>
            </div>

			{/* right */}

            <div className="flex items-center sm:space-x-2 justify-end">
                {/* img  */}
                <Image
                onClick={signOut}
                className="rounded-full cursor-pointer"
                src={session.user.image}
                width={40}
                height={40}
                layout={"fixed"}
                />

                <p className="font-semiBold pr-3 whitespace-nowrap">{session.user.name}</p>

                <ViewGridIcon className="icon"/>
                <ChatIcon className="icon"/>
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>
		</div>
	);
}

export default Header;
