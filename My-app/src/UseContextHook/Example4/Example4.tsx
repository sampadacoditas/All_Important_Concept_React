import { createContext } from 'react'
import { ComponentB } from './ComponentB'
import { ComponentC } from './ComponentC'

export const Context=createContext("")
export const ChannelContext=createContext("")
export const Example4 = () => {
  return (
    // <Context.Provider value={"vishawas"}>
    //     <ChannelContext.Provider value={"code evolution"}>
    //     <ComponentC/>
    //     </ChannelContext.Provider>
    // </Context.Provider>
    <Context.Provider value={"vishwas"}>
        <ChannelContext.Provider value={"useChannel"}>
        <ComponentB/>
        </ChannelContext.Provider>
    </Context.Provider>
  )
}
