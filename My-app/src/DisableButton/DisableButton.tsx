import React, { useState } from "react";

export const DisableButton = () => {
  const [state, setState] = useState();
  const [status, setStatus] = useState();

  function handleChange(value: any) {
    setState(value.trim())
    
  }
  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e.target.value)} value={state}  />
      <button disabled={!state} >submit</button>
    </div>
  );
};
