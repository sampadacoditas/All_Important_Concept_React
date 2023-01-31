import React, { useContext } from 'react'
import {AppContext} from "./UseContextHook"
export const Login = () => { 
  const {setUserName}:any=useContext(AppContext)

  return (
    <div>
        <input type="text" onChange={(e)=>setUserName(e.target.value)} />
    </div>
  )
}