import React from "react";
import StoryCard from "./StoryCard";

const stories = [
	{
		name: "Ezomon Glory",
		// src: "https://links.papareact.com/zof",
        src: "/image/fb.png",
		// profile: "https://links.papareact.com/lv4",
        profile: "/image/fb.png",
	},

	{
		name: "Elon Musk",
		// src: "https://links.papareact.com/zof",
        src: "/image/fb.png",
		// profile: "https://links.papareact.com/lv4",
        profile: "/image/fb.png",
	},

	{
		name: "Jeff Bezos",
		// src: "https://links.papareact.com/k2j",
        src: "/image/fb.png",
		// profile: "https://links.papareact.com/f0p",
        profile: "/image/fb.png",
	},

	{
		name: "Mark Zuckerberg",
		// src: "https://links.papareact.com/xql",
        src: "/image/fb.png",
		// profile: "https://links.papareact.com/snf",
        profile: "/image/fb.png",
	},

	{
		name: "Bill Gates",
		// src: "https://links.papareact.com/4u4",
        src: "/image/fb.png",
		// profile: "https://links.papareact.com/zvy",
        profile: "/image/fb.png",
	},
];

function Stories() {
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
