import React, { useReducer } from 'react'

export const UseReducerHook = () =>
{
    const reducer=(state:any,action:any)=>{
        switch(action.type)
        {
            case "INCREMENT":
                return{count:state.count+1,showText:state.showText}
            case "toggleShowText":
                return{count:state.count,showText:!state.showText}
            default:
                return state
        }
    }
    const [state,dispatch]=useReducer(reducer,{
        count:0,
        showText:false
    })
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>
        {
            dispatch({type:"INCREMENT"})
            dispatch({type:"toggleShowText"})
        }
        }>click me</button>
        {state.showText&&<p>this is the text</p>}
        

    </div>
  )
}
