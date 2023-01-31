import React, { useEffect, useState } from 'react'
import axios from "axios"
export const UseEffectHook = () => {
    let [data,setData]=useState("");
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setData(response.data[2].email);
            console.log(response.data)
        }).catch((error)=>console.log(error))
        console.log("hello world")
    },[])
  return (
    <div>jchgcgh
        <h1>{data}</h1>
    </div>
  )
}
