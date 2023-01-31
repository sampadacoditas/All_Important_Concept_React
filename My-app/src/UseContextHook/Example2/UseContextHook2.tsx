 import React, { createContext, useState } from 'react'
 
 export const ThemeContext=createContext("")
 export const UseContextHook2 = () => {
    const [darkTheme,setDarkTheme]=useState(true)
    console.log(ThemeContext)
    function toggleTheme()
    {
        setDarkTheme(prevDarkTheme=>!prevDarkTheme)
    }
       return (
     <div>
        {/* @ts-ignore */}
        <ThemeContext.Provider value={darkTheme}>
            <button onClick={toggleTheme}>ToggleTheme</button>
        </ThemeContext.Provider>
     </div>
   )
 }
 