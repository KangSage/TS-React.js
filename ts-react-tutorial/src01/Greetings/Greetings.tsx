import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  // 생략 가능한 props에는 ?를 붙여주면 된다.
  optional?: string;
};

// 에로우 펑션을 안쓸 경우
function Greetings({ name, mark, optional }: GreetingsProps) {
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
    </div>
  );
}

Greetings.defaultProps = {
  mark: "!"
};

export default Greetings;
