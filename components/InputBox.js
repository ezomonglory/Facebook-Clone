import React, { useState } from "react";
import Image from "next/image";
import { useRef } from "react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { db, storage } from "../firebase";
import {
	collection,
	addDoc,
	setDoc,
	serverTimestamp,
	doc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function InputBox() {
	const inputRef = useRef();
	const filePickerRef = useRef();
	const { data: session } = useSession();
	const [imageToPost, setImageToPost] = useState();
	const [imageUpload, setImageUpload] = useState();

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
			setImageUpload(e.target.files[0]);
			reader.readAsDataURL(e.target.files[0]);
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
	return (
		<div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
			<div className='flex space-x-1 sm:space-x-4 p-0 sm:p-4 items-center '>
				<Image
					width={40}
					height={40}
					layout='fixed'
					className='rounded-full w-full'
					src={session.user.image}
				/>

				<form className='flex flex-1'>
					{/* session user.name gats they here */}
					<input
						className='rounded-full h-10 bg-gray-100 outline-none px-5 flex-grow'
						type='text'
						placeholder={`whats on your mind ${session.user.name}`}
						ref={inputRef}
					/>

					<button className='hidden' onClick={sendForm} type='submit'>
						Submit
					</button>
				</form>

				{imageToPost && (
					<div
						onClick={removeImage}
						className='h-10 flex flex-col filter hover:brightness-105 transform hover:scale-105 cursor-pointer'
					>
						<img src={imageToPost} className='h-10 object-contain' />
						<p className='text-red-500 text-center'>Remove</p>
					</div>
				)}
			</div>

			<div className='flex p-3 justify-evenly border-t'>
				<div className='inputIcon'>
					<VideoCameraIcon className=' text-red-600 h-7 ' />
					<p className='text-xs sm:text-sm'>Live Video</p>
				</div>

				<div
					className='inputIcon'
					onClick={() => filePickerRef.current.click()}
				>
					<CameraIcon className=' text-green-600 h-7 ' />
					<p className='text-xs sm:text-sm xl:text-base'> Photo/Video</p>
					<input
						type='file'
						className='hidden'
						onChange={addImagePost}
						ref={filePickerRef}
					/>
				</div>

				<div className='inputIcon hidden sm:inline-flex'>
					<EmojiHappyIcon className=' text-yellow-300 h-7  ' />
					<p className='text-xs sm:text-sm xl:text-base'>Feelings/Activities</p>
				</div>
			</div>
		</div>
	);
}

export default InputBox;
