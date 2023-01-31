import React, { useEffect, useState } from 'react'

export const UseEffectHook2 = () => {
 const [count,setCount]=useState(0)
 const [previousCount,setPreviousCount]=useState(count)
 console.log("3")
 
   useEffect(()=>{
    function increment()
    {
      setPreviousCount(count-1)
    }
    increment()
    console.log("first")
   },[count])
 
 console.log("2")
  return (
    <div>
        <div>{count}</div>
        <div>{previousCount}</div>
        <h1>whecuywe</h1>
        <button onClick={()=>setCount(count+1)}>click me</button>
        {/* <button>next</button> */}

    </div>
  )
}

