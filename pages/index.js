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

export default function Home({ session}) {
	
	if (!session) return <Login />;

	return (
		<div className='bg-gray-100 h-screen'>
			<Head>
				<title>Facebook</title>
			</Head>

			<Header />
			<main className='flex'>
				{/* sideBar */}
				<SideBar />
				{/* Feed that is the center */}
				<Feed  />
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
