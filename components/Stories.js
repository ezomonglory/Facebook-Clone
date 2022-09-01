import React from "react";
import StoryCard from "./StoryCard";
import { useSession } from "next-auth/react";
const stories = [
	{
		name: "Ezomon Glory",
		src: "/image/eg.jpg",        
		profile: "/image/E.g.jpg",
	},

	{
		name: "Elon Musk",
		src: "https://links.papareact.com/4zn",        
		profile: "https://links.papareact.com/kxk",        
	},

	{
		name: "Jeff Bezos",
		src: "https://links.papareact.com/k2j",
		profile: "https://links.papareact.com/f0p",

	},

	{
		name: "Mark Zucker...",
		src: "https://links.papareact.com/xql",
		profile: "https://links.papareact.com/snf",

	},

	{
		name: "Bill Gates",
		src: "https://links.papareact.com/4u4",
		profile: "https://links.papareact.com/zvy",

	},
];

function Stories() {
    const { data: session } = useSession();
	return (
		<div className='flex justify-center space-x-3 mx-auto'>
			{stories.map((story) => {
				return (
					<StoryCard
                            key={story.src}
						name={story.name}
						src={story.src}
						profile={story.profile}
					/>
				);
			})}
		</div>
	);
}

export default Stories;
