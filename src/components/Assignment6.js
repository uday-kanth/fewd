import React, { useState } from "react";

function Assignment6() {
  const [count, setCount] = useState(0);
  const handleInc = () => {
    setCount(count+1);
  };
const handleDec = () => {
    setCount(count-1);
  };
  return (
    <div>
      <div>
        <button onClick={handleDec}>Decrease</button>
        <button onClick={handleInc}>Increase</button>
        <h5>Count is {count}</h5>
      </div>
    </div>
  );
}

export default Assignment6;