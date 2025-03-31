import React, { useEffect, useState } from 'react'

function AutoCounter() {
    const [count,setCount] = useState(0);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCount((prev) => prev + 1); // Increment the count every second
        }, 1000);
    
        // Step 3: Clean up the interval when the component unmounts
        return () => {
          clearInterval(intervalId);
        };
      },[]);

  return (
    <div>
      <h1>Auto Increament Counter</h1>
      <p>Count is: {count}</p>
    </div>
  )
}

export default AutoCounter
