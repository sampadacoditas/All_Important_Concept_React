import React, { useEffect, useState } from 'react'

export const UseEffectExample1 = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
       async function getData()
       {
        try{
            let response=await fetch("https://jsonplaceholder.typicode.com/posts");
            let data=await response.json();
            console.log(data)
            setData(data)
        }
        catch(e){
            console.log(e)
        }
       } 
       getData()
    },[])
    

  return (
    <div>
      {
        data.map((item:any)=>{
          return(
            <>
            <li>{item.title}</li>
            </>
          )
        })
      }
    </div>
  )
}
