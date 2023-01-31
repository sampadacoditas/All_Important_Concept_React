import React, { useState } from 'react'

export const UseStateHook = () => {
    const [counter,setCounter]=useState(0);
    const [inputValue,setInputValue]=useState("pedro")
    function handleSetInputValue(e:any)
    {
        setInputValue(e.target.value)
    }
  return (
    <div>
        <div>
        {counter}
        </div>
        <div>
            <button onClick={()=>setCounter(counter+1)}>click me</button>
        </div>

        {/* 2nd example */}
        <input type="text"  onChange={(e)=>handleSetInputValue(e)}/>
        {inputValue}
    </div>

  )
}
