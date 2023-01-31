import React, { useState } from 'react'

export const UseStateExample = () => {
  const [state,setState]=useState(0)
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>setState(state+1)}>Click Me</button>
    </div>
  )
}
