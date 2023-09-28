import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function decrement() {
    setCount(count - 1);
  }
  return (
    <div className="tutorial">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
