import React from "react";
import { Context,ChannelContext } from "./Example4";

export const ComponentC = () => {
  return (
    <div>
      <Context.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
               {
                channel=>{
                    return <>
                    user context {user} {channel}
                    </>
                }
               } 
            </ChannelContext.Consumer>
          )
        
        }}
      </Context.Consumer>
    </div>
  );
};
