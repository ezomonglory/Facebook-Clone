import { CameraIcon, XIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Loader from "./Loader";
import { db, storage } from "../firebase";
import {
	collection,
	addDoc,
	setDoc,
	serverTimestamp,
	doc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function Modal({ setShow }) {
	const { data: session } = useSession();	
	const [loading, setLoading] = useState(false);
	const [photo, setPhoto] = useState(false);	
	const Iref = useRef("");
	const btnRef = useRef("");
	const inputRef = useRef("");
	const [imageToPost, setImageToPost] = useState("");
	const [imageUpload, setImageUpload] = useState("");

	const sendForm = (e) => {
		e.preventDefault();
		if (!inputRef.current.value) return;

		const docData = {
			message: inputRef.current.value,
			name: session.user.name,
			email: session.user.email,
			image: session.user.image,
			timeStamp: serverTimestamp(),
			time:new Date(),
		};

		addDoc(collection(db, "Posts"), docData).then((ele) => {
			const docRef = doc(db, "Posts", ele.id);
            
			if (imageToPost) {
				const storageRef = ref(storage, ele.id);
				uploadBytes(storageRef, imageUpload).then(() => {
					getDownloadURL(storageRef).then((url) => {
						console.log(url, ele.id);
						setDoc(docRef, { imageUrl: url }, { merge: true }).then(
							console.log("data updated"),
						);
					});
				});
			}
		});
		inputRef.current.value = "";
		setImageToPost("");
	};

	const addImagePost = (e) => {
		const reader = new FileReader();
		if (e.target.files[0]) {
			setImageToPost(e.target.files[0]);
			setImageUpload(e.target.files[0]);
			reader.readAsDataURL(e.target.files[0]);
		}

		if (reader.LOADING === 1) {
			setLoading(true);
		}

		if (e.target.files.length === 0) {
			setLoading(false);
		}


		reader.onload = (readerEvent) => {
			setImageToPost(readerEvent.target.result);
		};
		inputRef.current.focus()
	};

	const removeImage = () => {
		setImageToPost("");
		setImageUpload("");
	};


	const handleImage = () => {
		Iref.current.click();
	};


	return (
		<div className={` md:w-[80%] w-full lg:w-[40%] mx-auto my-auto bg-white rounded-md z-40 p-4 ${photo ? "-mt-20" : ""}`}>
			<div className='flex items-center border border-b-gray-300 border-transparent pb-2'>
				<div className='text-black w-11/12 text-lg font-bold  text-center '>
					Create Post{" "}
				</div>
				<div
					className='text-lg bg-gray-300 text-black rounded-full text-center hover:text-red-600 cursor-pointer p-2'
					onClick={() => setShow(false)}
				>
					<XIcon className="h-6 w-6" />
				</div>
			</div>

			<div className='flex gap-2 items-center mt-2'>
				<Image
					src={session.user.image}
					width={40}
					height={40}
					layout='fixed'
					className='rounded-full'
				/>
				<h1 className='text-black'>{session.user.name}</h1>
			</div>
			<form className=''>
				{/* session user.name gats they here */}
				<input
					className='rounded-lg  mt-4 h-10 text-lg w-full outline-none px-5'
					type='text'
					placeholder={`whats on your mind ${session.user.name} ?`}
					ref={inputRef}
				/>

				{photo ? (
					<div className='border rounded-lg  p-2 relative my-4'>
						<div
							className='text-md bg-white rounded-full absolute right-4 z-40 p-2  text-black text-center hover:text-red-600 cursor-pointer mt-[4px]'
							onClick={() => {
								setPhoto(false)
								setLoading(false)
							}}
						>
							<XIcon className='w-6 h-6' />
						</div>
						<div
							className='h-[30vh] w-full bg-gray-100 text-black rounded-lg  text-center p-2 cursor-pointer relative overflow-hidden'
							onClick={handleImage}
						>
							<input
								ref={Iref}
								type={"file"}
								className='hidden'
								onChange={addImagePost}
							/>
							{imageToPost ? (
								<div
									className='text-md bg-gray-300 absolute left-2 z-40  text-black text-center hover:text-red-600 cursor-pointer rounded-lg py-2 px-4 '
									onClick={removeImage}
								>
									Change
								</div>
							) : (
								""
							)}
							{loading ? (
								<Loader />
							) : (
								<h2 className='mt-20 text-md font-bold'>Add Photos</h2>
							)}
							{imageToPost ? <Image src={imageToPost} layout='fill' /> : ""}
						</div>
					</div>
				) : (
					""
				)}

				<div
					className={`flex gap-8 border rounded-lg  cursor-pointer p-2 ${
						photo ? "mt-2" : "mt-24"
					}`}
					onClick={() => {
						setPhoto(true);
						setImageToPost("");
					}}
				>
					<p>Add to your post</p>
					<div className='flex gap-2'>
						<CameraIcon className=' text-green-600 h-7 ' />
						<p className='text-xs sm:text-sm xl:text-base'> Photo/Video</p>
					</div>
				</div>

				<button ref={btnRef} className='hidden' onClick={sendForm} type='submit'>
					Submit
				</button>

				<div
					className='bg-blue-500 text-center text-white mt-4 py-2 rounded-2xl hover:bg-blue-400 cursor-pointer w-full'
					onClick={() => {
						setShow(false)
						btnRef.current.click()
					}}
				>
					Post
				</div>
			</form>
		</div>
	);
}

export default Modal;
