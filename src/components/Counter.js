import { useState, useEffect } from 'react';

function Counter() {
    let [count, setCount] = useState(0);
    useEffect(() => {
    if(count > 0){
      document.title = `(${count}) | React Demo`
    }})
    
  return (
    <div>
        <p>Current count: {count}</p>
        <button onClick={() =>{setCount(count+1)}}>Click to increment state!</button>
    </div>
  )
}

export default Counter