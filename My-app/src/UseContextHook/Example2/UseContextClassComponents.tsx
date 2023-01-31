import React, { Component, createContext } from 'react'
import {ThemeContext} from "./UseContextHook2"

export default class UseContextClassComponents extends Component
{
    themeStyles(dark:string)
    {
        return{
            backgroundColor:dark ? "#333" :"red",
            color:dark ? "red" :"#333",
            padding:"2rem",
            margin:"2rem"
        }
    }
    
    render() {
        return(
            <ThemeContext.Consumer>
                {
                    darkTheme=>{
                        return(
                            <div
                            style={this.themeStyles(darkTheme)}>
                                classTheme
                            </div>

                            
                        )
                    }
                }
            </ThemeContext.Consumer>
            
        )

       
    }
} 