import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1 className="heading_style">{count}</h1>
      <button onClick={incrementCount}>Click me!</button>
    </>
  );
}

export default App;
