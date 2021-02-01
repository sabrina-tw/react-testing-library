import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h3>Counter</h3>
      Counter Value: {value}
      <button onClick={() => setValue(value + 1)}>+1</button>
    </div>
  );
};

export default Counter;
