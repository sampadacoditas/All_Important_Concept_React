import React, { useReducer } from "react";

// const reducer = ( state:any, action : any) => {
//     switch(action.type)
//     {
//         case "Increment":
//             return{count:state.count+1,showText:state.showText}
//         case "toggleShowText":
//             return {count:state.count,showText:!state.showText}
//         default:
//             return state
//     }
// };
const reducer=(state:any,action:any)=>{
    switch(action.type)
    {
        case "Increment":
            return {count:state.count+1}
        default:
            return state;
    }

}
export const UseReducerExample = () => {
//   const [state, dispatch] = useReducer(reducer, { count: 0, showText: false });
 const [state,dispatch]=useReducer(reducer,{count:0})
  return (<div>
    <h1>{state.count}</h1>
    <button onClick={()=>{
        dispatch({type:"Increment"})
        // dispatch({type:"Increment"});
        // dispatch({type:"toggleShowText"})
    }

}>click me</button>

  </div>);
};
