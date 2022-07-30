import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import {  query, orderBy } from "firebase/firestore";
import { collection } from "firebase/firestore";

function Posts() {    
	const [vaues] = useCollection(		
        query(collection(db, "Posts"),orderBy("time","desc"))
					
	);

   
	
    if (vaues) {
        const values = vaues.docs.map((doc)=> (doc.data()))   
        console.log(values)
        
        if (values.length == 0) {
            return<div className="text-center items-center mx-auto justify-center text-lg mt-5 flex  "><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg> <span>Network Error!</span></div>
        }

        return (
            <div>
               {values.map((obj)=> {
                return <Post                 
                key = {obj.id}
                message = {obj.message}
                email = {obj.email}
                image = {obj.image}
                imageUrl = {obj.imageUrl}
                time = {obj.timeStamp}
                name = {obj.name}
                />               
               })}
            </div>
        )

        

    } else {
        return <div className="flex justify-center items-center">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500 mt-10 border-blue-500 border-t-0 border-r-0" role="status">
          <span className="visually-hidden bg-blue-500"></span>
        </div>
      </div>
    }	   

}

export default Posts;
