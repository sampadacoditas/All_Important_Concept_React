import React, { useContext } from 'react'
import { ChannelContext, Context } from './Example4';

export const ComponentB = () => {
    const user=useContext(Context);
    const channel=useContext(ChannelContext)
  return (
    <div>{user}{channel}</div>
  )
}
