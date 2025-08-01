// #region scope1
function main() {
  {
    var a = 1;
    const b = 2;
  }
  console.log(a);
  console.log(b);
}

main();
console.log(a);
// #endregion scope1

// #region scope2
const text = "Hello";
function printText() {
  console.log(text);
}

function main() {
  const text = "World";
  printText();
  console.log(text);
}

main();
// #endregion scope2

// #region closure1
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// #endregion closure1
// #region closure2
for (var i = 0; i < 5; i++) {
  function print(i) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
  print(i);
}
// #endregion closure2
// #region closure3
for (var i = 0; i < 5; i++) {
  function printText() {
    var temp = i;
    setTimeout(() => {
      console.log(temp);
    }, 100);
  }
  printText();
}
// #endregion closure3
// #region closure4
for (var i = 0; i < 5; i++) {
  function printText() {
    setTimeout(() => {
      var temp = i;
      console.log(temp);
    }, 100);
  }
  printText();
}
// #endregion closure4
// #region react
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
// #endregion react
