import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
import SideBar from "../components/SideBar";
import Feed from "../components/Feed";
import Widget from "../components/Widget";
import { collection, getDocs, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import Modal from "../components/Modal";

export default function Home({ session }) {
	const [show, setShow] = useState(false);
	if (!session) return <Login />;

	return (
		<div className='bg-gray-100 h-full'>
			<Head>
				<title>Facebook</title>
			</Head>

			<Header />
			<main className='flex relatve w-full '>
				{show ? (
					<div className='absolute mx-auto w-full  bg h-full pt-[10%] z-40'>
						<Modal setShow={setShow} />
					</div>
				) : (
					""
				)}
				{/* sideBar */}
				<SideBar />
				{/* Feed that is the center */}
				<Feed setShow ={setShow} />
				{/* widget */}
				<Widget />
			</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	return {
		props: {
			session: await unstable_getServerSession(
				context.req,
				context.res,
				authOptions,
			),
		},
	};
}
