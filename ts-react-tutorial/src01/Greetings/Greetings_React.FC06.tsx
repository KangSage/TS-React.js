// React.FC를 제거한 경우 I

import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
};

// 비구조화 할당 시 기본 값을 설정하지 않아도 잘 작동한다!
// 이슈가 해결될 때 까진 FC를 사용하지 않는 것을 권장.
const Greetings = ({ name, mark }: GreetingsProps) => {
  return (
    <div>
      Hello, {name} {mark}
    </div>
  );
};

Greetings.defaultProps = {
  mark: "!"
};

export default Greetings;
