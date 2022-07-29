import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import {  orderBy } from "firebase/firestore";
import { collection } from "firebase/firestore";

function Posts() {    
	const [vaues] = useCollection(		
			collection(db, "Posts"),
			orderBy(" ", "desc"),		
	);

   
	
    if (vaues) {
        const values = vaues.docs.map((doc)=> (doc.data()))   
        console.log(values)
        
        if (values.length == 0) {
            return <h1>Werey Your Network Bad</h1>
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
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500 mt-10" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    }	   

}

export default Posts;
