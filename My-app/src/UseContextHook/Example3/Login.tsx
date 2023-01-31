import React, { useContext } from "react";
import { LoginContext } from "./UseContextHook3";

export const Login = () => {
  const { setUsername, setShowProfile }=useContext(LoginContext);
  return (
    <div>
      <input type="text" onChange={(e) => {if(setUsername)setUsername(e.target.value)}} />
      <input type="text" />
      <button onClick={() => {if(setShowProfile)setShowProfile(true)}}>click</button>
    </div>
  );
};
