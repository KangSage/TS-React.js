// 컴포넌트에서 함수 타입의 props 받아오기

import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void; // 리턴 값이 없는 함수
};

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: "!"
};

export default Greetings;
