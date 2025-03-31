import React, { useState } from 'react'

function Counter() {
    const [counter,setCounter] = useState(0)
  return (
    <div>
      <h1>Counter App</h1>
      <p>Counter is {counter}</p>
      <button onClick={()=>setCounter(counter+1)}> Increament</button>
      <button onClick={()=> setCounter(counter-1)}> Decrement</button>
    </div>
  )
}

export default Counter
