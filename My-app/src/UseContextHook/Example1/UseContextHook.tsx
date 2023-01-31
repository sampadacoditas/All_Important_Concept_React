import React, { useState,createContext } from 'react'
import { Login } from './Login'
import { User } from './User'

export const AppContext=createContext(null)

export const UseContextHook = () => {
    const [userName,setUserName]=useState("")
  return (
    // @ts-ignore
    <AppContext.Provider value={{userName,setUserName}}>
        <Login/>
        <User/>
    </AppContext.Provider>
  )
}
