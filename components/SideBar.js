import React from "react";
import { useSession } from "next-auth/react";
import SideBarRow from "./SideBarRow";
import Image from "next/image";

import {
	DesktopComputerIcon,
	ClockIcon,
	CalendarIcon,
	UsersIcon,
} from "@heroicons/react/solid";

import {
	UserGroupIcon,
	ChevronDownIcon,
	ShoppingBagIcon,
} from "@heroicons/react/outline";

function SideBar() {
	const { data: session } = useSession();

	return (
		<div className='p-2 mt-5 sm:inline max-w-[600px] xl:min-w-[300px] hidden'>
			{/* <Image src="/image/" width={30} height={30}/> */}
			{/* <SideBarRow src="/image/fb.png" title="Glory Ezomon" /> */}
			<SideBarRow src={session.user.image} title={session.user.name} />
			<SideBarRow Icon={UsersIcon} title='Friends' />
			<SideBarRow Icon={UserGroupIcon} title='Groups' />
			<SideBarRow Icon={ShoppingBagIcon} title='MarketPlace' />
			<SideBarRow Icon={DesktopComputerIcon} title='Watch' />
			<SideBarRow Icon={CalendarIcon} title='Events' />
			<SideBarRow Icon={ClockIcon} title='Memories' />
			<SideBarRow Icon={ChevronDownIcon} title='See More' />
		</div>
	);
}

export default SideBar;
