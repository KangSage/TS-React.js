// React.FC의 장단점
// 아직까지는 defaultProps가 정상 작동하지 않는 문제가 있음

import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
}

// mark를 비구조화 할당할 때 기본값을 넣어준다.
const Greetings: React.FC<GreetingsProps> = ({ name, mark = '!' }) => (
  <div>
    Hello, {name} {mark}
  </div>
);

// 무쓸모?
Greetings.defaultProps = {
  mark: '!'
}

export default Greetings;