import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  console.log("render", count);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    setTimeout(() => {
      console.log("setTimeout", count);
    }, 1000);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>+1</button>
    </div>
  );
}
