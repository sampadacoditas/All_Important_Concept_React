import React, { createContext, useState } from 'react'
import { Login } from './Login';
import { Profile } from './Profile';
import { IProps } from './UseContext.types';


export const LoginContext=createContext<IProps>({})
export const UseContextHook3 = () => {
    const [showProfile,setShowProfile]=useState(false);
    const [username,setUsername]=useState("")
    console.log(LoginContext)
  return (
     
        <LoginContext.Provider value={{showProfile,setUsername,setShowProfile,username}}>
           {showProfile?<Profile/>:<Login/>}
        </LoginContext.Provider>
  )
}
