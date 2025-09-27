export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 5);

    setTimeout(() => {
      console.log("count", count);
    }, 1000);
  }

  return <button onClick={() => handleClick()}>+5</button>;
}
