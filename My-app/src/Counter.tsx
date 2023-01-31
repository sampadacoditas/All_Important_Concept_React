import React, { useState } from 'react'

export const Counter = () => {
    const [count,setCount]=useState(0);

    function handleClick()
    {
        setCount(count+1)
    }
  return (
    <div>
        <div>clcik me {count}</div>
        <button onClick={handleClick}>click</button>
    </div>
  )
}
