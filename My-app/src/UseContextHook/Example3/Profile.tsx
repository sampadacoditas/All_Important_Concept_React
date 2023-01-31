import React, { useContext } from "react";
import { LoginContext } from "./UseContextHook3";
export const Profile = () => {

  const {  username } = useContext(LoginContext);

  return <div> 
    <h1>Profile</h1>{username}</div>;
};
