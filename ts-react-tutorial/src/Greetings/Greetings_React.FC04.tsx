// React.FC의 장단점
// 아직까지는 defaultProps가 정상 작동하지 않는 문제가 있음

import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
}

const Greetings: React.FC<GreetingsProps> = ({ name, mark }) => (
  <div> Hello, {name} {mark}</div>
);

Greetings.defaultProps = {
  mark: '!'
}

// export default Greetings;