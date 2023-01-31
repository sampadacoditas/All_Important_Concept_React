import React, { useReducer } from 'react'

export const PracticeUseReducer = () => {
    const reducer=(state:any,action:any)=>{
        console.log(state)
        console.log(action)
        switch(action)
        {
            case "INCREMENT":
                return({count:state.count+1,showText:state.showText})
            case "toggleButton":
                return({count:state.count,showText:!state.showText})
            default:
                return state
        }

    }
    // console.log("useReducer")
    // console.log("useReducer")
    // console.log("useReducer")
    // console.log("useReducer")
  

    const [state,dispatch]=useReducer(reducer,
        {count:0,showText:false})
        console.log(state)
    
        // console.log(state)
        // console.log(dispatch)
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>{
            dispatch("INCREMENT")
            dispatch("toggleButton")
    }}>click me</button>
   <h1>fev</h1>
    </div>
  )
}
