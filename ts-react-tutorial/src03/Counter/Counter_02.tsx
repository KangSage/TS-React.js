import React, { useState } from "react";

function Counter() {
  // Generics에 굳이 number를 넣지 않아도 타입 추론을 하기 때문에 굳이 필요없다.
  // const [count, setCount] = useState<number>(0);
  const [count, setCount] = useState(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
