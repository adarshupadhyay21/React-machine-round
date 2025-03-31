import React, { useState } from 'react'

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
     <h1>Toggle Switch</h1>
     <button onClick={()=>setIsOn(!isOn)} style={{backgroundColor:isOn?"Green" : "gray"}}>{isOn?"ONN":"OFF"}</button>
    </>
  );
}

export default Toggle;

