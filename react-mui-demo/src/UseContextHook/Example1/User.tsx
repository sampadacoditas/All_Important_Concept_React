import React, { useContext } from 'react'
import { AppContext } from './UseContextHook'
export const User = () => {
  const {userName}:any=useContext(AppContext)
  return (
    <div>
        <h1>{userName}</h1>
    </div>
  )
}
